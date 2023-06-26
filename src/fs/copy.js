import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const dirPath = path.join(__dirname, "files");
  const dirCopyPath = path.join(__dirname, "files_copy");
  fs.access(dirCopyPath, fs.constants.F_OK, (err) => {
    if (err) {
      fs.cp(dirPath, dirCopyPath, { recursive: true }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await copy();
