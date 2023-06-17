import fs from "fs";
import path from "path";

const rename = async () => {
  // Write your code here
  const wrongFilePath = path.join("src", "fs", "files", "wrongFilename.txt");
  const properFilePath = path.join("src", "fs", "files", "properFilename.md");
  fs.access(wrongFilePath, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.access(properFilePath, fs.constants.F_OK, (err) => {
        if (err) {
          fs.rename(wrongFilePath, properFilePath, (err) => {
            if (err) throw new Error("Unexpected error");
          });
        } else {
          throw new Error("FS operation failed");
        }
      });
    }
  });
};

await rename();
