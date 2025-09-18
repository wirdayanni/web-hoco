import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Contact() {
  const outlets = [
    {
      name: "Hoco Coffee Lampineung",
      address: "Jl. Malikul Saleh No.7, Kota Banda Aceh",
      mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.027013743362!2d95.34451469999999!3d5.5630141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304037bf0ea09d27%3A0xe531ddafd0545eb6!2sHoco%20Coffee%20Lampineung!5e0!3m2!1sid!2sid!4v1757990526281!5m2!1sid!2sid",
      wa: "http://wa.me/6282288219464",
      gofood: "https://gofood.link/a/MdJZjUY",
      grabfood:
        "https://r.grab.com/g/6-20250915_114342_a4b79e827fb247e98e9b58389b0fa258_MEXMPS-6-CZBGBFCYCP5VAN",
    },
    {
      name: "Hoco Coffee Lambhuk",
      address: "Jl. Seulanga, Lambhuk, Kota Banda Aceh",
      mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0429831452857!2d95.33524767396929!3d5.560647933605034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304037c7f88f8d1b%3A0xc33428ca5157b20!2sHoco%20Coffee%20Lambhuk!5e0!3m2!1sid!2sid!4v1757990774509!5m2!1sid!2sid",
      wa: "https://wa.me/6281264065722",
      gofood: "https://gofood.link/a/Mm6RDiW",
      grabfood:
        "https://r.grab.com/g/6-20250915_113837_a4b79e827fb247e98e9b58389b0fa258_MEXMPS-6-C4JKNPDCTFBUKA",
    },
    {
      name: "Hoco Coffee Lamteumen",
      address: "Jl. Cut Nyak Dhien, Lamteumen, Kota Banda Aceh",
      mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.22358398512!2d95.30079597396912!3d5.533818333874448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30403bb209371edb%3A0x34f82871672f3288!2sHoco%20Coffee%20Lamteumen!5e0!3m2!1sid!2sid!4v1757990820833!5m2!1sid!2sid",
      wa: "https://wa.me/6282375001114",
      gofood: "https://gofood.link/a/MmcDACy",
      grabfood:
        "https://r.grab.com/g/6-20250915_114046_a4b79e827fb247e98e9b58389b0fa258_MEXMPS-6-C6TGCBNEBATXLT",
    },
  ];

  // Gunakan React Icons
  const socials = [
    { name: "Instagram", url: "https://instagram.com/hoco.coffee", icon: <FaInstagram /> },
    { name: "TikTok", url: "https://tiktok.com/@hococoffee", icon: <FaTiktok /> },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100068043493400&mibextid=rS40aB7S9Ucbxw6v", icon: <FaFacebook /> },
  ];

  return (
    <section className="py-32 bg-white text-center" id="contact">
      <h2 className="text-2xl font-bold text-green-800 mb-8">OUR OUTLETS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {outlets.map((outlet, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-md overflow-hidden flex flex-col"
          >
            {/* Map embed preview */}
            <div className="w-full h-48">
              {outlet.mapEmbedSrc ? (
                <iframe
                  src={outlet.mapEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title={outlet.name}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Map preview not available</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-bold text-lg mb-2">{outlet.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{outlet.address}</p>
              <div className="space-y-2 mt-auto">
                <a
                  href={outlet.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-800 text-white py-2 rounded-md text-center hover:bg-green-700 transition"
                >
                  WhatsApp
                </a>
                <a
                  href={outlet.gofood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-green-800 text-green-800 py-2 rounded-md text-center hover:bg-green-50 transition"
                >
                  Order via GoFood
                </a>
                <a
                  href={outlet.grabfood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-green-800 text-green-800 py-2 rounded-md text-center hover:bg-green-50 transition"
                >
                  Order via GrabFood
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sosial Media */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Connect With Us</h2>
        <div className="flex justify-center space-x-8">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 hover:text-green-600 text-4xl transition transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
