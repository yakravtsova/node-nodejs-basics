import fs from "fs";
import path from "path";

const create = async () => {
  // Write your code here
  const filePath = path.join("src", "fs", "files", "fresh.txt");
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
