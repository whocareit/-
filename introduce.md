# 设计模式
* 定义： 一套反复被使用，多数人知晓的，经过分类编目的，代码设计经验的总结
* 目的： 为了重用代码、让代码更容易被理解，保证代码的可靠性
## 创建型模式
### 工厂模式
运用工厂模式，使得在常见对象时，不会对客户端暴露创建逻辑，并且通过使用一个共同的接口类来指向新创建的对象
* 意图：定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行
* 主要解决问题：主要解决接口选择问题
* 何时使用：在明确计划不同条件下创建不同实列时
* 如何解决：让其子类实现工厂接口，返回一个抽象的产品
* 关键代码：创建在其子类执行
* 应用实例：当你需要一辆车时，可以直接从工厂里面提货，不用去管这辆汽车是怎样做出来的，以及这个汽车里面的具体实现
* 优点：
    1. 一个调用者想创建一个对象，只要知道其名称就可以
    2. 可扩展性高，如果想要增加一个产品，只要扩展一个工厂类就可以
    3. 屏蔽产品的具体实现，调用者只关心产品的接口
* 缺点：每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时增加了一个系统具体类的依赖
* 使用场景：
    1. 日志记录器：记录可能记录到本地硬盘、系统事件、远程服务器等，用户可以选择记录日志到什么地方
    2. 数据库访问，当用户不知道最后系统采用哪一类数据库，以及数据库有可能有变化时
    3. 设计一个链接服务器的框架，需要三个协议："POP3" "IMAP" "HTTP"，额可以把者三个产品类，共同实现一个接口
* 注意事项：作为一种创建类模式，在任何需要生成复杂对象的地方，都可以使用工厂模式。需要注意的地方就是复杂对象适合使用工厂模式，而简单对象，特别是只需要new就可以完成创建的对象，无需使用工厂模式。如果使用工厂模式，就需要引入一个工厂类，会增加系统的复杂度
* 实现案列：
    1. 描述：创建一个Shape接口和实现Shape接口的实体类，下一步就是定义工厂类ShapeFactory。FactoryPatternDemo类使用ShapeFactory来获取Shape对象。它将像ShapeFactory传递信息，以便于获取到所需要对象的类型
```
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
```
### 抽象工作模式

### 单例模式
### 建造者模式
### 原型模式
## 结构型模式
### 适配器模式
### 桥接模式
### 过滤器模式
### 组合模式
### 装饰器模式
### 外观模式
### 享元模式
### 代理模式
## 行为型模式
### 责任链模式
### 命令式模式
### 解释器模式
### 迭代器模式
### 中介者模式
### 备忘录模式
### 观察者模式
### 状态模式
### 空对象模式
### 策略模式
### 模板模式
### 访问者模式