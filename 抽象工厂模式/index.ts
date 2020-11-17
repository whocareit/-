//1. 为形状创建一个接口
interface Shape {
    draw(): void;
}

//2. 创建实现接口的实体类
class Square implements Shape {
    draw():void {
        console.log('Inside Square::draw() method.');
    }
}

class Cirlce implements Shape {
    draw():void {
        console.log("Inside Circle::draw() method.")
    }
}

//3. 为颜色创建一个接口
interface Color {
    fill():void;
}

//4. 创建实现接口的实体类
class Red implements Color {
    fill(): void {
        console.log("Inside Red::draw() method.")
    }
}

class Green implements Color {
    fill(): void {
        console.log("Inside Green::draw() method.")
    }
}

class Blue implements Color {
    fill(): void {
        console.log("Inside Blue::draw() method.")
    }
}

//5. 为Color和Shape对象创建抽象类来获取工厂
abstract class AbstractFactory {
    abstract getColor(color: string): Color | null;
    abstract getShape(shape: string): Shape | null;
}

//6. 创建扩展AbstractFactory的工厂类，基于给定的信息生成实体类的对象
class ShapeFactory extends AbstractFactory {
    getShape(shapeType: string): Shape | null {
        if(shapeType === "CIRCLE") {
            return new Cirlce();
        }else if(shapeType === "SUQARE") {
            return new Square();
        }
        return null;
    }

    getColor(color: string): Color | null {
        return null
    }
}

class ColorFactory extends AbstractFactory {
    getShape(shapetype: string): Shape | null {
        return null;
    }

    getColor(color: string): Color | null {
        if(color === "RED"){
            return new Red();
        }else if(color === "GREEN") {
            return new Green();
        }else if(color === "blue") {
            return new Blue();
        }
        return null;
    }
}

//7. 创建一个工厂创造器/生成器，通过传递形状或颜色信息来获取工厂
class FactoryProducer {
    getFactory(choice: string): AbstractFactory | null{
        if(choice === "SHAPE") {
            return new ShapeFactory();
        }else if(choice === "COLOR") {
            return new ColorFactory();
        }
        return null;
    }
}

//8. 使用FactoryProducer来获取AbstractFactory,通过传递类型来获取实体类的对象
class AbstractFactoryDemo {
    shapeFactory = new FactoryProducer();
    getResult():void {
        const shape1 = this.shapeFactory.getFactory("SHAPE");
        console.log(shape1?.getColor(''));
        console.log(shape1?.getShape("CIRCLE")?.draw());
        const shape2 = this.shapeFactory.getFactory("SHAPE");
        console.log(shape2?.getColor(''));
        console.log(shape2?.getShape("SUQARE")?.draw());
        const shape3 = this.shapeFactory.getFactory("COLOR");
        console.log(shape3?.getColor("RED")?.fill());
        console.log(shape3?.getShape(""));
        const shape4 = this.shapeFactory.getFactory("COLOR");
        console.log(shape4?.getColor("BLUE")?.fill());
        console.log(shape4?.getShape(""));
        const shape5 = this.shapeFactory.getFactory("COLOR");
        console.log(shape5?.getColor("GREEN")?.fill());
        console.log(shape5?.getShape(""));
    }
}
const demo = new AbstractFactoryDemo();
demo.getResult();