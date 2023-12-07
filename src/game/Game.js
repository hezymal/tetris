import { BlockContainer } from "./BlockContainer";
import { BlockDestructor } from "./BlockDestructor";
import { BlockGenerator } from "./BlockGenerator";
import { BlockRenderer } from "./BlockRenderer";
import { BlockMovementController } from "./BlockMovementController";
import { Board } from "./Board";
import { FallingBlockContainer } from "./FallingBlockContainer";
import { Engine } from "../engine/Engine";
import { Keyboard } from "../engine/Keyboard";
import { Timer } from "./Timer";

export class Game extends Engine {
    constructor(canvasElement) {
        super(canvasElement);

        this.run = this.run.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        this.onKeyboardUp = this.onKeyboardUp.bind(this);
        this.moveFallingBlock = this.moveFallingBlock.bind(this);

        this.config = Game.getConfig({
            canvasWidth: this.canvasElement.width,
            canvasHeight: this.canvasElement.height,
            pointSizeInPixels: 30,
        });

        this.board = new Board();

        this.blockContainer = new BlockContainer();
        this.blockGenerator = new BlockGenerator(this.config);
        this.blockDestructor = new BlockDestructor(
            this.config,
            this.blockContainer
        );
        this.blockRenderer = new BlockRenderer(this.config, this.canvasContext);
        this.blockMovementController = new BlockMovementController(
            this.config,
            this.blockContainer
        );
        this.fallingBlockContainer = new FallingBlockContainer();

        this.timerOfFalling = new Timer(500);
        this.timerOfFreeFall = new Timer(25);
    }

    run() {
        super.run();

        this.fallingBlockContainer.set(this.blockGenerator.generate());
    }

    update() {
        if (this.timerOfFalling.hasExpired()) {
            this.moveFallingBlock();
            this.timerOfFalling.reset();
        }

        if (
            this.fallingBlockContainer.isFreeFall &&
            this.timerOfFreeFall.hasExpired()
        ) {
            this.moveFallingBlock();
            this.timerOfFreeFall.reset();
        }
    }

    render() {
        for (const block of this.blockContainer.all()) {
            this.blockRenderer.render(block);
        }

        this.blockRenderer.render(this.fallingBlockContainer.get());
    }

    onKeyboardUp(event) {
        const block = this.fallingBlockContainer.get();
        switch (event.code) {
            case Keyboard.KEY_CODE_A:
                this.blockMovementController.tryMoveBlockLeft(block);
                break;

            case Keyboard.KEY_CODE_D:
                this.blockMovementController.tryMoveBlockRight(block);
                break;

            case Keyboard.KEY_CODE_S:
                this.fallingBlockContainer.isFreeFall = true;
                break;

            case Keyboard.KEY_CODE_W:
                this.blockMovementController.tryTurnBlock(block);
                break;
        }
    }

    moveFallingBlock() {
        const fallingBlock = this.fallingBlockContainer.get();

        if (!this.blockMovementController.tryMoveBlockDown(fallingBlock)) {
            this.blockContainer.add(fallingBlock);
            this.fallingBlockContainer.set(this.blockGenerator.generate());
            this.fallingBlockContainer.isFreeFall = false;

            const destroyedLines = this.blockDestructor.destroyFullLines();
            this.board.addPoints(destroyedLines * this.config.numberOfHorizontalPoints);
        }
    }

    static getConfig({ canvasWidth, canvasHeight, pointSizeInPixels }) {
        const numberOfHorizontalPoints = canvasWidth / pointSizeInPixels;
        const numberOfVerticalPoints = canvasHeight / pointSizeInPixels;

        return {
            pointSizeInPixels,
            numberOfVerticalPoints,
            numberOfHorizontalPoints,
        };
    }
}
