import { spawn } from "node:child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const childProcessPath = join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  // Write your code here
  const childProcess = spawn("node", [childProcessPath, ...args]);

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2", "someArgument3"]);
