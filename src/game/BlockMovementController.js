import { Vector2 } from "../math";

export class BlockMovementController {
    constructor(config, blockContainer) {
        this.tryMoveBlockDown = this.tryMoveBlockDown.bind(this);
        this.tryMoveBlockLeft = this.tryMoveBlockLeft.bind(this);
        this.tryMoveBlockRight = this.tryMoveBlockRight.bind(this);
        this.tryTurnBlock = this.tryTurnBlock.bind(this);
        this.isBlockCollidingWithWalls =
            this.isBlockCollidingWithWalls.bind(this);
        this.isBlockCollidingWithAnotherBlocks =
            this.isBlockCollidingWithAnotherBlocks.bind(this);

        this.config = config;
        this.blockContainer = blockContainer;
    }

    tryMoveBlockDown(block) {
        block.stepDown();

        if (this.isBlockCollidingWithWalls(block)) {
            block.stepUp();
            return false;
        }

        const blocks = this.blockContainer.all();
        if (this.isBlockCollidingWithAnotherBlocks(block, blocks)) {
            block.stepUp();
            return false;
        }

        return true;
    }

    tryMoveBlockLeft(block) {
        block.stepLeft();

        if (this.isBlockCollidingWithWalls(block)) {
            block.stepRight();
            return false;
        }

        const blocks = this.blockContainer.all();
        if (this.isBlockCollidingWithAnotherBlocks(block, blocks)) {
            block.stepRight();
            return false;
        }

        return true;
    }

    tryMoveBlockRight(block) {
        block.stepRight();

        if (this.isBlockCollidingWithWalls(block)) {
            block.stepLeft();
            return false;
        }

        const blocks = this.blockContainer.all();
        if (this.isBlockCollidingWithAnotherBlocks(block, blocks)) {
            block.stepLeft();
            return false;
        }

        return true;
    }

    tryTurnBlock(block) {
        block.turnRight();

        if (this.isBlockCollidingWithWalls(block)) {
            block.turnLeft();
            return false;
        }

        const blocks = this.blockContainer.all();
        if (this.isBlockCollidingWithAnotherBlocks(block, blocks)) {
            block.turnLeft();
            return false;
        }

        return true;
    }

    isBlockCollidingWithWalls(block) {
        const position = block.position;
        const points = block.getTurnedPoints();

        for (const point of points) {
            const y = position.y + point.position.y;
            if (y >= this.config.numberOfVerticalPoints) {
                return true;
            }

            const x = position.x + point.position.x;
            if (x < 0 || x >= this.config.numberOfHorizontalPoints) {
                return true;
            }
        }

        return false;
    }

    isBlockCollidingWithAnotherBlocks(block, anotherBlocks) {
        for (const point of block.getTurnedPoints()) {
            const pointPosition = Vector2.sum(block.position, point.position);

            for (const anotherBlock of anotherBlocks) {
                for (const anotherPoint of anotherBlock.getTurnedPoints()) {
                    const anotherPointPosition = Vector2.sum(
                        anotherBlock.position,
                        anotherPoint.position
                    );

                    if (Vector2.equals(pointPosition, anotherPointPosition)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}
