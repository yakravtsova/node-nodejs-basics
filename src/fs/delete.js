import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, "files", "fileToRemove.txt");
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.unlink(filePath, (err) => {
        if (err) throw new Error("Unexpected error");
      });
    }
  });
};

await remove();
