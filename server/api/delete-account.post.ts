import { Resend } from 'resend';

interface DeleteAccountBody {
  email?: string;
  reason?: string;
  agreed?: boolean;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody<DeleteAccountBody>(event);

  const email = String(body?.email || '').trim();
  const reason = String(body?.reason || '').trim();
  const agreed = Boolean(body?.agreed);

  if (!email || !emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'A valid email address is required.',
    });
  }

  if (!agreed) {
    throw createError({
      statusCode: 400,
      statusMessage: 'The irreversibility of the deletion must be acknowledged.',
    });
  }

  if (!config.resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Missing RESEND_API_KEY in environment.',
    });
  }

  const ownerEmail = String(config.resendOwnerEmail || config.resendToEmail || '').trim();
  if (!ownerEmail) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Missing owner recipient email in environment.',
    });
  }

  const resend = new Resend(config.resendApiKey);
  const submittedAt = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const deadline = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  const safeEmail = escapeHtml(email);
  const safeReason = reason ? escapeHtml(reason).replace(/\n/g, '<br/>') : '';

  const ownerText = [
    'PEDIDO DE EXCLUSAO DE CONTA (LGPD)',
    '',
    `Email da conta: ${email}`,
    `Recebido em: ${submittedAt}`,
    `Prazo legal para conclusao: ${deadline}`,
    '',
    reason ? `Motivo informado:\n${reason}` : 'Nenhum motivo informado.',
    '',
    'Este pedido exige acao manual: localize a conta, apague os dados associados e confirme com o titular.',
  ].join('\n');

  const ownerHtml = `
    <div style="background:#0b1020;padding:32px 20px;font-family:Arial,sans-serif;color:#e9efff;">
      <div style="max-width:640px;margin:0 auto;background:linear-gradient(160deg,#111a30,#1a2542);border-radius:16px;overflow:hidden;">
        <div style="padding:24px 28px;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#9eb2df;">Loboczss // Exclusao de conta</p>
          <h1 style="margin:0;font-size:28px;line-height:1.15;color:#ffffff;">Pedido de exclusao recebido.</h1>
        </div>
        <div style="padding:0 28px 24px;">
          <p style="margin:0 0 8px;font-size:14px;color:#cdd9ff;"><strong>Email da conta:</strong> ${safeEmail}</p>
          <p style="margin:0 0 8px;font-size:14px;color:#cdd9ff;"><strong>Recebido em:</strong> ${submittedAt}</p>
          <p style="margin:0 0 20px;font-size:14px;color:#cdd9ff;"><strong>Prazo legal:</strong> ${deadline}</p>
          ${safeReason ? `<div style="background:rgba(255,255,255,.04);border-radius:12px;padding:16px;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#9eb2df;">Motivo informado</p>
            <p style="margin:0;font-size:15px;line-height:1.6;color:#f1f5ff;">${safeReason}</p>
          </div>` : ''}
          <p style="margin:20px 0 0;font-size:14px;line-height:1.6;color:#cdd9ff;">Este pedido exige acao manual: localize a conta, apague os dados associados e confirme com o titular.</p>
        </div>
      </div>
    </div>
  `;

  const userText = [
    'Recebemos o seu pedido de exclusao de conta.',
    '',
    `Email da conta: ${email}`,
    `Recebido em: ${submittedAt}`,
    '',
    `A exclusao definitiva dos seus dados sera concluida em ate 30 dias (ate ${deadline}), conforme a LGPD.`,
    'Voce recebera a confirmacao neste mesmo endereco assim que o processo terminar.',
    '',
    `Se voce nao fez este pedido, responda este email imediatamente ou escreva para ${ownerEmail}.`,
    '',
    'Loboczss',
  ].join('\n');

  const userHtml = `
    <div style="background:#090f1d;padding:32px 20px;font-family:Arial,sans-serif;color:#e9efff;">
      <div style="max-width:640px;margin:0 auto;background:linear-gradient(165deg,#111a31,#1a2544);border-radius:16px;overflow:hidden;">
        <div style="padding:24px 28px;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#9eb2df;">Loboczss // Exclusao de conta</p>
          <h1 style="margin:0;font-size:28px;line-height:1.15;color:#ffffff;">Recebemos o seu pedido.</h1>
        </div>
        <div style="padding:0 28px 24px;">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#d6e0ff;">A exclusao definitiva dos dados associados a <strong>${safeEmail}</strong> sera concluida em ate 30 dias (ate ${deadline}), conforme a LGPD. Voce recebera a confirmacao neste mesmo endereco assim que o processo terminar.</p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:#cdd9ff;">Se voce nao fez este pedido, responda este email imediatamente ou escreva para <strong>${escapeHtml(ownerEmail)}</strong>.</p>
        </div>
      </div>
    </div>
  `;

  const ownerSend = resend.emails.send({
    from: config.resendFromEmail,
    to: [ownerEmail],
    replyTo: email,
    subject: `Pedido de exclusao de conta // ${email}`,
    text: ownerText,
    html: ownerHtml,
  });

  const userSend = resend.emails.send({
    from: config.resendFromEmail,
    to: [email],
    replyTo: ownerEmail,
    subject: 'Recebemos o seu pedido de exclusao de conta // Loboczss',
    text: userText,
    html: userHtml,
  });

  const [ownerResult, userResult] = await Promise.all([ownerSend, userSend]);

  if (ownerResult.error || userResult.error) {
    const errorMessage = ownerResult.error?.message || userResult.error?.message || 'Failed to send email with Resend.';
    throw createError({
      statusCode: 502,
      statusMessage: errorMessage,
    });
  }

  return {
    ok: true,
    ownerEmailId: ownerResult.data?.id || null,
    userEmailId: userResult.data?.id || null,
  };
});
