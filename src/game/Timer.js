export class Timer {
    constructor(timeInMilliseconds) {
        this.hasExpired = this.hasExpired.bind(this);
        this.reset = this.reset.bind(this);

        this.timeInMilliseconds = timeInMilliseconds;
        this.startTime = Date.now();
    }

    hasExpired() {
        return Date.now() - this.startTime > this.timeInMilliseconds;
    }

    reset() {
        this.startTime = Date.now();
    }
}
