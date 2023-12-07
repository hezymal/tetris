export class Block {
    static TURN_TOP = 0;
    static TURN_RIGHT = 1;
    static TURN_BOTTOM = 2;
    static TURN_LEFT = 3;

    constructor({ color, points, position, turn }) {
        this.getTurnedPoints = this.getTurnedPoints.bind(this);
        this.removePointsAtLine = this.removePointsAtLine.bind(this);
        this.stepDown = this.stepDown.bind(this);
        this.stepUp = this.stepUp.bind(this);
        this.stepLeft = this.stepLeft.bind(this);
        this.stepRight = this.stepRight.bind(this);
        this.turnLeft = this.turnLeft.bind(this);
        this.turnRight = this.turnRight.bind(this);

        this.color = color;
        this.points = points;
        this.position = position;
        this.turn = turn || Block.TURN_TOP;
    }

    getTurnedPoints() {
        return this.points[this.turn];
    }

    removePointsAtLine(lineY) {
        const points = [];

        for (const point of this.getTurnedPoints()) {
            const y = this.position.y + point.position.y;
            if (y !== lineY) {
                points.push(point);
            }
        }

        this.points[this.turn] = points;
    }

    stepDown() {
        this.position.y++;
    }

    stepUp() {
        this.position.y--;
    }

    stepLeft() {
        this.position.x--;
    }

    stepRight() {
        this.position.x++;
    }

    turnLeft() {
        this.turn--;

        if (this.turn < Block.TURN_TOP) {
            this.turn = Block.TURN_LEFT;
        }
    }

    turnRight() {
        this.turn++;

        if (this.turn > Block.TURN_LEFT) {
            this.turn = Block.TURN_TOP;
        }
    }
}
