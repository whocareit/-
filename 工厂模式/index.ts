//工厂模式实现
//1. 创建一个接口
interface Shape {
    draw():void;
}

//创建实现接口的实体类
class Rectangle implements Shape {
    draw(): void {
        console.log('Inside Rectangle draw() method');
    }
}

class Square implements Shape {
    draw(): void {
        console.log('Inside Square draw() method');
    }
}

class Circle implements Shape {
    draw(): void {
        console.log('Inside Circle draw() method');
    }
}

//3. 创建一个工厂，生成基于给定信息的实体类的对象
class ShapeFactory {
    getShape(shapeType: string): Shape | null {
        if(shapeType === "CIRCLE") {
            return new Circle();
        }else if(shapeType === "RECTANGLE") {
            return new Rectangle();
        }else if(shapeType === "SQUARE") {
            return new Square();
        }
        return null;
    }
}

//使用该工厂，通过传递类型信息来获取实体类的对象
class FactoryPatternDemo {
    shapeFactory = new ShapeFactory();

    //获取Circle的对象，并调用它的draw方法
    getResult(): void{
        const shape1: Square | null = this.shapeFactory.getShape("CIRCLE");
        console.log(shape1?.draw());
        const shape2: Square | null = this.shapeFactory.getShape("RECTANGLE");
        console.log(shape2?.draw());
        const shape3: Square | null = this.shapeFactory.getShape("RECTANGLE");
        console.log(shape3?.draw());
    }    
}

const obj = new FactoryPatternDemo();
console.log(obj.getResult())