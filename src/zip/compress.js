import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const compress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, "files", "fileToCompress.txt");
  const archivePath = path.join(__dirname, "files", "archive.gz");
  const handleStream = createReadStream(filePath);
  handleStream
    .pipe(createGzip())
    .pipe(createWriteStream(archivePath))
    .on("finish", () => {
      console.log("Success!");
    });
  // Write your code here
};

await compress();
