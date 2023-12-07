import { Block } from "./Block";
import { COLORS } from "../constants";
import { Vector2 } from "../math";
import { Point } from "./Point";

export class BlockGenerator {
    constructor(config) {
        this.generate = this.generate.bind(this);
        this.generateIBlock = this.generateIBlock.bind(this);
        this.generateJBlock = this.generateJBlock.bind(this);
        this.generateLBlock = this.generateLBlock.bind(this);
        this.generateOBlock = this.generateOBlock.bind(this);
        this.generateSBlock = this.generateSBlock.bind(this);
        this.generateTBlock = this.generateTBlock.bind(this);
        this.generateZBlock = this.generateZBlock.bind(this);

        this.config = config;
        this.generationFunctions = [
            this.generateIBlock,
            this.generateJBlock,
            this.generateLBlock,
            this.generateOBlock,
            this.generateSBlock,
            this.generateTBlock,
            this.generateZBlock,
        ];
    }

    generate() {
        const index = Math.floor(
            Math.random() * this.generationFunctions.length
        );
        return this.generationFunctions[index]();
    }

    generateIBlock() {
        return new Block({
            color: COLORS.blue,
            position: new Vector2(
                Math.ceil(this.config.numberOfHorizontalPoints / 2),
                -1
            ),
            points: [
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT |
                            Point.BORDER_STYLE_LEFT,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_RIGHT | Point.BORDER_STYLE_LEFT,
                        position: new Vector2(0, -1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_RIGHT | Point.BORDER_STYLE_LEFT,
                        position: new Vector2(0, -2),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_RIGHT |
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_TOP,
                        position: new Vector2(0, -3),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_LEFT,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(2, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(3, 0),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_RIGHT |
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_LEFT,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_RIGHT | Point.BORDER_STYLE_LEFT,
                        position: new Vector2(0, 1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_RIGHT | Point.BORDER_STYLE_LEFT,
                        position: new Vector2(0, 2),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT |
                            Point.BORDER_STYLE_LEFT,
                        position: new Vector2(0, 3),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_LEFT,
                        position: new Vector2(-3, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(-2, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(-1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 0),
                    }),
                ],
            ],
        });
    }

    generateJBlock() {
        return new Block({
            color: COLORS.lightBlue,
            position: new Vector2(
                Math.ceil(this.config.numberOfHorizontalPoints / 2) + 1,
                -1
            ),
            points: [
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, -2),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, -1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_RIGHT |
                            Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(-1, 0),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, -1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(2, 0),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_LEFT,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 2),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_LEFT,
                        position: new Vector2(-2, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(-1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 1),
                    }),
                ],
            ],
        });
    }

    generateLBlock() {
        return new Block({
            color: COLORS.green,
            position: new Vector2(
                Math.ceil(this.config.numberOfHorizontalPoints / 2),
                -1
            ),
            points: [
                // #
                // #
                // ##
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, -2),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, -1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                ],

                // ###
                // #
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_RIGHT |
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(2, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_TOP,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 1),
                    }),
                ],

                // ##
                //  #
                //  #
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_TOP,
                        position: new Vector2(-1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_RIGHT | Point.BORDER_STYLE_TOP,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 2),
                    }),
                ],

                //   #
                // ###
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, -1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(-1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(-2, 0),
                    }),
                ],
            ],
        });
    }

    generateOBlock() {
        return new Block({
            color: COLORS.lightGreen,
            position: new Vector2(
                Math.ceil(this.config.numberOfHorizontalPoints / 2),
                -1
            ),
            points: [
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_RIGHT | Point.BORDER_STYLE_TOP,
                        position: new Vector2(1, -1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_TOP,
                        position: new Vector2(0, -1),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_RIGHT | Point.BORDER_STYLE_TOP,
                        position: new Vector2(1, -1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_TOP,
                        position: new Vector2(0, -1),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_RIGHT | Point.BORDER_STYLE_TOP,
                        position: new Vector2(1, -1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_TOP,
                        position: new Vector2(0, -1),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_RIGHT | Point.BORDER_STYLE_TOP,
                        position: new Vector2(1, -1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_TOP,
                        position: new Vector2(0, -1),
                    }),
                ],
            ],
        });
    }

    generateSBlock() {
        return new Block({
            color: COLORS.red,
            position: new Vector2(
                Math.ceil(this.config.numberOfHorizontalPoints / 2),
                -2
            ),
            points: [
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, -1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 1),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_TOP,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_LEFT,
                        position: new Vector2(-1, 1),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, -1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 1),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_TOP,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_LEFT,
                        position: new Vector2(-1, 1),
                    }),
                ],
            ],
        });
    }

    generateZBlock() {
        return new Block({
            color: COLORS.lightenRed,
            position: new Vector2(
                Math.ceil(this.config.numberOfHorizontalPoints / 2),
                -2
            ),
            points: [
                //  #
                // ##
                // #
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, -1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_LEFT,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 1),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_TOP,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(1, 1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(2, 1),
                    }),
                ],
                //  #
                // ##
                // #
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, -1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_LEFT,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 1),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_TOP,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP | Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT | Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(1, 1),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(2, 1),
                    }),
                ],
            ],
        });
    }

    generateTBlock() {
        return new Block({
            color: COLORS.lightRed,
            position: new Vector2(
                Math.ceil(this.config.numberOfHorizontalPoints / 2),
                -2
            ),
            points: [
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, -1),
                    }),
                    new Point({
                        borders: Point.BORDER_STYLE_LEFT,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 1),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_LEFT,
                        position: new Vector2(-1, 0),
                    }),
                    new Point({
                        borders: Point.BORDER_STYLE_TOP,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 1),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, -1),
                    }),
                    new Point({
                        borders: Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_TOP,
                        position: new Vector2(-1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, 1),
                    }),
                ],
                [
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(0, -1),
                    }),
                    new Point({
                        borders: Point.BORDER_STYLE_BOTTOM,
                        position: new Vector2(0, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_LEFT |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_TOP,
                        position: new Vector2(-1, 0),
                    }),
                    new Point({
                        borders:
                            Point.BORDER_STYLE_TOP |
                            Point.BORDER_STYLE_BOTTOM |
                            Point.BORDER_STYLE_RIGHT,
                        position: new Vector2(1, 0),
                    }),
                ],
            ],
        });
    }
}
