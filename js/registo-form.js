(function () {
  const form = document.getElementById("registo-form");
  const statusEl = document.getElementById("registo-status");
  const submitBtn = document.getElementById("registo-submit");

  if (!form) return;

  function isEmailJsConfigured() {
    return (
      typeof EMAILJS_CONFIG !== "undefined" &&
      EMAILJS_CONFIG.publicKey &&
      !EMAILJS_CONFIG.publicKey.includes("YOUR_") &&
      EMAILJS_CONFIG.serviceId &&
      !EMAILJS_CONFIG.serviceId.includes("YOUR_") &&
      EMAILJS_CONFIG.templateId &&
      !EMAILJS_CONFIG.templateId.includes("YOUR_")
    );
  }

  function setStatus(message, type) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = `registo-status registo-status--${type || "info"}`;
    statusEl.hidden = !message;
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function buildRegistoNumber() {
    const now = new Date();
    return `ELIF-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}`;
  }

  function setDefaultDateTime() {
    const now = new Date();
    const dataInput = form.querySelector('[name="data"]');
    const horaInput = form.querySelector('[name="hora"]');
    const numeroInput = form.querySelector('[name="numero"]');

    if (dataInput && !dataInput.value) {
      dataInput.value = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    }
    if (horaInput && !horaInput.value) {
      horaInput.value = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    }
    if (numeroInput && !numeroInput.value) {
      numeroInput.value = buildRegistoNumber();
    }
  }

  function getFormData() {
    return Object.fromEntries(new FormData(form).entries());
  }

  function formatDateDisplay(isoDate) {
    if (!isoDate) return "";
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
  }

  function buildSummary(data) {
    return [
      "REGISTO DE VIATURA — Oficina ELIF",
      "",
      `Nº: ${data.numero}`,
      `Data: ${formatDateDisplay(data.data)}  Hora: ${data.hora}`,
      "",
      "DADOS DO CLIENTE",
      `Nome: ${data.nome}`,
      `Telefone: ${data.telefone}`,
      `Email: ${data.email}`,
      `Morada: ${data.morada}`,
      "",
      "DADOS DA VIATURA",
      `Matrícula: ${data.matricula}`,
      `Marca: ${data.marca}`,
      `Modelo: ${data.modelo}`,
      `Ano: ${data.ano}`,
      `Cor: ${data.cor}`,
      `Quilometragem: ${data.quilometragem}`,
      `Nº Chassis: ${data.chassis}`,
      "",
      "SERVIÇO",
      `Serviço solicitado: ${data.servico}`,
      "",
      "Observações:",
      data.observacoes || "-",
    ].join("\n");
  }

  async function buildPdf(data) {
    const { PDFDocument, StandardFonts, rgb } = PDFLib;
    const pdfDoc = await PDFDocument.create();
    const regular = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const navy = rgb(0.12, 0.18, 0.4);
    const red = rgb(0.84, 0.27, 0.25);

    const addPage = () => pdfDoc.addPage([595.28, 841.89]);
    let page = addPage();
    let y = 790;
    const left = 48;
    const line = 18;

    const drawTitle = (text) => {
      page.drawText(text, { x: left, y, size: 16, font: bold, color: red });
      y -= 28;
    };

    const drawSection = (text) => {
      y -= 8;
      page.drawText(text, { x: left, y, size: 12, font: bold, color: navy });
      y -= 22;
    };

    const drawField = (label, value) => {
      const content = `${label}: ${value || "—"}`;
      page.drawText(content, {
        x: left,
        y,
        size: 10,
        font: regular,
        color: rgb(0.1, 0.1, 0.1),
        maxWidth: 500,
        lineHeight: 12,
      });
      y -= line + 4;
      if (y < 70) {
        page = addPage();
        y = 790;
      }
    };

    page.drawText("Oficina ELIF — COMÉRCIO GERAL (SU) LDA", {
      x: left,
      y,
      size: 9,
      font: regular,
      color: navy,
    });
    y -= 24;

    drawTitle("REGISTO DE VIATURA");
    drawField("Nº", data.numero);
    drawField("Data", formatDateDisplay(data.data));
    drawField("Hora", data.hora);

    drawSection("DADOS DO CLIENTE");
    drawField("Nome", data.nome);
    drawField("Telefone", data.telefone);
    drawField("Email", data.email);
    drawField("Morada", data.morada);

    drawSection("DADOS DA VIATURA");
    drawField("Matrícula", data.matricula);
    drawField("Marca", data.marca);
    drawField("Modelo", data.modelo);
    drawField("Ano", data.ano);
    drawField("Cor", data.cor);
    drawField("Quilometragem", data.quilometragem);
    drawField("Nº Chassis", data.chassis);

    drawSection("SERVIÇO SOLICITADO");
    drawField("Serviço", data.servico);
    drawField("Observações", data.observacoes);

    y -= 10;
    page.drawText("Aprovação da Gerência", {
      x: left,
      y,
      size: 11,
      font: bold,
      color: navy,
    });
    y -= 40;
    page.drawLine({
      start: { x: left, y },
      end: { x: 280, y },
      thickness: 1,
      color: rgb(0.4, 0.4, 0.4),
    });
    page.drawText("Assinatura / carimbo", { x: left, y: y - 14, size: 8, font: regular, color: rgb(0.45, 0.45, 0.45) });

    return pdfDoc.save();
  }

  function bytesToBase64(bytes) {
    let binary = "";
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
    }
    return btoa(binary);
  }

  function downloadPdf(bytes, filename) {
    const blob = new Blob([bytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  async function sendWithEmailJs(data, pdfBytes) {
    const pdfBase64 = bytesToBase64(pdfBytes);
    const filename = `Registo-Viatura-${data.numero}.pdf`;

    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });

    // Template must include a Variable Attachment named "registo_pdf" (see emailjs-config.example.js).
    await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
      to_email: EMAILJS_CONFIG.toEmail,
      from_name: data.nome,
      reply_to: data.email,
      subject: `Registo de Viatura ${data.numero} — ${data.nome}`,
      message: buildSummary(data),
      numero: data.numero,
      pdf_filename: filename,
      registo_pdf: pdfBase64,
    });
  }

  setDefaultDateTime();

  if (!isEmailJsConfigured()) {
    setStatus(
      "EmailJS ainda não está configurado. Edite js/emailjs-config.js com as suas chaves (copie de emailjs-config.example.js).",
      "warn"
    );
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!isEmailJsConfigured()) {
      setStatus("Configure o EmailJS em js/emailjs-config.js antes de enviar.", "error");
      return;
    }

    const data = getFormData();
    submitBtn.disabled = true;
    setStatus("A gerar PDF e a enviar…", "info");

    try {
      const pdfBytes = await buildPdf(data);
      const filename = `Registo-Viatura-${data.numero}.pdf`;
      downloadPdf(pdfBytes, filename);
      await sendWithEmailJs(data, pdfBytes);
      setStatus("Registo enviado com sucesso para a Oficina ELIF. Também descarregámos uma cópia em PDF.", "success");
      form.reset();
      setDefaultDateTime();
    } catch (error) {
      console.error(error);
      setStatus(
        "Não foi possível enviar. Verifique a configuração EmailJS e se o modelo permite anexos PDF.",
        "error"
      );
    } finally {
      submitBtn.disabled = false;
    }
  });
})();
