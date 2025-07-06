import React, { useState } from "react";
import InputForm from "./components/InputForm";
import DisplayCard from "./components/DisplayCard";

function App() {
    const [businessData, setBusinessData] = useState(null);

    const fetchBusinessData = async (formData) => {
        const response = await fetch("http://localhost:5000/business-data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        setBusinessData(data);
    };

    const regenerateHeadline = async () => {
        const response = await fetch(
            "http://localhost:5000/regenerate-headline"
        );
        const data = await response.json();
        setBusinessData((prev) => ({ ...prev, headline: data.headline }));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <InputForm onSubmit={fetchBusinessData} />
            {businessData && (
                <DisplayCard
                    data={businessData}
                    onRegenerate={regenerateHeadline}
                />
            )}
        </div>
    );
}

export default App;
