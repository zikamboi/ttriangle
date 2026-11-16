import { c as defineEventHandler, u as useRuntimeConfig, f as readMultipartFormData, e as createError } from '../../_/nitro.mjs';
import nodemailer from 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const OK_EXT = /\.(pdf|docx?|xlsx?|csv|png|jpe?g|zip)$/i;
const enquiry_post = defineEventHandler(async (event) => {
  var _a;
  const cfg = useRuntimeConfig();
  const parts = await readMultipartFormData(event) || [];
  const f = {};
  const files = [];
  for (const p of parts) {
    if (p.filename) {
      if (p.data.length && p.data.length <= 5 * 1024 * 1024 && OK_EXT.test(p.filename) && files.length < 3)
        files.push({ filename: p.filename, content: p.data, contentType: p.type });
    } else if (p.name) f[p.name] = p.data.toString("utf8").slice(0, 4e3);
  }
  if (f.website) return { ok: true };
  if (!((_a = f.name) == null ? void 0 : _a.trim()) || !/^\S+@\S+\.\S+$/.test(f.email || "")) {
    throw createError({ statusCode: 400, statusMessage: "Name and a valid email are required" });
  }
  let attr = {};
  try {
    attr = JSON.parse(f.attribution || "{}");
  } catch {
  }
  const rows = [
    ["Name", f.name],
    ["Company", f.company],
    ["Email", f.email],
    ["Phone / WhatsApp", f.phone],
    ["Country", f.country],
    ["Site location", f.location],
    ["Service", f.service],
    ["Technology", f.technology],
    ["Enquiry type", f.type],
    ["Required date", f.date],
    ["Details", f.details],
    ["Source", Object.entries(attr).map(([k, v]) => `${k}=${v}`).join(" | ")]
  ];
  const clean = rows.filter((r) => r[1]);
  const subject = `New enquiry: ${f.service || "General"} - ${f.name}`;
  if (!cfg.smtpHost || !cfg.mailTo) {
    throw createError({ statusCode: 503, statusMessage: "Email is not configured" });
  }
  const transport = nodemailer.createTransport({
    host: cfg.smtpHost,
    port: Number(cfg.smtpPort),
    secure: Number(cfg.smtpPort) === 465,
    auth: { user: cfg.smtpUser, pass: cfg.smtpPass }
  });
  await transport.sendMail({
    from: cfg.mailFrom || cfg.smtpUser,
    to: cfg.mailTo,
    replyTo: f.email,
    subject,
    attachments: files,
    text: clean.map(([k, v]) => `${k}: ${v}`).join("\n"),
    html: `<table cellpadding="8" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${clean.map(([k, v]) => `<tr><td style="background:#f2f6f4;font-weight:bold;vertical-align:top">${esc(k)}</td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`).join("")}</table>`
  });
  return { ok: true };
});

export { enquiry_post as default };
//# sourceMappingURL=enquiry.post.mjs.map
