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
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-green-800">Event HOCO Coffee</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.id}`}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            {event.images[0] && (
              <div className="w-full aspect-[3/4] overflow-hidden">
                <img
                  src={`http://localhost:5000${event.images[0].url}`}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4 space-y-1">
              <h2 className="text-lg font-bold">{event.title}</h2>
              <p className="text-sm text-gray-600">{formatDate(event.date)}</p>
              <p className="text-sm text-gray-800">{event.shortDescription}</p>
              <p className="text-sm font-medium">{event.location?.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}