async function waitFor(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, x * 1000);
  })
}
module.exports = waitFor;