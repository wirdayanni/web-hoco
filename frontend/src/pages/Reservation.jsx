import TimePicker from "../components/reservation/TimePicker";
import { useState } from "react";

export default function Reservation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    branch: "",
    type: "",
    room: "",
    date: "",
    time: "",
    people: "",
    eventName: "",
    notes: "",
    name: "",
    phone: "",
  });

  const updateForm = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // pilihan ruangan sesuai cabang & jenis
  const roomOptions = {
    Lampineung: {
      meja: ["VIP", "Indoor non AC"],
    },
    Lambhuk: {
      meja: [
        "Indoor AC",
        "VIP AC room",
        "Outdoor H1",
        "Outdoor non atap",
        "Outdoor LP",
        "Area TS",
        "Area SA",
      ],
      acara: [
        "Indoor AC",
        "VIP AC room",
        "Outdoor H1",
        "Outdoor non atap",
        "Outdoor LP",
      ],
    },
    Lamteumen: {
      meja: ["Indoor non AC", "VIP AC room", "Teras Atas", "Teras Bawah"],
      acara: ["Indoor non AC", "VIP AC room"],
    },
  };

  // validasi step 1
  const canProceedStep1 = formData.branch && formData.type && formData.room;

  // validasi min date
  const now = new Date();
  let minDateTime = new Date(now);
  if (formData.type === "meja") {
    minDateTime.setHours(minDateTime.getHours() + 3);
  } else if (formData.type === "acara") {
    minDateTime.setHours(minDateTime.getHours() + 24);
  }

  const handleDateChange = (e) => {
    const selected = new Date(e.target.value + "T00:00");
    if (selected < now) {
      alert("Tanggal tidak valid!");
      return;
    }
    updateForm("date", e.target.value);
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, ""); // hanya angka
    if (val.length <= 13) {
      updateForm("phone", val);
    }
  };

  const isValidPhone =
    formData.phone.length >= 10 && formData.phone.length <= 13;

  // komponen review yang rapi
  const ReviewList = () => (
    <ul className="space-y-2 text-left">
      <li className="flex">
        <span className="w-32 font-medium">Tempat</span> :{" "}
        <span className="ml-2">{formData.branch}</span>
      </li>
      <li className="flex">
        <span className="w-32 font-medium">Jenis Reservasi</span> :{" "}
        <span className="ml-2">
          {formData.type === "meja" ? "Reservasi Meja" : "Reservasi Acara"}
        </span>
      </li>
      <li className="flex">
        <span className="w-32 font-medium">Ruangan</span> :{" "}
        <span className="ml-2">{formData.room}</span>
      </li>
      <li className="flex">
        <span className="w-32 font-medium">Tanggal</span> :{" "}
        <span className="ml-2">{formData.date}</span>
      </li>
      <li className="flex">
        <span className="w-32 font-medium">Waktu</span> :{" "}
        <span className="ml-2">{formData.time}</span>
      </li>
      {formData.type === "acara" && (
        <>
          <li className="flex">
            <span className="w-32 font-medium">Nama Acara</span> :{" "}
            <span className="ml-2">{formData.eventName}</span>
          </li>
          <li className="flex">
            <span className="w-32 font-medium">Jumlah Tamu</span> :{" "}
            <span className="ml-2">{formData.people}</span>
          </li>
        </>
      )}
      {formData.type === "meja" && (
        <li className="flex">
          <span className="w-32 font-medium">Jumlah Orang</span> :{" "}
          <span className="ml-2">{formData.people}</span>
        </li>
      )}
      <li className="flex">
        <span className="w-32 font-medium">Catatan</span> :{" "}
        <span className="ml-2">{formData.notes}</span>
      </li>
      <li className="flex">
        <span className="w-32 font-medium">Nama Pemesan</span> :{" "}
        <span className="ml-2">{formData.name}</span>
      </li>
      <li className="flex">
        <span className="w-32 font-medium">No. WhatsApp</span> :{" "}
        <span className="ml-2">{formData.phone}</span>
      </li>
    </ul>
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Reservasi HOCO Coffee
        </h1>

        {/* Step Indicator */}
        <div className="flex justify-between mb-6">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                step === s
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4">
            {/* Cabang */}
            <div>
              <label className="block mb-1 font-medium">Pilih Cabang</label>
              <select
                value={formData.branch}
                onChange={(e) => updateForm("branch", e.target.value)}
                className="w-full border rounded-lg p-2"
              >
                <option value="">-- Pilih Cabang --</option>
                <option value="Lampineung">HOCO Lampineung</option>
                <option value="Lambhuk">HOCO Lambhuk</option>
                <option value="Lamteumen">HOCO Lamteumen</option>
              </select>
            </div>

            {/* Jenis Reservasi */}
            {formData.branch && (
              <div>
                <label className="block mb-1 font-medium">
                  Jenis Reservasi
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => updateForm("type", e.target.value)}
                  className="w-full border rounded-lg p-2"
                >
                  <option value="">-- Pilih Jenis --</option>
                  <option value="meja">Reservasi Meja</option>
                  {formData.branch !== "Lampineung" && (
                    <option value="acara">Reservasi Acara</option>
                  )}
                </select>
              </div>
            )}

            {/* Ruangan */}
            {formData.branch && formData.type && (
              <div>
                <label className="block mb-1 font-medium">Pilih Ruangan</label>
                <select
                  value={formData.room}
                  onChange={(e) => updateForm("room", e.target.value)}
                  className="w-full border rounded-lg p-2"
                >
                  <option value="">-- Pilih Ruangan --</option>
                  {roomOptions[formData.branch][formData.type]?.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              disabled={!canProceedStep1}
              onClick={() => setStep(2)}
              className={`w-full py-2 rounded-lg text-white ${
                canProceedStep1
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Lanjut
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4">
            {/* Tanggal */}
            <div>
              <label className="block mb-1 font-medium">Tanggal</label>
              <input
                type="date"
                value={formData.date}
                onChange={handleDateChange}
                className="w-full border rounded-lg p-2"
                min={now.toISOString().split("T")[0]}
              />
            </div>

            {/* Waktu */}
            {formData.date && (
              <div>
                <label className="block mb-1 font-medium">Waktu</label>
                <TimePicker
                  date={formData.date}
                  type={formData.type}
                  value={formData.time}
                  onChange={(t) => updateForm("time", t)}
                />
              </div>
            )}

            {/* Jumlah orang/tamu */}
            {formData.type === "meja" && (
  <div>
    <label className="block mb-1 font-medium">Jumlah Orang</label>
    <input
      type="number"
      value={formData.people}
      min="1"
      max="100"
      onChange={(e) => {
        const val = parseInt(e.target.value, 10);
        setFormData((prev) => ({
          ...prev,
          people:
            isNaN(val) || val < 1 ? 1 : val > 100 ? 100 : val,
        }));
      }}
      className="w-full border rounded p-2"
    />
  </div>
)}

            {formData.type === "acara" && (
              <>
                <div>
                  <label className="block mb-1 font-medium">Nama Acara</label>
                  <input
                    type="text"
                    value={formData.eventName}
                    onChange={(e) => updateForm("eventName", e.target.value)}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Jumlah Tamu</label>
                  <input
                    type="number"
                    value={formData.people}
                    onChange={(e) => updateForm("people", e.target.value)}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              </>
            )}

            {/* Catatan */}
            <div>
              <label className="block mb-1 font-medium">Catatan</label>
              <textarea
                value={formData.notes}
                onChange={(e) => updateForm("notes", e.target.value)}
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Data Pemesan */}
            <div>
              <label className="block mb-1 font-medium">Nama Pemesan</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateForm("name", e.target.value)}
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Nomor WhatsApp</label>
              <input
                type="text"
                value={formData.phone}
                onChange={handlePhoneChange}
                className="w-full border rounded-lg p-2"
                placeholder="Contoh: 081234567890"
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Kembali
              </button>
              <button
                disabled={
                  !formData.date || !formData.time || !formData.name || !isValidPhone
                }
                onClick={() => setStep(3)}
                className={`px-4 py-2 rounded-lg text-white ${
                  formData.date && formData.time && formData.name && isValidPhone
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Lanjut
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Review Reservasi</h2>
            <ReviewList />
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Kembali
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Konfirmasi Reservasi
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold text-green-600">
              Reservasi Berhasil!
            </h2>
            <p>Terima kasih. Reservasi Anda sudah tercatat.</p>
            <div className="bg-gray-50 p-4 rounded-lg text-left">
              <h3 className="font-semibold mb-2">Detail Reservasi:</h3>
              <ReviewList />
            </div>
            <button
              onClick={() => {
                setStep(1);
                setFormData({
                  branch: "",
                  type: "",
                  room: "",
                  date: "",
                  time: "",
                  people: "",
                  eventName: "",
                  notes: "",
                  name: "",
                  phone: "",
                });
              }}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
            >
              Buat Reservasi Baru
            </button>
          </div>
        )}
      </div>
    </div>
  );
}