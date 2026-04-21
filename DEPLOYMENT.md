# Guia de Deploy - Nuxt 4 no Coolify

Este documento detalha as configurações necessárias para garantir que o projeto Nuxt 4 seja implantado com sucesso no Coolify (usando Nixpacks).

## 1. Requisitos de Ambiente

### Versão do Node.js
O Nuxt 4 (especificamente o Nitro) exige o **Node.js >= 22.12.0**.
- **No `package.json`**: Certifique-se de que o campo `engines` está presente:
  ```json
  "engines": {
    "node": ">=22.12.0"
  }
  ```
- **No Coolify**: Adicione uma variável de ambiente:
  `NIXPACKS_NODE_VERSION=22.12.0` (ou apenas `22`, mas garantir que o builder suporte a subversão correta).

## 2. Compatibilidade de Binários Nativos (Windows -> Linux)

O Nuxt 4 utiliza o `@oxc-parser`, que possui binários nativos. Se você gera o `package-lock.json` no Windows, ele não incluirá por padrão os binários necessários para o Linux (onde o Coolify roda).

### Como corrigir localmente:
Sempre que adicionar novas dependências ou atualizar o projeto, rode o comando abaixo para garantir que o suporte ao Linux seja salvo no seu `package-lock.json`:

```bash
npm install --os=linux --cpu=x64 --libc=glibc --save-optional --package-lock-only
```

Isso garante que o comando `npm ci` no servidor de deploy funcione sem erros de "module not found".

## 3. Scripts de Inicialização

O Coolify/Nixpacks precisa saber como iniciar a aplicação em produção.
- **No `package.json`**: O script `start` deve apontar para o servidor gerado pelo build:
  ```json
  "scripts": {
    "build": "nuxt build",
    "start": "node .output/server/index.mjs"
  }
  ```

## 4. Configurações no Painel do Coolify

1. **Start Command**: Deixe o campo **Start Command** vazio no Coolify para que ele use automaticamente o `npm start` definido no `package.json`.
2. **Porta**: A porta padrão do Nuxt é `3000`. Certifique-se de que o Coolify está mapeando a porta correta.
3. **Variáveis de Ambiente**:
   - `NODE_ENV=production`
   - `NIXPACKS_NODE_VERSION=22.12.0`
   - Quaisquer chaves de API (ex: `RESEND_API_KEY`) devem ser adicionadas aqui.

## 5. Troubleshooting (Resolução de Problemas)

- **Erro `/bin/bash: -c: option requires an argument`**: Geralmente significa que o campo "Start Command" no Coolify tem apenas espaços ou comandos vazios. Limpe o campo ou use `npm start`.
- **Erro `Cannot find module '@oxc-parser/binding-linux-x64-gnu'`**: Significa que o `package-lock.json` não contém as plataformas opcionais. Rode o comando do item 2 e faça o push.
