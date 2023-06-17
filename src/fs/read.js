import fs from "fs";
import path from "path";

const read = async () => {
  // Write your code here
  const filePath = path.join("src", "fs", "files", "fileToRead.txt");
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) throw new Error("Unexpected error");
        console.log(data);
      });
    }
  });
};

await read();
