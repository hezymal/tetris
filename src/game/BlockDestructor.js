import { BlockContainer } from "./BlockContainer";

export class BlockDestructor {
    constructor(config, blockContainer) {
        this.destroyFullLines = this.destroyFullLines.bind(this);

        this.blockContainer = blockContainer;
        this.config = config;
    }

    destroyFullLines() {
        const lines = {};
        const removedLines = [];

        for (const block of this.blockContainer.all()) {
            for (const point of block.getTurnedPoints()) {
                const pointY = block.position.y + point.position.y;

                lines[pointY] = lines[pointY] || {
                    blocks: new BlockContainer(),
                    numberOfPoints: 0,
                };

                const line = lines[pointY];
                line.blocks.add(block);
                line.numberOfPoints++;

                if (
                    line.numberOfPoints === this.config.numberOfHorizontalPoints
                ) {
                    for (const block of line.blocks.all()) {
                        block.removePointsAtLine(pointY);
                    }

                    removedLines.push(pointY);
                }
            }
        }

        if (removedLines.length > 0) {
            removedLines.sort();

            for (const block of this.blockContainer.all()) {
                for (const point of block.getTurnedPoints()) {
                    const pointY = block.position.y + point.position.y;

                    for (const lineY of removedLines) {
                        if (lineY > pointY) {
                            point.stepDown();
                        }
                    }
                }
            }
        }

        return removedLines.length;
    }
}
