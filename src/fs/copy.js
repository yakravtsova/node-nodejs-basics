import fs from "fs";
import path from "path";

const copy = async () => {
  // Write your code here
  const dirPath = path.join("src", "fs", "files");
  const dirCopyPath = path.join("src", "fs", "files_copy");
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
