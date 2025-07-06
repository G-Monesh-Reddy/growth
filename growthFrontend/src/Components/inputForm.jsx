import React, { useState } from "react";
import { FaStore, FaMapMarkerAlt } from "react-icons/fa";

const InputForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ name: "", location: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.location) return;
        onSubmit(formData);
        setFormData({ name: "", location: "" });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mb-8 transition-all duration-300"
        >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                📝 Business Information
            </h2>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                    <FaStore /> Business Name
                </label>
                <input
                    type="text"
                    placeholder="e.g. Cake & Co"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                    <FaMapMarkerAlt /> Location
                </label>
                <input
                    type="text"
                    placeholder="e.g. Mumbai"
                    value={formData.location}
                    onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 rounded-xl hover:from-blue-600 hover:to-blue-700 transition duration-300"
            >
                🚀 Submit
            </button>
        </form>
    );
};

export default InputForm;
