import { COLORS } from "../constants";
import { Point } from "./Point";

export class BlockRenderer {
    constructor(config, canvasContext) {
        this.render = this.render.bind(this);

        this.config = config;
        this.canvasContext = canvasContext;
    }

    render(block) {
        const { pointSizeInPixels } = this.config;

        this.canvasContext.fillStyle = block.color;

        this.canvasContext.translate(
            block.position.x * pointSizeInPixels,
            block.position.y * pointSizeInPixels
        );

        for (const point of block.getTurnedPoints()) {
            const pointX = point.position.x * pointSizeInPixels;
            const pointY = point.position.y * pointSizeInPixels;

            this.canvasContext.strokeStyle = COLORS.lightenGrey;
            this.canvasContext.lineWidth = 1;
            this.canvasContext.beginPath();
            this.canvasContext.rect(
                pointX,
                pointY,
                pointSizeInPixels,
                pointSizeInPixels
            );
            this.canvasContext.fill();
            this.canvasContext.stroke();

            this.canvasContext.strokeStyle = COLORS.white;
            this.canvasContext.lineWidth = 2;
            this.canvasContext.beginPath();

            if (point.borders & Point.BORDER_STYLE_TOP) {
                this.canvasContext.moveTo(pointX, pointY);
                this.canvasContext.lineTo(pointX + pointSizeInPixels, pointY);
            }

            if (point.borders & Point.BORDER_STYLE_RIGHT) {
                this.canvasContext.moveTo(pointX + pointSizeInPixels, pointY);
                this.canvasContext.lineTo(
                    pointX + pointSizeInPixels,
                    pointY + pointSizeInPixels
                );
            }

            if (point.borders & Point.BORDER_STYLE_BOTTOM) {
                this.canvasContext.moveTo(
                    pointX + pointSizeInPixels,
                    pointY + pointSizeInPixels
                );
                this.canvasContext.lineTo(pointX, pointY + pointSizeInPixels);
            }

            if (point.borders & Point.BORDER_STYLE_LEFT) {
                this.canvasContext.moveTo(pointX, pointY + pointSizeInPixels);
                this.canvasContext.lineTo(pointX, pointY);
            }

            this.canvasContext.stroke();
        }

        this.canvasContext.resetTransform();
    }
}
