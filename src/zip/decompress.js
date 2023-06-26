import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createUnzip } from "zlib";

const decompress = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, "files", "fileToCompress.txt");
  const archivePath = path.join(__dirname, "files", "archive.gz");
  const handleStream = createReadStream(archivePath);
  handleStream
    .pipe(createUnzip())
    .pipe(createWriteStream(filePath))
    .on("finish", () => {
      console.log("Success!");
    });
};

await decompress();
