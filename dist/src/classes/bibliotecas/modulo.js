"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
lodash_1.default.mul = (array) => {
    const resultado = array.reduce((total, acc) => total * acc, 1);
    return resultado;
};
exports.default = lodash_1.default;
