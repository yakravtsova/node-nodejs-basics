import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const list = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, "files");
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.readdir(filePath, (err, items) => {
        if (err) throw new Error("Unexpected error");
        items.forEach((item) => {
          console.log(item);
        });
      });
    }
  });
};

await list();
