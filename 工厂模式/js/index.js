"use strict";
//创建实现接口的实体类
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.draw = function () {
        console.log('Inside Rectangle draw() method');
    };
    return Rectangle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        console.log('Inside Square draw() method');
    };
    return Square;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log('Inside Circle draw() method');
    };
    return Circle;
}());
//3. 创建一个工厂，生成基于给定信息的实体类的对象
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.prototype.getShape = function (shapeType) {
        if (shapeType === "CIRCLE") {
            return new Circle();
        }
        else if (shapeType === "RECTANGLE") {
            return new Rectangle();
        }
        else if (shapeType === "SQUARE") {
            return new Square();
        }
        return null;
    };
    return ShapeFactory;
}());
//使用该工厂，通过传递类型信息来获取实体类的对象
var FactoryPatternDemo = /** @class */ (function () {
    function FactoryPatternDemo() {
        this.shapeFactory = new ShapeFactory();
    }
    //获取Circle的对象，并调用它的draw方法
    FactoryPatternDemo.prototype.getResult = function () {
        var shape1 = this.shapeFactory.getShape("CIRCLE");
        console.log(shape1 === null || shape1 === void 0 ? void 0 : shape1.draw());
        var shape2 = this.shapeFactory.getShape("RECTANGLE");
        console.log(shape2 === null || shape2 === void 0 ? void 0 : shape2.draw());
        var shape3 = this.shapeFactory.getShape("RECTANGLE");
        console.log(shape3 === null || shape3 === void 0 ? void 0 : shape3.draw());
    };
    return FactoryPatternDemo;
}());
var obj = new FactoryPatternDemo();
console.log(obj.getResult());
