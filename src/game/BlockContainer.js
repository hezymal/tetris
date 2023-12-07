export class BlockContainer {
    constructor() {
        this.add = this.add.bind(this);
        this.all = this.all.bind(this);
        this.isEmpty = this.isEmpty.bind(this);

        this.blocks = [];
    }

    add(newBlock) {
        if (Array.isArray(newBlock)) {
            newBlock.forEach(this.add);
            return;
        }

        for (const block of this.blocks) {
            if (block === newBlock) {
                return;
            }
        }

        this.blocks.push(newBlock);
    }

    all() {
        return this.blocks;
    }

    isEmpty() {
        return this.blocks.length === 0;
    }
}
