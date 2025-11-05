import React, { useState } from "react";

const IconPhone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const IconEmail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const IconInstagram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <rect
      width="20"
      height="20"
      x="2"
      y="2"
      rx="5"
      ry="5"
      strokeWidth="2"
    ></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
  </svg>
);

const IconWhatsApp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const IconCopy = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <rect
      x="9"
      y="9"
      width="13"
      height="13"
      rx="2"
      ry="2"
      strokeWidth="2"
    ></rect>
    <rect
      x="2"
      y="2"
      width="13"
      height="13"
      rx="2"
      ry="2"
      strokeWidth="2"
    ></rect>
  </svg>
);

const IconCheck = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <circle cx="12" cy="12" r="9" strokeWidth="2" />
    <path
      d="M8 12l3 3 5-5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CopyButton = ({ onClick, copied }) => (
  <button
    type="button"
    onClick={onClick}
    className="ml-auto inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1.5 text-xs text-slate-200 hover:border-teal-400 hover:text-teal-200 hover:bg-slate-800 transition-colors duration-300"
    title={copied ? "Disalin" : "Salin"}
  >
    {copied ? <IconCheck /> : <IconCopy />}
    <span>{copied ? "Disalin!" : "Salin"}</span>
  </button>
);

const Contact = () => {
  const [copied, setCopied] = useState({ phone: false, email: false });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false });

  const handleCopy = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 1500);
    } catch (e) {
      // silently fail
    }
  };

  const validate = () => {
    const errs = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name) errs.name = "Nama wajib diisi";
    else if (name.length < 2) errs.name = "Nama terlalu pendek";
    if (!email) errs.email = "Email wajib diisi";
    else if (!/^([^\s@]+)@([^\s@]+)\.[^\s@]+$/.test(email))
      errs.email = "Format email tidak valid";
    if (!message) errs.message = "Pesan wajib diisi";
    else if (message.length < 10)
      errs.message = "Pesan terlalu pendek (min 10 karakter)";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    setStatus({ loading: true, success: false });

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    const text = encodeURIComponent(
      `Halo, saya ${name} (${email}).\nPesan:\n${message}\n— dikirim dari website portofolio`
    );
    const waUrl = `https://wa.me/6287712510526?text=${text}`;

    // Buka WhatsApp (web/app) di tab baru
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Berikan feedback sukses singkat dan reset form
    setTimeout(() => {
      setStatus({ loading: false, success: true });
      setForm({ name: "", email: "", message: "" });
    }, 500);
  };

  return (
    <section className="bg-slate-950 text-white font-utama py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <header>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Kontak
          </h2>
          <p className="mt-2 text-slate-400">
            Hubungi saya melalui informasi berikut atau kirim pesan langsung.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom Kiri: Info Kontak + Media Sosial */}
          <div className="space-y-6">
            {/* Informasi Kontak */}
            <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300">
                Informasi Kontak
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-teal-900/30 text-teal-300">
                    <IconPhone />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs text-slate-400">Telepon</p>
                    <p className="font-medium">087 712 510 526</p>
                  </div>
                  <CopyButton
                    onClick={() => handleCopy("phone", "087 712 510 526")}
                    copied={copied.phone}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-teal-900/30 text-teal-300">
                    <IconEmail />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs text-slate-400">Email</p>
                    <a
                      href="mailto:mulianadina125@gmail.com"
                      className="font-medium text-slate-200 hover:text-teal-200 break-all transition-colors"
                    >
                      mulianadina125@gmail.com
                    </a>
                  </div>
                  <CopyButton
                    onClick={() =>
                      handleCopy("email", "mulianadina125@gmail.com")
                    }
                    copied={copied.email}
                  />
                </div>
              </div>
            </div>

            {/* Media Sosial */}
            <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300">
                Media Sosial
              </h3>
              <div className="mt-4 space-y-3">
                <a
                  href="https://www.instagram.com/dy.naa_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-slate-800 px-3 py-3 text-slate-300 hover:text-teal-200 hover:border-teal-400 hover:bg-slate-800/50 transition-colors"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-teal-900/30 text-teal-300">
                    <IconInstagram />
                  </span>
                  <span className="font-medium">@dy.naa_</span>
                  <span className="ml-auto text-xs text-slate-500 group-hover:text-teal-300">
                    Buka profil
                  </span>
                </a>

                <a
                  href="https://wa.me/6287712510526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-slate-800 px-3 py-3 text-slate-300 hover:text-teal-200 hover:border-teal-400 hover:bg-slate-800/50 transition-colors"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-teal-900/30 text-teal-300">
                    <IconWhatsApp />
                  </span>
                  <span className="font-medium">087 712 510 526</span>
                  <span className="ml-auto text-xs text-slate-500 group-hover:text-teal-300">
                    Chat WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Form Kontak */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300">
                Form Kontak Langsung
              </h3>
              <form
                onSubmit={handleSubmit}
                className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {/* Nama */}
                <div>
                  <label htmlFor="name" className="text-sm text-slate-300">
                    Nama
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className={`mt-2 w-full rounded-lg border bg-slate-900/70 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 transition ${
                      errors.name
                        ? "border-red-500 focus:ring-red-400"
                        : "border-slate-800 focus:ring-teal-400"
                    }`}
                    placeholder="Nama lengkap"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-sm text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className={`mt-2 w-full rounded-lg border bg-slate-900/70 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 transition ${
                      errors.email
                        ? "border-red-500 focus:ring-red-400"
                        : "border-slate-800 focus:ring-teal-400"
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Pesan */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm text-slate-300">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className={`mt-2 w-full rounded-lg border bg-slate-900/70 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 transition ${
                      errors.message
                        ? "border-red-500 focus:ring-red-400"
                        : "border-slate-800 focus:ring-teal-400"
                    }`}
                    placeholder="Tulis pesan anda di sini"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Tombol Submit */}
                <div className="sm:col-span-2 flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500 active:bg-teal-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status.loading ? (
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent"></span>
                    ) : (
                      <IconWhatsApp />
                    )}
                    <span>
                      {status.loading ? "Mengalihkan..." : "Kirim via WhatsApp"}
                    </span>
                  </button>

                  {status.success && (
                    <div
                      className="flex items-center gap-2 rounded-md border border-teal-500 bg-teal-900/30 px-3 py-2 text-sm text-teal-200"
                      role="alert"
                      aria-live="polite"
                    >
                      <IconCheck />
                      <span>Terima kasih! Pesan berhasil dikirim.</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
