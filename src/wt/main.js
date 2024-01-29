import { availableParallelism } from "os";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, "worker.js");
const INIT_VALUE = 10;

const handleWorker = (value) => {
  return new Promise((res, rej) => {
    const worker = new Worker(workerPath, { workerData: value });

    worker.on("message", (data) =>
      res({
        status: "resolved",
        data,
      })
    );

    worker.on("error", () =>
      res({
        status: "error",
        data: null,
      })
    );
  });
};

const performCalculations = async () => {
  // Write your code here
  const coresNumber = availableParallelism();
  const workers = Array.from({ length: coresNumber }, (_, i) =>
    handleWorker(INIT_VALUE + i)
  );
  const result = await Promise.all(workers);
  console.log(result);
};

await performCalculations();
