import React, { useMemo } from "react";

/**
 * TimePicker for HOCO Coffee
 * Props:
 *  - date: string "YYYY-MM-DD"
 *  - type: "meja" | "acara"
 *  - value: selected time string "HH:MM"
 *  - onChange: function(newTimeString)
 *
 * Behavior:
 *  - Generate times 07:00 ... 23:30 at 30-min interval
 *  - Disable options when:
 *      * no date selected
 *      * selected datetime < now + 3 hours (for type === 'meja')
 *      * selected datetime < now + 24 hours (for type === 'acara')
 *  - If no slots available, show message
 */
export default function TimePicker({ date, type, value, onChange }) {
  // helper: create Date from YYYY-MM-DD and set hours/minutes
  const buildDateTime = (ymd, hh, mm) => {
    if (!ymd) return null;
    const [y, mo, d] = ymd.split("-").map((v) => parseInt(v, 10));
    // create local Date safely
    const dt = new Date(y, mo - 1, d, hh, mm, 0, 0);
    return dt;
  };

  const times = useMemo(() => {
    const startMin = 7 * 60; // 07:00
    const endMin = 22 * 60 + 30; // 22:30
    const step = 30; // 30 menit
    const arr = [];
    for (let m = startMin; m <= endMin; m += step) {
      const h = Math.floor(m / 60);
      const mm = m % 60;
      arr.push(`${String(h).padStart(2, "0")}:${String(mm).padStart(2, "0")}`);
    }
    return arr;
  }, []);

  // now and min allowed based on type
  const now = new Date();
  const minAllowed = new Date(now.getTime() + (type === "acara" ? 24 : 3) * 60 * 60 * 1000);

  // check whether a given time string should be disabled
  const isDisabled = (timeStr) => {
    if (!date) return true; // no date selected => disable all
    const [hh, mm] = timeStr.split(":").map((v) => parseInt(v, 10));
    const selectedDT = buildDateTime(date, hh, mm);
    // if selected datetime less than minAllowed => disabled
    if (selectedDT < minAllowed) return true;
    return false;
  };

  // compute if there are any available slots for the chosen date/type
  const availableCount = times.reduce((acc, t) => (isDisabled(t) ? acc : acc + 1), 0);

  return (
    <div>
      <select
        className="w-full border rounded-lg p-2"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        disabled={!date || availableCount === 0}
      >
        <option value="">-- Pilih Waktu --</option>
        {times.map((t) => (
          <option key={t} value={t} disabled={isDisabled(t)}>
            {t}
          </option>
        ))}
      </select>

      {/* Informasi bila tidak ada slot tersedia */}
      {!date && (
        <p className="text-sm text-gray-500 mt-2">
          Pilih tanggal terlebih dahulu untuk melihat jam yang tersedia.
        </p>
      )}

      {date && availableCount === 0 && (
        <p className="text-sm text-red-600 mt-2">
          Tidak ada slot tersedia untuk tanggal ini sesuai aturan reservasi.
          Coba tanggal lain.
        </p>
      )}
    </div>
  );
}
