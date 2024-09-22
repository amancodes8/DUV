import React from 'react';

const StudentERP = () => {
    // Sample student data
    const students = [
        { id: 1, name: "John Doe", grade: "10", section: "A" },
        { id: 2, name: "Jane Smith", grade: "11", section: "B" },
        { id: 3, name: "Emily Johnson", grade: "12", section: "C" },
    ];

    return (
        <div className="bg-slate-800 p-5 mt-20">
            <h1 className="text-4xl text-center text-white mb-8">Student ERP</h1>
            <div className="max-w-6xl mx-auto">
                <table className="min-w-full bg-slate-900 text-white rounded-lg">
                    <thead>
                        <tr>
                            <th className="p-4">ID</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Grade</th>
                            <th className="p-4">Section</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="border-b border-gray-700">
                                <td className="p-4">{student.id}</td>
                                <td className="p-4">{student.name}</td>
                                <td className="p-4">{student.grade}</td>
                                <td className="p-4">{student.section}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentERP;
