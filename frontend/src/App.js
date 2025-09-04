import React from "react";

function App() {
  return (
    <div className="font-['Archivo'] text-gray-800">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="HOCO Coffee"
              className="h-10 w-auto mr-2"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              Reservation
            </button>
            <button className="text-green-800 text-2xl">&#9776;</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/herobanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-40 absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to</h1>
          <h2 className="text-5xl md:text-7xl font-extrabold mt-2">
            HOCO Coffee
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            your cozy place for coffee, events, and more
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-white text-center" id="about">
        <h2 className="text-2xl font-bold text-green-800 mb-4">ABOUT US</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          HOCO Coffee is your cozy haven, dedicated to providing an exceptional
          coffee experience across our three vibrant branches. We pride
          ourselves on hosting popular community events and offering our unique,
          branded canned drinks for enjoyment on the go. Discover a place where
          every visit feels like coming home.
        </p>

        <h3 className="text-xl font-semibold text-green-800 mb-6">
          OUR FACILITIES
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-6">
          {[
            "Indoor AC",
            "Indoor non-AC",
            "Outdoor",
            "Outdoor Roof",
            "Prayer Room",
            "Large Parking Area",
          ].map((facility, i) => (
            <div
              key={i}
              className="bg-white shadow p-4 rounded-md hover:shadow-lg transition"
            >
              {facility}
            </div>
          ))}
        </div>
        <button className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
          Read More
        </button>
      </section>

      {/* Popular Menu */}
      <section className="py-16 bg-gray-50 text-center" id="menu">
        <h2 className="text-2xl font-bold text-green-800 mb-8">
          OUR POPULAR MENU
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
          {[
            { name: "Sanger Durian", img: "/menu1.png" },
            { name: "Hoco Latte", img: "/menu2.png" },
            { name: "Chicken Creamy Pasta", img: "/menu3.png" },
            { name: "Nasi Ayam Sambal Matah", img: "/menu4.png" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-md overflow-hidden hover:shadow-lg transition"
            >
              <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
              <p className="py-2 font-medium">{item.name}</p>
            </div>
          ))}
        </div>
        <button className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
          See Menu
        </button>
      </section>

      {/* Outlets */}
      <section className="py-16 bg-white text-center" id="outlets">
        <h2 className="text-2xl font-bold text-green-800 mb-8">OUR OUTLETS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Hoco Coffee Lambhuk",
              address: "Jl. Seulanga, Lambhuk, Kota Banda Aceh",
              img: "/outlet1.png",
            },
            {
              name: "Hoco Coffee Lamteumen",
              address: "Jl. Cut Nyak Dhien, Lamteumen, Kota Banda Aceh",
              img: "/outlet1.png",
            },
            {
              name: "Hoco Coffee Lampineung",
              address: "Jl. Malikul Saleh No.7, Kota Banda Aceh",
              img: "/outlet3.png",
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
                  <button className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700 transition">
                    WhatsApp
                  </button>
                  <button className="w-full border border-green-800 text-green-800 py-2 rounded-md hover:bg-green-50 transition">
                    Order via GoFood
                  </button>
                  <button className="w-full border border-green-800 text-green-800 py-2 rounded-md hover:bg-green-50 transition">
                    Order via GrabFood
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white text-center py-8">
        <img
          src="/logo2.png"
          alt="HOCO Coffee"
          className="h-12 mx-auto mb-4"
        />
        <p className="mb-2">
          LAMBHUK | LAMTEUMEN | LAMPINEUNG
        </p>
        <p className="mb-2">EVERYDAY 7:00 AM - 23:10 PM</p>
        <p>WE SERVE BREAKFAST | LUNCH | DINNER</p>
      </footer>
    </div>
  );
}

export default App;