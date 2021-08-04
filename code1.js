let hasFailed = false;

function getUserInfo() {
  return new Promise((resolve, reject) => {
    if (!hasFailed) {
      hasFailed = true;
      reject("Exception!");
    } else {
      resolve("Fetched user");
    }
  });
}

function retryRequest(func, nrOfRetries) {
  return new Promise((resolve, reject) => {
    let attemptNumber = 1;
    function attempt() {
      if (attemptNumber > nrOfRetries) reject("Number of attempts exceeded");

      func()
        .then((result) => {
          resolve(result);
        })
        .catch(() => {
          attemptNumber++;
          attempt(attemptNumber);
        });
    }

    attempt(attemptNumber);
  });
}

let promise = retryRequest(getUserInfo, 3);

if (promise) {
  promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
