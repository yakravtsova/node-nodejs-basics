import { createHash } from "crypto";
//import sha256 from "sha256";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw new Error("Unexpected error");
    const hash = createHash("sha256").update(data);
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
