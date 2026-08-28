/**
 * EmailJS — Opção B (envio automático com PDF em anexo)
 *
 * 1. Conta em https://www.emailjs.com/ (anexos exigem plano Personal ou superior)
 * 2. Email Service → Gmail → geralelif@gmail.com
 * 3. Email Template → Content (exemplo abaixo) + Attachments (ver passo 4)
 * 4. Attachments → Add Attachment → Variable Attachment
 *    - Parameter name: registo_pdf
 *    - Filename: {{pdf_filename}}
 *    - Content type: PDF
 * 5. Copie este ficheiro para emailjs-config.js e preencha as chaves.
 *
 * --- Conteúdo sugerido do template (Subject) ---
 * {{subject}}
 *
 * --- Conteúdo sugerido do template (Body) ---
 * Novo registo de viatura recebido pelo site.
 *
 * Cliente: {{from_name}}
 * Responder para: {{reply_to}}
 *
 * {{message}}
 */
const EMAILJS_CONFIG = {
  publicKey: "YOUR_PUBLIC_KEY",
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  toEmail: "geralelif@gmail.com",
};
