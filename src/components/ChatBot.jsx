import React, { useState } from 'react';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false); 

    const handleSend = () => {
        if (!input) return;

        setMessages((prev) => [...prev, { text: input, sender: 'user' }]);

        const botResponse = getBotResponse(input);
        setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
        setInput('');
    };

    const getBotResponse = (query) => {
        const lowerQuery = query.toLowerCase();
        
        if (lowerQuery.includes('hi') || lowerQuery.includes('hello')) {
            return "Welcome, How may I help you?";
        }
        if (lowerQuery.includes('admission')) {
            return "You can find admission details on our Admission page.";
        }
        if (lowerQuery.includes('fees')) {
            return "Please Contact us to Get fee details.";
        }
        if (lowerQuery.includes('curriculum')) {
            return "We offer a holistic curriculum that includes academic and extracurricular activities.";
        }
        if (lowerQuery.includes('contact')) {
            return "You can contact us via the 'Contact Us' page for any queries.";
        }
        
        return "I'm sorry, I don't have an answer for that. Please check our website for more details.";
    };
    

    return (
        <div className={`fixed bottom-10 right-10 bg-white text-black shadow-lg rounded-lg w-full max-w-xs transition-transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            {isOpen && (
                <div className="p-4 relative">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    >
                        Minimize
                    </button>
                    <h2 className="text-lg font-bold text-center">Chat with Us</h2>
                    <div className="h-64 overflow-y-auto border border-gray-300 rounded-lg p-2 mb-2">
                        {messages.map((msg, index) => (
                            <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <div className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="border w-full border-gray-300 rounded-l-lg p-2 flex-grow text-black"
                            placeholder="Type your message..."
                        />
                        <button
                            onClick={handleSend}
                            className="bg-blue-500 text-black rounded-r-lg px-4 hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-500 text-white rounded-lg p-2 fixed bottom-2 right-2"
                >
                    Quick Chat
                </button>
            )}
        </div>
    );
};

export default ChatBot;
