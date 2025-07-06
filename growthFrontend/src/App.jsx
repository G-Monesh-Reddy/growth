import React, { useState } from "react";
import InputForm from "./components/InputForm";
import DisplayCard from "./components/DisplayCard";

function App() {
    const [businessData, setBusinessData] = useState(null);

    const fetchBusinessData = async (formData) => {
        try {
            const response = await fetch(
                "http://localhost:5000/business-data",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );
            const data = await response.json();
            setBusinessData(data);
        } catch (error) {
            console.error("Error fetching business data:", error);
        }
    };

    const regenerateHeadline = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/regenerate-headline"
            );
            const data = await response.json();
            setBusinessData((prev) => ({ ...prev, headline: data.headline }));
        } catch (error) {
            console.error("Error regenerating headline:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-4 flex flex-col items-center">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6 tracking-tight">
                    📊 Business SEO Dashboard
                </h1>

                <InputForm onSubmit={fetchBusinessData} />

                {businessData && (
                    <div className="mt-8">
                        <DisplayCard
                            data={businessData}
                            onRegenerate={regenerateHeadline}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
