import React from "react";

const DisplayCard = ({ data, onRegenerate }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-2">Business Summary</h3>
            <p>
                <strong>Rating:</strong> {data.rating}
            </p>
            <p>
                <strong>Reviews:</strong> {data.reviews}
            </p>
            <p className="my-2 italic text-gray-700">"{data.headline}"</p>
            <button
                onClick={onRegenerate}
                className="mt-3 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
                Regenerate SEO Headline
            </button>
        </div>
    );
};

export default DisplayCard;
