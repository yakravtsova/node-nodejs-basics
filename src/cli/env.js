import { env } from "process";

const parseEnv = () => {
  // Write your code here
  let rssVars = [];
  for (let key in env) {
    if (key.startsWith("RSS_")) {
      rssVars.push(`${key}=${env[key]}`);
    }
  }
  console.log(rssVars.join("; "));
};

parseEnv();
