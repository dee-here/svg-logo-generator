const {createShape, Shape, Circle, Triangle, Square } = require('../lib/shape');


//mock svgs created for shapeColor = red, text = txt,  textColor = black
const mockCircleSvg =`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<circle cx="150" cy="100" r="80" fill="red" />
<text x="150" y="105" text-anchor="middle" dominant-baseline="middle" fill="black" font-size="40">txt</text>
</svg>`;

const mockTriangleSvg =`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<polygon points="150,20 250,180 50,180" fill="red" />
<text x="150" y="124" text-anchor="middle" dominant-baseline="middle" fill="black" font-size="30">txt</text>
</svg>`;

const mockSquareSvg =`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<rect x="75" y="25" width="150" height="150" fill="red" />
<text x="150" y="110" text-anchor="middle" dominant-baseline="middle" fill="black" font-size="35">txt</text>
</svg>`;

describe('Shape Class', () => {
    const shape = new Shape('red', 'txt', 'black');
    describe('Constructor', () => {
        it('should create an instance of Shape class', () => {
            expect(shape instanceof Shape).toBeTruthy();
        });
        it('should set right Shape color', () => {
            expect(shape.shapeColor).toEqual('red');
        });
        it('should set right text', () => {
            expect(shape.text).toEqual('txt');
        });
        it('should set right text color', () => {
            expect(shape.textColor).toEqual('black');
        })
    });
    describe('Circle()', () => {
        it('should return Circle svg markup', () => {
            expect(shape.circle()).toEqual(mockCircleSvg);
        });
    });
    describe('Triangle()', () => {
        it('should return Triangle svg markup', () => {
            expect(shape.triangle()).toEqual(mockTriangleSvg);
        });
    });
    describe('Square()', () => {
        it('should return Square svg markup', () => {
            expect(shape.square()).toEqual(mockSquareSvg);
        });;
    });
});

describe('createShape() when user selects Circle shape', () => {
    describe('should create a Circle svg', () => {
        const data = {shape: 'Circle', shapeColor: 'red', text: 'txt', textColor: 'black' };
        const createdCircle = createShape(data);
        it('should match the mock circle svg markup', () => {
            expect(createdCircle).toEqual(mockCircleSvg);
        });
    });
});

describe('createShape() when user selects Triangle shape', () => {
    describe('should create a Triangle svg', () => {
        const data = {shape: 'Triangle', shapeColor: 'red', text: 'txt', textColor: 'black' };
        const createdTriangle = createShape(data);
        it('should match the mock triangle svg markup', () => {
            expect(createdTriangle).toEqual(mockTriangleSvg);
        });
    });
});

describe('createShape() when user slects Square shape', () => {
    describe('should create a Square svg', () => {
        const data = {shape: 'Square', shapeColor: 'red', text: 'txt', textColor: 'black' };
        const createdSquare = createShape(data);
        it('should match the mock square markup', () => {
            expect(createdSquare).toEqual(mockSquareSvg);
        });
    });
});

describe("Circle Class", () => {
    const circle = new Circle('red', 'txt', 'black');
    it('constructor should create an instance of Circle class', () => {
        expect(circle instanceof Circle).toBeTruthy();
    });
});
describe("Triangle Class", () => {
    const triangle = new Triangle('red', 'txt', 'black');
    it('constructor should create an instance of Triangle class', () => {
        expect(triangle instanceof Triangle).toBeTruthy();
    });
});
describe("Square Class", () => {
    const square = new Square('red', 'txt', 'black');
    it('constructor should create an instance of Square class', () => {
        expect(square instanceof Square).toBeTruthy();
    });
});