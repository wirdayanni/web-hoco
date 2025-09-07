export default function ContactPreview() {
  return (
    <section className="py-16 bg-white text-center" id="outlets">
      <h2 className="text-2xl font-bold text-green-800 mb-8">OUR OUTLETS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            name: "Hoco Coffee Lambhuk",
            address: "Jl. Seulanga, Lambhuk, Kota Banda Aceh",
            img: "/outlet1.png",
            wa: "https://wa.me/6281264065722", // WhatsApp Lambhuk
            gofood: "https://gofood.link/lambhuk", // GoFood Lambhuk
            grabfood: "https://grab.link/lambhuk", // GrabFood Lambhuk
          },
          {
            name: "Hoco Coffee Lamteumen",
            address: "Jl. Cut Nyak Dhien, Lamteumen, Kota Banda Aceh",
            img: "/outlet1.png",
            wa: "https://wa.me/6282375001114", // WhatsApp Lamteumen
            gofood: "https://gofood.link/lamteumen",
            grabfood: "https://grab.link/lamteumen",
          },
          {
            name: "Hoco Coffee Lampineung",
            address: "Jl. Malikul Saleh No.7, Kota Banda Aceh",
            img: "/outlet1.png",
            wa: "http://wa.me/6282288219464", // WhatsApp Lampineung
            gofood: "https://gofood.link/lampineung",
            grabfood: "https://grab.link/lampineung",
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
