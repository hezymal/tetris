import { CANVAS_ELEMENT_ID } from "./constants";
import { Game } from "./game/Game";

const canvasElement = document.getElementById(CANVAS_ELEMENT_ID);
if (!canvasElement) {
    throw new Error(`Canvas with ID "${CANVAS_ELEMENT_ID}" not found`);
}

const game = new Game(canvasElement);
game.run();

if (module.hot) {
    module.hot.accept();
}
