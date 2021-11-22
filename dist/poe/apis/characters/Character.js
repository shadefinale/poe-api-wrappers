"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const classes_1 = require("../../../common/classes");
const constants_1 = require("../../shared/constants");
class Character extends classes_1.Transformable {
    /**
     * Calculates the current level progression and returns it as a percentage value.
     */
    get levelProgression() {
        for (let i = 1; i <= constants_1.Experience.length; i++) {
            const nextExp = constants_1.Experience[i];
            if (nextExp > this.experience) {
                const prevExp = constants_1.Experience[i - 1];
                const remaining = nextExp - this.experience;
                const max = nextExp - prevExp;
                const value = max - remaining;
                return (value / max) * 100;
            }
        }
        return 0;
    }
}
exports.Character = Character;
