/* Q. Implement a circuit breaker function in the client side , which halts the function for X time duration if it 
      fails for Y count times . [SDE -2 | 6.5 Years Exp | Atlassian]

Given scenario : 
 fn(..args) , X: 300 miliseconds , Y: 3

Approach : 
    1. Implement a Closures fn(()=> fn(...args) , Y count , X time) 
    2. Things needs to Consider is : X time and Y count and the time gap between failure and now should be less then
     the given X time duration 
    3. close the circuit breaker if failure occures 
    4. open it IF (currentTime - timeSinceLastFailure > X ) 
    5. IF NOT : throw Error("Something went Wrong ! Please try again after sometime .")   
*/

const circuitBreaker = (fn, breakCount, timeDuration) => {
  let failuresCount = 0,
    timeSinceLastFailure = 0,
    isClosed = false;

  return (...args) => {
    if (isClosed) {
      const timeDiff = Date.now() - timeSinceLastFailure;
      if (timeDiff > timeDuration) {
        isClosed = false;
      } else {
        console.log('Circuit Breaker is Open');
        return;
      }
    }
    try {
      const result = fn(...args);
      failuresCount = 0;
      return result;
    } catch (err) {
      failuresCount++;
      timeSinceLastFailure = Date.now();
      if (failuresCount >= breakCount) {
        isClosed = true;
      }
      console.log('Error While Fetching');
    }
  };
};

const GET_USERS_DATA = () => {
  return function () {
    fetch('https://jsonplaceholder.typicodee.com/users')
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        throw new Error(err);
      });
  };
};

const testFunction = () => {
  let count = 0;

  return function () {
    count++;
    if (count < 4) {
      throw 'failed';
    } else {
      return 'hello';
    }
  };
};

let t = testFunction();
let c = circuitBreaker(t, 3, 200);

c(); // "error"
c(); // "error"
c(); // "error"

// service is closed for 200 MS
c(); // "service unavailable"
c(); // "service unavailable"
c(); // "service unavailable"
c(); // "service unavailable"
c(); // "service unavailable"

// service becomes available after 300ms
setTimeout(() => {
  console.log(c());
}, 300); // "hello";
