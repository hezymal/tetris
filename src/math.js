export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static sum(a, b) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    static equals(a, b) {
        return a.x === b.x && a.y === b.y;
    }
}
