import fs from "fs";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { names, points } = req.body;
    const newFileContent = names.map((name, index) => {
      return `${name},${points[index]}`;
    });
    fs.writeFile("public/leaderboard.txt", newFileContent.join("\n"), "utf-8", (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        res.status(500).json({ error: 'Failed to write to file' });
        return;
      }
      res.status(200).json({ message: 'File written successfully' });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
