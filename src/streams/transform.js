const reverse = (string) => {
  return string.split("").reverse().join("");
};

const transform = async () => {
  // Write your code here
  process.stdin.on("data", (data) => {
    data = reverse(data.toString());
    process.stdout.write(data);
  });
};

await transform();
