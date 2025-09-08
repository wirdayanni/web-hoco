import { useState } from "react";
import EventList from "./EventList";
import EventForm from "./EventForm";

export default function EventManagement() {
  const [showForm, setShowForm] = useState(false);
  const [editEvent, setEditEvent] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleAdd = () => {
    setEditEvent(null);
    setShowForm(true);
  };

  const handleEdit = (event) => {
    setEditEvent(event);
    setShowForm(true);
  };

  const handleSaved = () => {
    setShowForm(false);
    setEditEvent(null);
    setRefresh(!refresh); // trigger refresh list
  };

  return (
    <div className="p-6">
      {showForm ? (
        <EventForm
          eventData={editEvent}
          onCancel={() => setShowForm(false)}
          onSaved={handleSaved}
        />
      ) : (
        <EventList key={refresh} onAdd={handleAdd} onEdit={handleEdit} />
      )}
    </div>
  );
}