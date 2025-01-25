import React, { useState } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const handleDateClick = (day) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newDate);
  };

  const changeMonth = (increment) => {
    const newMonth = currentDate.getMonth() + increment;
    setCurrentDate(new Date(currentDate.getFullYear(), newMonth, 1));
  };

  const changeYear = (increment) => {
    const newYear = currentDate.getFullYear() + increment;
    setCurrentDate(new Date(newYear, currentDate.getMonth(), 1));
  };

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInCurrentMonth = daysInMonth(year, month);
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="text-gray-800"> </div>);
    }

    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const isToday =
        day === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();

      days.push(
        <button
          key={day}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
            selectedDate &&
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === month &&
            selectedDate.getFullYear() === year
              ? "bg-white text-gray-900"
              : isToday
              ? "bg-blue-500 text-white"
              : "text-gray-300 hover:bg-gray-700"
          }`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="flex gap-6">
        <div className="bg-gray-800 p-6 rounded-2xl w-72 h-96">
          <h2 className="text-xl font-bold mb-4">Event Details</h2>
          <p className="text-gray-300">
            {selectedDate
              ? `Event details for ${selectedDate.toDateString()}`
              : "Select a date to view details."}
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl w-96">
          <div className="flex justify-between items-center mb-4">
            <button
              className="text-gray-400"
              onClick={() => changeYear(-1)}
            >
              &lt;&lt;
            </button>
            <button
              className="text-gray-400"
              onClick={() => changeMonth(-1)}
            >
              &lt;
            </button>
            <h2 className="text-lg font-semibold">
              {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
            </h2>
            <button
              className="text-gray-400"
              onClick={() => changeMonth(1)}
            >
              &gt;
            </button>
            <button
              className="text-gray-400"
              onClick={() => changeYear(1)}
            >
              &gt;&gt;
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
              <div key={index} className="text-gray-400">
                {day}
              </div>
            ))}
            {renderCalendarDays()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
