import { Link } from "react-router-dom";

export default function MenuPreview(){
  return (
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
        <Link to="/menu">
      <button className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
        See Menu
      </button>
    </Link>
      </section>
  )}