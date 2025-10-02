import { Buffer } from "buffer";

export default async function handler(req, res) {
    const { path } = req.query; // path sẽ là "t/p/original/abc.jpg"

    try {
        const response = await fetch(`https://image.tmdb.org/${path}`);

        if (!response.ok) {
            return res.status(response.status).send("Error fetching image");
        }

        const buffer = await response.arrayBuffer();
        res.setHeader("Content-Type", "image/jpeg");
        res.send(Buffer.from(buffer));
    } catch (error) {
        res.status(500).send(error.message);
    }
}
