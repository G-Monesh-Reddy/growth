import React from "react";
import { FaStar } from "react-icons/fa";

const DisplayCard = ({ data, onRegenerate }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
                Business Summary
            </h3>

            <div className="flex items-center gap-2 mb-2 text-yellow-500">
                <FaStar className="text-lg" />
                <span className="text-lg font-medium">{data.rating} / 5.0</span>
                <span className="text-sm text-gray-600 ml-2">
                    ({data.reviews} reviews)
                </span>
            </div>

            <div className="my-4">
                <h4 className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                    SEO Headline
                </h4>
                <p className="text-lg italic text-gray-800 mt-1 border-l-4 border-blue-500 pl-3">
                    “{data.headline}”
                </p>
            </div>

            <button
                onClick={onRegenerate}
                className="mt-5 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition duration-300"
            >
                🔁 Regenerate SEO Headline
            </button>
        </div>
    );
};

export default DisplayCard;
