import { BOARD_POINTS_ELEMENT_ID } from "../constants";

export class Board {
    constructor() {
        this.addPoints = this.addPoints.bind(this);

        this.points = 0;

        this.pointsElement = document.getElementById(BOARD_POINTS_ELEMENT_ID);
    }

    addPoints(points) {
        this.points += points;
        this.pointsElement.innerHTML = this.points + "";
    }
}
