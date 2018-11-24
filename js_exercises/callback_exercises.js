class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
    const currentTime = new Date();
    this.hour = currentTime.getHours();
    this.minute = currentTime.getMinutes();
    this.second = currentTime.getSeconds();
    
    // this.printTime();
    // const that = this;
    // setInterval(function() { that._tickthat(that); } , 1000);
    // console.log(this)
    const ctx = this;
    setInterval(this._tickthat.bind(ctx) , 1000);
    // console.log(setInterval(this.printTime(), 1000));
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    const timer = [this.hour, this.minute, this.second].join(':');
    console.log(timer);
  }

  _tickthat() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.second += 1;
    if (this.second === 60) {
      this.second = 0;
      this.minute += 1;
      if (this.minute === 60) {
        this.minute = 0;
        this.hour += 1;
      }
    }
    this.printTime();
  }
  
}

const _tick = function() {
  // 1. Increment the time by one second.
  // 2. Call printTime.
  this.second += 1;
  if (this.second === 60) {
    this.second = 0;
    this.minute += 1;
    if (this.minute === 60) {
      this.minute = 0;
      this.hour += 1;
    }
  }
  // console.log(this);
  // window.clear = clear;
  // clear();
  this.printTime();
  console.log(clear());
};


// const clock = new Clock();
// window.clear = clear;
// clear();

////////////////////addNums//////////////////
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  }
  
  if (numsLeft > 0) {
    reader.question("Enter a number:", function (num) {
      addNumbers(sum + parseInt(num), numsLeft - 1, completionCallback);
    });
  }
}

// addNumbers(1, 3, sum => console.log(`Total Sum: ${sum}`));


////////////////absurdBubbleSort////////////////
// 
// function askIfGreaterThan(el1, el2, callback) {
//   // Prompt user to tell us whether el1 > el2; pass true back to the
//   // callback if true; else false.
//   reader.question(
//     "Is " + el1 + " greater than " + el2 + "?: ",
//     function (answer) {
//       if (answer == "yes") {
//         callback(true);
//       } else {
//         callback(false);
//       }
//     }
//   );
// }
// // 
// // // askIfGreaterThan(3,2, function (answer) {
// // //   if (answer === 'yes') {
// // //     console.log(true);
// // //   } else {
// // //     console.log(false);
// // //   }
// // //   reader.close();
// // // });
// // 
// // 
// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//   if (i == arr.length - 1){
//     outerBubbleSortLoop(madeAnySwaps);
//   } else {
//     askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
//       if (isGreaterThan) {
//       let first_el = arr[i];
//       let second_el = arr[i+1];
// 
//       arr[i] = second_el;
//       arr[i+1] = first_el;
//       madeAnySwaps = true;
//     }
// 
//     innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
//   });
//   }
// }
// 
// function absurdBubbleSort(arr, sortCompletionCallback) {
//   function outerBubbleSortLoop(madeAnySwaps) {
//     // Begin an inner loop if you made any swaps. Otherwise, call
//     // `sortCompletionCallback`.
//     if (madeAnySwaps) {
//       innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
//     } else {
//       sortCompletionCallback(arr);
//     }
//   }
//   outerBubbleSortLoop(true);
// 
//   // Kick the first outer loop off, starting `madeAnySwaps` as true.
// }
// 
// 
// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(
    "Is " + el1 + " greater than " + el2 + "?: ",
    function (answer) {
      if (answer == "yes") {
        callback(true);
      } else {
        callback(false);
      }
    }
  );
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

  if (i == (arr.length - 1)) {
    // End of array reached.
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }

  askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
    if (isGreaterThan) {
      const tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;

      madeAnySwaps = true;
    }

    innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
  });
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if `madeAnySwaps` is true, else call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});






























