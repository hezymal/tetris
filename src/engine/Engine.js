export class Engine {
    constructor(canvasElement) {
        this.run = this.run.bind(this);
        this.animateFrame = this.animateFrame.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        this.beginRender = this.startRendering.bind(this);
        this.onKeyboardUp = this.onKeyboardUp.bind(this);

        this.canvasElement = canvasElement;
        this.canvasContext = this.canvasElement.getContext("2d");
    }

    run() {
        document.addEventListener("keyup", this.onKeyboardUp, true);

        requestAnimationFrame(this.animateFrame);
    }

    animateFrame() {
        this.update();

        this.startRendering();
        this.render();

        requestAnimationFrame(this.animateFrame);
    }

    startRendering() {
        const { width, height } = this.canvasElement;

        this.canvasContext.clearRect(0, 0, width, height);
    }

    update() {}

    render() {}

    onKeyboardUp(event) {}
}
