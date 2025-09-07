export default function Events() {
  const events = [
    {
      title: "Coffee Tasting Workshop",
      date: "March 10, 2025",
      img: "/outlet1.png",
    },
    {
      title: "Acoustic Night",
      date: "April 2, 2025",
      img: "/outlet1.png",
    },
    {
      title: "Startup Meetup",
      date: "April 15, 2025",
      img: "/outlet1.png",
    },
  ];

  const partners = [
    { name: "Universitas Syiah Kuala", logo: "/partner1.png" },
    { name: "Bank Aceh", logo: "/partner2.png" },
    { name: "Community Hub", logo: "/partner3.png" },
  ];

  return (
    <div className="pt-24 pb-16 px-6 bg-gray-50">
      {/* Title */}
      <h1 className="text-3xl font-bold text-green-800 text-center mb-12">
        Events & Partnership
      </h1>

      {/* Events Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-green-700 mb-6">
          Upcoming & Past Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-green-800">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Section */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-6">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, i) => (
            <div key={i} className="w-32 h-20 flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
