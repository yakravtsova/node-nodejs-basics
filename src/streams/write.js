import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const write = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, "files", "fileToWrite.txt");

  const writeStream = createWriteStream(filePath, "UTF-8");
  process.stdin.on("data", (data) => {
    writeStream.write(data.toString());
  });
};

await write();
