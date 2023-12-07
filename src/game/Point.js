export class Point {
    static BORDER_STYLE_NONE = 0;
    static BORDER_STYLE_TOP = 0b0001;
    static BORDER_STYLE_RIGHT = 0b0010;
    static BORDER_STYLE_BOTTOM = 0b0100;
    static BORDER_STYLE_LEFT = 0b1000;

    constructor({ borders, position }) {
        this.stepDown = this.stepDown.bind(this);

        this.borders = borders;
        this.position = position;
    }

    stepDown() {
        this.position.y++;
    }
}
