import fs from "fs";
import path from "path";

const remove = async () => {
  // Write your code here
  const filePath = path.join("src", "fs", "files", "fileToRemove.txt");
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
