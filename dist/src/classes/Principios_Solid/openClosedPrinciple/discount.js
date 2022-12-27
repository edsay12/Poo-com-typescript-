"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDiscount = exports.FiftyPercentDiscount = exports.TenPercentDiscount = exports.Discount = void 0;
class Discount {
    constructor() {
        this.discount = 0;
    }
    calculate(value) {
        return value - value * this.discount;
    }
}
exports.Discount = Discount;
class TenPercentDiscount extends Discount {
    constructor() {
        super(...arguments);
        this.discount = 0.1;
    }
}
exports.TenPercentDiscount = TenPercentDiscount;
class FiftyPercentDiscount extends Discount {
    constructor() {
        super(...arguments);
        this.discount = 0.5;
    }
}
exports.FiftyPercentDiscount = FiftyPercentDiscount;
class NoDiscount extends Discount {
    constructor() {
        super(...arguments);
        this.discount = 0;
    }
}
exports.NoDiscount = NoDiscount;
