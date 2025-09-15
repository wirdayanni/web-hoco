export default function Contact() {
  return (
    <section className="py-16 bg-white text-center" id="outlets">
      <h2 className="text-2xl font-bold text-green-800 mb-8">OUR OUTLETS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            name: "Hoco Coffee Lampineung",
            address: "Jl. Malikul Saleh No.7, Kota Banda Aceh",
            img: "/outlet1.png",
            wa: "http://wa.me/6282288219464", // WhatsApp Lampineung
            gofood: "https://gofood.link/a/MdJZjUY",
            grabfood: "https://r.grab.com/g/6-20250915_114342_a4b79e827fb247e98e9b58389b0fa258_MEXMPS-6-CZBGBFCYCP5VAN",
          },
          {
            name: "Hoco Coffee Lambhuk",
            address: "Jl. Seulanga, Lambhuk, Kota Banda Aceh",
            img: "/outlet1.png",
            wa: "https://wa.me/6281264065722", 
            gofood: "https://gofood.link/a/Mm6RDiW",
            grabfood: "https://r.grab.com/g/6-20250915_113837_a4b79e827fb247e98e9b58389b0fa258_MEXMPS-6-C4JKNPDCTFBUKA", // GrabFood Lambhuk
          },
          {
            name: "Hoco Coffee Lamteumen",
            address: "Jl. Cut Nyak Dhien, Lamteumen, Kota Banda Aceh",
            img: "/outlet1.png",
            wa: "https://wa.me/6282375001114", // WhatsApp Lamteumen
            gofood: "https://gofood.link/a/MmcDACy",
            grabfood: "https://r.grab.com/g/6-20250915_114046_a4b79e827fb247e98e9b58389b0fa258_MEXMPS-6-C6TGCBNEBATXLT",
          },
        ].map((outlet, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-md overflow-hidden text-left"
          >
            <img
              src={outlet.img}
              alt={outlet.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{outlet.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{outlet.address}</p>
              <div className="space-y-2">
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
    </section>
  );
}
