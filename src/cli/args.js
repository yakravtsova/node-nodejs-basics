import { argv } from "process";

const parseArgs = () => {
  // Write your code here
  let args = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      args.push(`${argv[i]} is ${argv[i + 1]}`);
    }
  }
  console.log(args.join(", "));
};

parseArgs();
