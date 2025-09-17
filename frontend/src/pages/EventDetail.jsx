import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/events/${id}`);
        setEvent(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) return <p className="p-6">Loading...</p>;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="p-10 space-y-4 mt-20">
      <Link to="/events" className="text-green-700 underline">
        ← Kembali ke daftar event
      </Link>

      <h1 className="text-2xl font-bold text-green-800">{event.title}</h1>
      <p className="text-sm text-gray-600">
        {formatDate(event.date)} •{" "}
        {event.customLocation || event.location?.name}
      </p>
      <p className="text-gray-800 whitespace-pre-line">{event.description}</p>

      {event.images?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {event.images.map((img, idx) => (
            <div
              key={idx}
              className="w-full aspect-[3/4] overflow-hidden rounded"
            >
              <img
                src={`http://localhost:5000${img.url}`}
                alt={`${event.title}-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
