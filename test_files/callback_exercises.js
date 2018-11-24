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
    
    this.printTime();
    
    setInterval(this._tick().bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    const timer = [this.hour, this.minute, this.second].join(':');
    console.log(timer);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    
  }
}

const clock = new Clock();