import { Link } from "react-router-dom"

export default function AboutPreview(){
  return (
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
        <Link to="/about">
        <button className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
          Read More
        </button>
        </Link>
      </section>
)}