import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events");
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Pisahkan upcoming & past
  const now = new Date();
  const upcomingEvents = [...events]
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const pastEvents = [...events]
    .filter((e) => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="py-28 px-8 space-y-10">
      <h1 className="text-2xl font-bold text-green-800 text-center">Our Events</h1>

      {/* Event Akan Datang */}
      <section>
        <h2 className="text-xl font-bold text-green-700 mb-4">
          Upcoming Events
        </h2>
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
              >
                {event.images[0] && (
                  <div className="w-full max-h-72 overflow-hidden">
                    <img
                      src={`http://localhost:5000${event.images[0].url}`}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4 space-y-1">
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <p className="text-sm text-gray-600">
                    {formatDate(event.date)}
                  </p>
                  <p className="text-sm text-gray-800 line-clamp-2">
                    {event.shortDescription}
                  </p>
                  <p className="text-sm font-medium">
                    {event.customLocation || event.location?.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Belum ada event yang akan datang.</p>
        )}
      </section>

      {/* Event Sudah Berlalu */}
      <section>
        <h2 className="text-xl font-bold text-green-800 mb-4">
          Past Events
        </h2>
        {pastEvents.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pastEvents.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="border rounded-lg overflow-hidden shadow bg-gray-50"
              >
                {event.images[0] && (
                  <div className="w-full aspect-[3/4] overflow-hidden">
                    <img
                      src={`http://localhost:5000${event.images[0].url}`}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                )}
                <div className="p-4 space-y-1">
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <p className="text-sm text-gray-600">
                    {formatDate(event.date)}
                  </p>
                  <p className="text-sm text-gray-800 line-clamp-2">
                    {event.shortDescription}
                  </p>
                  <p className="text-sm font-medium">
                    {event.customLocation || event.location?.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Belum ada event yang sudah lewat.</p>
        )}
      </section>
    </div>
  );
}
