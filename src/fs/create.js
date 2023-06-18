import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const create = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, "files", "fresh.txt");
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      fs.appendFile(filePath, "I am fresh and young", (err) => {
        if (err) throw err;
        console.log("Saved!");
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
