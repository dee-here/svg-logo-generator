class Shape {
    constructor(shape, shapeColor, text, textColor) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    circle() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <circle cx="100" cy="100" r="90" fill="${this.shapeColor}" />
            <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-size="60">${this.text}</text>
        </svg>`;
    }
    triangle() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <polygon points="100,10 10,190 190,190" fill="${this.shapeColor}" />
            <text x="50%" y="60%" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-size="30">${this.text}</text>
        </svg>`;
    }
    square() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <rect x="10" y="10" width="180" height="180" fill="${this.shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-size="60">${this.text}</text>
        </svg>`;
    }
}

function createShape(data) {
    //call this.shpae.circle/trincgle.. based on user input!
    console.log('createShape with ', data);
    //check user input and call the corect shape method fbased on user slected shape!
    const testShape = new Shape(data.shape, data.shapeColor, data.text, data.textColor);
    if(testShape.shape === 'Circle') {
        console.log("shape is: ", data.shape);
        return testShape.circle();
    }
    if(testShape.shape === 'Triangle') {
        console.log("shape is: ", data.shape);
        return testShape.triangle();
    }
    if(testShape.shape === 'Square') {
        console.log("shape is: ", data.shape);
        return testShape.square();
    }
}

module.exports = {
    Shape,
    createShape
 };