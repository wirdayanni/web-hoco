export default function Reservasi() {
  return (
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-2xl bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Reservation
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Book your table or private room at HOCO Coffee.
          </p>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-left font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-800 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-left font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-800 focus:outline-none"
              />
            </div>

            {/* Branch */}
            <div>
              <label className="block text-left font-medium text-gray-700 mb-2">
                Select Branch
              </label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-800 focus:outline-none">
                <option>Lambhuk</option>
                <option>Lamteumen</option>
                <option>Lampineung</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-left font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-800 focus:outline-none"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-left font-medium text-gray-700 mb-2">
                Time
              </label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-800 focus:outline-none"
              />
            </div>

            {/* Number of People */}
            <div>
              <label className="block text-left font-medium text-gray-700 mb-2">
                Number of People
              </label>
              <input
                type="number"
                min="1"
                placeholder="e.g. 4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-800 focus:outline-none"
              />
            </div>

            {/* Special Request */}
            <div>
              <label className="block text-left font-medium text-gray-700 mb-2">
                Special Request
              </label>
              <textarea
                placeholder="Write your request here..."
                rows="3"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-800 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-3 rounded-md hover:bg-green-700 transition"
            >
              Submit Reservation
            </button>
          </form>
        </div>
      </section>
  );
}
