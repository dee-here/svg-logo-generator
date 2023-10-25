// Base class to have all properties and methods to create different shapes
class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    circle() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
<text x="150" y="105" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-size="40">${this.text}</text>
</svg>`;
    }
    triangle() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<polygon points="150,20 250,180 50,180" fill="${this.shapeColor}" />
<text x="150" y="124" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-size="30">${this.text}</text>
</svg>`;
    }
    square() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
<text x="150" y="130" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-size="60">${this.text}</text>
</svg>`;
    }
}

//class circle that extends shape and creates it shape
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    createCircle() {
        return super.circle();
    }
}

//class Traingle that extends shape and creates it shape
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    createTriangle() {
        return super.triangle();
    }
}

//class Square that extends shape and creates it shape
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    createSquare() {
        return super.square();
    }
}

function createShape(data) {
    //check user input and instantiate class based on user slected shape!
    if(data.shape === 'Circle') {
        const circle = new Circle(data.shapeColor, data.text, data.textColor);
        return circle.createCircle();
    }

    if(data.shape === 'Triangle') {
        const triangle = new Triangle(data.shapeColor, data.text, data.textColor);
        return triangle.createTriangle();
    }

    if(data.shape === 'Square') {
        const square = new Square(data.shapeColor, data.text, data.textColor);
        return square.createSquare();
    }
}

module.exports = {
    createShape,
    Shape,
    Circle,
    Triangle,
    Square
 };