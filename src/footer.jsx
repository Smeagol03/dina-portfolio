import React from "react";

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

const IconLocation = () => (
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
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
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
    className="h-6 w-6"
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
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white font-utama py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Telepon */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300 flex items-center gap-3">
              <IconPhone /> Telepon
            </h3>
            <p className="mt-4 text-slate-300">087 712 510 526</p>
          </div>

          {/* Alamat */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300 flex items-center gap-3">
              <IconLocation /> Alamat
            </h3>
            <p className="mt-4 text-slate-300">
              Jl. Gang Cempaka Dusun Tnh. Lumpur Desa Rumbuk, Selong Kab. Lombok
              Timur 83611
            </p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300 flex items-center gap-3">
              <IconEmail /> Email
            </h3>
            <a
              href="mailto:mulianadina125@gmail.com"
              className="mt-4 block text-slate-300 hover:text-teal-200 break-all transition-colors duration-300"
            >
              mulianadina125@gmail.com
            </a>
          </div>

          {/* Media Sosial */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300">
              Media Sosial
            </h3>
            <div className="mt-4 flex space-x-5">
              <a
                href="https://www.instagram.com/dy.naa_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-teal-200 transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                <IconInstagram />
              </a>
              <a
                href="https://wa.me/6287712510526"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-teal-200 transition-colors duration-300"
              >
                <span className="sr-only">WhatsApp</span>
                <IconWhatsApp />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-400">
          <p className="text-sm">
            “Karya kecilku, langkah awal mimpi besar.” – Dina Muliana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
