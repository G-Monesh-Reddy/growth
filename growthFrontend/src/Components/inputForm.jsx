import React, { useState } from "react";

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
            className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mb-6"
        >
            <h2 className="text-xl font-bold mb-4">Enter Business Details</h2>
            <input
                type="text"
                placeholder="Business Name"
                value={formData.name}
                onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-2 mb-3 border rounded"
                required
            />
            <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                }
                className="w-full p-2 mb-3 border rounded"
                required
            />
            <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
            >
                Submit
            </button>
        </form>
    );
};

export default InputForm;
