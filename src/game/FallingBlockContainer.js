export class FallingBlockContainer {
    constructor() {
        this.get = this.get.bind(this);
        this.set = this.set.bind(this);

        this.block = null;
        this.isFreeFall = false;
    }

    get() {
        return this.block;
    }

    set(block) {
        this.block = block;
    }
}
