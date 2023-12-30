// Progress bar/ downloading bar
const ProgressBar = require("progress");
const chalk = require("chalk");

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas ", {
  total: 20,
});

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);

console.log(chalk.green("This is green color"));
