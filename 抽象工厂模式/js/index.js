"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//2. 创建实现接口的实体类
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        console.log('Inside Square::draw() method.');
    };
    return Square;
}());
var Cirlce = /** @class */ (function () {
    function Cirlce() {
    }
    Cirlce.prototype.draw = function () {
        console.log("Inside Circle::draw() method.");
    };
    return Cirlce;
}());
//4. 创建实现接口的实体类
var Red = /** @class */ (function () {
    function Red() {
    }
    Red.prototype.fill = function () {
        console.log("Inside Red::draw() method.");
    };
    return Red;
}());
var Green = /** @class */ (function () {
    function Green() {
    }
    Green.prototype.fill = function () {
        console.log("Inside Green::draw() method.");
    };
    return Green;
}());
var Blue = /** @class */ (function () {
    function Blue() {
    }
    Blue.prototype.fill = function () {
        console.log("Inside Blue::draw() method.");
    };
    return Blue;
}());
//5. 为Color和Shape对象创建抽象类来获取工厂
var AbstractFactory = /** @class */ (function () {
    function AbstractFactory() {
    }
    return AbstractFactory;
}());
//6. 创建扩展AbstractFactory的工厂类，基于给定的信息生成实体类的对象
var ShapeFactory = /** @class */ (function (_super) {
    __extends(ShapeFactory, _super);
    function ShapeFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShapeFactory.prototype.getShape = function (shapeType) {
        if (shapeType === "CIRCLE") {
            return new Cirlce();
        }
        else if (shapeType === "SUQARE") {
            return new Square();
        }
        return null;
    };
    ShapeFactory.prototype.getColor = function (color) {
        return null;
    };
    return ShapeFactory;
}(AbstractFactory));
var ColorFactory = /** @class */ (function (_super) {
    __extends(ColorFactory, _super);
    function ColorFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorFactory.prototype.getShape = function (shapetype) {
        return null;
    };
    ColorFactory.prototype.getColor = function (color) {
        if (color === "RED") {
            return new Red();
        }
        else if (color === "GREEN") {
            return new Green();
        }
        else if (color === "blue") {
            return new Blue();
        }
        return null;
    };
    return ColorFactory;
}(AbstractFactory));
//7. 创建一个工厂创造器/生成器，通过传递形状或颜色信息来获取工厂
var FactoryProducer = /** @class */ (function () {
    function FactoryProducer() {
    }
    FactoryProducer.prototype.getFactory = function (choice) {
        if (choice === "SHAPE") {
            return new ShapeFactory();
        }
        else if (choice === "COLOR") {
            return new ColorFactory();
        }
        return null;
    };
    return FactoryProducer;
}());
//8. 使用FactoryProducer来获取AbstractFactory,通过传递类型来获取实体类的对象
var AbstractFactoryDemo = /** @class */ (function () {
    function AbstractFactoryDemo() {
        this.shapeFactory = new FactoryProducer();
    }
    AbstractFactoryDemo.prototype.getResult = function () {
        var _a, _b, _c, _d, _e;
        var shape1 = this.shapeFactory.getFactory("SHAPE");
        console.log(shape1 === null || shape1 === void 0 ? void 0 : shape1.getColor(''));
        console.log((_a = shape1 === null || shape1 === void 0 ? void 0 : shape1.getShape("CIRCLE")) === null || _a === void 0 ? void 0 : _a.draw());
        var shape2 = this.shapeFactory.getFactory("SHAPE");
        console.log(shape2 === null || shape2 === void 0 ? void 0 : shape2.getColor(''));
        console.log((_b = shape2 === null || shape2 === void 0 ? void 0 : shape2.getShape("SUQARE")) === null || _b === void 0 ? void 0 : _b.draw());
        var shape3 = this.shapeFactory.getFactory("COLOR");
        console.log((_c = shape3 === null || shape3 === void 0 ? void 0 : shape3.getColor("RED")) === null || _c === void 0 ? void 0 : _c.fill());
        console.log(shape3 === null || shape3 === void 0 ? void 0 : shape3.getShape(""));
        var shape4 = this.shapeFactory.getFactory("COLOR");
        console.log((_d = shape4 === null || shape4 === void 0 ? void 0 : shape4.getColor("BLUE")) === null || _d === void 0 ? void 0 : _d.fill());
        console.log(shape4 === null || shape4 === void 0 ? void 0 : shape4.getShape(""));
        var shape5 = this.shapeFactory.getFactory("COLOR");
        console.log((_e = shape5 === null || shape5 === void 0 ? void 0 : shape5.getColor("GREEN")) === null || _e === void 0 ? void 0 : _e.fill());
        console.log(shape5 === null || shape5 === void 0 ? void 0 : shape5.getShape(""));
    };
    return AbstractFactoryDemo;
}());
var demo = new AbstractFactoryDemo();
demo.getResult();
