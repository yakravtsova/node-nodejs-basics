import fs from "fs";
import path from "path";

const list = async () => {
  // Write your code here
  const filePath = path.join("src", "fs", "files");
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
