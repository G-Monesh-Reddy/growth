import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const headlines = [
    "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
    "Discover the Charm of Cake & Co in Mumbai",
    "Mumbai Loves Cake & Co: Here's Why!",
    "Your Guide to Mumbai's Best Dessert Destination",
    "Cake & Co: Sweetening Mumbai’s Mornings!",
];

app.post("/business-data", (req, res) => {
    const { name, location } = req.body;

    const data = {
        rating: 4.3,
        reviews: 127,
        headline: headlines[0],
    };

    res.json(data);
});

app.get("/regenerate-headline", (req, res) => {
    const randomHeadline =
        headlines[Math.floor(Math.random() * headlines.length)];
    res.json({ headline: randomHeadline });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
