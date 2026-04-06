import { Resend } from 'resend';

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
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
  const body = await readBody<ContactBody>(event);

  const name = String(body?.name || '').trim();
  const email = String(body?.email || '').trim();
  const message = String(body?.message || '').trim();

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please provide name, email and message.',
    });
  }

  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address.',
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

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

  const ownerText = [
    'NOVA PROPOSTA RECEBIDA',
    '',
    `Nome: ${name}`,
    `Email: ${email}`,
    `Data: ${submittedAt}`,
    '',
    'Mensagem do cliente:',
    message,
  ].join('\n');

  const ownerHtml = `
    <div style="background:#0b1020;padding:32px 20px;font-family:Arial,sans-serif;color:#e9efff;">
      <div style="max-width:640px;margin:0 auto;background:linear-gradient(160deg,#111a30,#1a2542);border:1px solid rgba(255,255,255,.12);border-radius:16px;overflow:hidden;">
        <div style="padding:24px 28px;border-bottom:1px solid rgba(255,255,255,.1);">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#9eb2df;">Loboczss // Nova proposta</p>
          <h1 style="margin:0;font-size:28px;line-height:1.15;color:#ffffff;">Uma nova proposta chegou.</h1>
        </div>
        <div style="padding:24px 28px;">
          <p style="margin:0 0 8px;font-size:14px;color:#cdd9ff;"><strong>Nome:</strong> ${safeName}</p>
          <p style="margin:0 0 8px;font-size:14px;color:#cdd9ff;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin:0 0 20px;font-size:14px;color:#cdd9ff;"><strong>Data:</strong> ${submittedAt}</p>
          <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:16px;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#9eb2df;">Mensagem</p>
            <p style="margin:0;font-size:15px;line-height:1.6;color:#f1f5ff;">${safeMessage}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  const userText = [
    `Ola, ${name}!`,
    '',
    'Recebemos sua proposta com sucesso.',
    'Nossa equipe vai analisar os detalhes e retornar com os proximos passos.',
    '',
    'Resumo enviado:',
    message,
    '',
    `Se quiser complementar algo, responda este email ou escreva para ${ownerEmail}.`,
    '',
    'Loboczss',
  ].join('\n');

  const userHtml = `
    <div style="background:#090f1d;padding:32px 20px;font-family:Arial,sans-serif;color:#e9efff;">
      <div style="max-width:640px;margin:0 auto;background:linear-gradient(165deg,#111a31,#1a2544);border:1px solid rgba(255,255,255,.12);border-radius:16px;overflow:hidden;">
        <div style="padding:24px 28px;border-bottom:1px solid rgba(255,255,255,.1);">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#9eb2df;">Loboczss // Proposta recebida</p>
          <h1 style="margin:0;font-size:28px;line-height:1.15;color:#ffffff;">Obrigado por enviar sua proposta.</h1>
        </div>
        <div style="padding:24px 28px;">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#d6e0ff;">Ola <strong>${safeName}</strong>, recebemos sua mensagem e vamos retornar com uma analise personalizada.</p>
          <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:16px;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#9eb2df;">Resumo da sua mensagem</p>
            <p style="margin:0;font-size:15px;line-height:1.6;color:#f1f5ff;">${safeMessage}</p>
          </div>
          <p style="margin:18px 0 0;font-size:14px;line-height:1.6;color:#cdd9ff;">Se desejar adicionar mais informacoes, responda este email ou fale com a equipe: <strong>${escapeHtml(ownerEmail)}</strong>.</p>
        </div>
      </div>
    </div>
  `;

  const ownerSend = resend.emails.send({
    from: config.resendFromEmail,
    to: [ownerEmail],
    replyTo: email,
    subject: `Nova proposta de ${name} // Loboczss`,
    text: ownerText,
    html: ownerHtml,
  });

  const userSend = resend.emails.send({
    from: config.resendFromEmail,
    to: [email],
    replyTo: ownerEmail,
    subject: 'Recebemos sua proposta // Loboczss',
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
