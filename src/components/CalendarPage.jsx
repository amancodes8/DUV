import React, { useState } from 'react';
import { format } from 'date-fns';
import { MdCelebration } from 'react-icons/md';

const CalendarPage = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(9);
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedEvent, setSelectedEvent] = useState(null);

    
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const events = [
        { date: new Date(currentYear, 9, 1), name: "Mid-Term Assessments", description: "Mid-term assessments for all grades." },
        { date: new Date(currentYear, 9, 2), name: "Gandhi Jayanti", description: "Celebration of Mahatma Gandhi's birthday." },
        { date: new Date(currentYear, 9, 5), name: "World Teacher's Day", description: "A day to honor teachers for their contributions." },
        { date: new Date(currentYear, 9, 10), name: "World Mental Health Day", description: "Promoting mental health awareness." },
        { date: new Date(currentYear, 9, 11), name: "Ashthami-Navami", description: "Celebration of Ashthami and Navami." },
        { date: new Date(currentYear, 9, 12), name: "Dussehra", description: "Festival celebrating the victory of good over evil." },
        { date: new Date(currentYear, 9, 16), name: "World Food Day", description: "A day to promote food security." },
        { date: new Date(currentYear, 9, 22), name: "Parent-Teacher Meeting", description: "Meet with parents to discuss student progress." },
        { date: new Date(currentYear, 9, 25), name: "Science Fair", description: "Annual science fair showcasing student projects." },
        { date: new Date(currentYear, 9, 28), name: "Art Competition", description: "Art competition for all students." },
        { date: new Date(currentYear, 9, 29), name: "Math Quiz Competition", description: "Math quiz competition for students." },
        { date: new Date(currentYear, 9, 30), name: "Sports Day", description: "Annual sports day with various competitions." },
        { date: new Date(currentYear, 9, 31), name: "Diwali", description: "Festival of lights celebrated with great enthusiasm." },
       ];

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const handleDateClick = (day) => {
        const selectedDate = new Date(currentYear, currentMonth, day);
        const event = events.find(
            (e) =>
                e.date.getDate() === selectedDate.getDate() &&
                e.date.getMonth() === selectedDate.getMonth() &&
                e.date.getFullYear() === selectedDate.getFullYear()
        );
        setSelectedEvent(event || { name: 'No events', date: selectedDate, description: 'No events available for this date.' });
    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    return (
        <div className="min-h-screen p-8">
            <h1 className="text-center text-4xl mb-8 font-bold" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                School Events Calendar
            </h1>

            <div className="flex justify-between items-center max-w-4xl mx-auto mb-4">
                <button
                    onClick={handlePrevMonth}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Previous
                </button>
                <h2 className="text-2xl font-bold" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                    {months[currentMonth]} {currentYear}
                </h2>
                <button
                    onClick={handleNextMonth}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Next
                </button>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border-4 border-yellow-500">
                <div className="grid grid-cols-7 text-center mb-4 font-bold text-xl" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="py-2">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-4 text-center">
                    {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
                        <div key={idx} className="p-4"></div>
                    ))}

                    {Array.from({ length: daysInMonth }, (_, day) => (
                        <div
                            key={day}
                            className={`flex items-center justify-center p-4 rounded-lg h-24 border-2 cursor-pointer ${events.find(
                                (event) => event.date.getDate() === day + 1 && event.date.getMonth() === currentMonth
                            )
                                ? 'bg-yellow-200 border-yellow-600'
                                : 'bg-white border-gray-300'
                                }`}
                            onClick={() => handleDateClick(day + 1)}
                        >
                            <div className="relative w-full h-full flex flex-col items-center justify-center" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                                <span className="text-xl mb-1">{day + 1}</span>

                                {/* Display icons for events */}
                                {events.some(
                                    (event) => event.date.getDate() === day + 1 && event.date.getMonth() === currentMonth
                                ) && <MdCelebration className="text-yellow-700 text-2xl absolute bottom-2" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

                    {/* Displaying Events */}
            {selectedEvent && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg text-center space-y-4">
                        <h3 className="text-2xl font-bold" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            Event on {format(selectedEvent.date, 'do MMMM yyyy')}
                        </h3>
                        <p className="text-lg">{selectedEvent.name}</p>
                        <p className="text-sm">{selectedEvent.description}</p>
                        <button
                            onClick={() => setSelectedEvent(null)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarPage;
