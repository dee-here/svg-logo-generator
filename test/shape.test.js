const {createShape, Shape, Circle, Triangle, Square } = require('../lib/shape');

describe('Shape', () => {
    const shape = new Shape('red', 'TXT', 'white');
    describe('Constructor', () => {
        it('should create an instance of Shape class', () => {
            expect(shape instanceof Shape).toBeTruthy();
        });
        it('should set right Shape color', () => {
            expect(shape.shapeColor).toEqual('red');
        });
        it('should set right text', () => {
            expect(shape.text).toEqual('TXT');
        });
        it('should set right text color', () => {
            expect(shape.textColor).toEqual('white');
        })
    });
    describe('Circle()', () => {
        it('should return an svg that contains a circle tag', () => {
            expect(shape.circle()).toContain('circle');
        });
        it('should return an svg that contains a text tag', () => {
            expect(shape.circle()).toContain('text');
        });
    });
    describe('Triangle()', () => {
        it('should return an svg that contains a polygon tag', () => {
            expect(shape.triangle()).toContain('polygon');
        });
        it('should return an svg that contains a text tag', () => {
            expect(shape.triangle()).toContain('text');
        });
    });
    describe('Square()', () => {
        it('should return an svg that contains a rect tag', () => {
            expect(shape.square()).toContain('rect');
        });
        it('should return an svg that contains a text tag', () => {
            expect(shape.square()).toContain('text');
        });
    });
});

describe('createShape() for circle', () => {
    describe('should create a Circle class if user selects Circle ', () => {
        const circle = new Circle('red', 'txt', 'black');
        it('should create an instance of Circle class', () => {
            expect(circle instanceof Circle).toBeTruthy();
        });
        const data = {shape: 'Circle'};
        const createdCircle = createShape(data);
        it('should return a circle in the svg', () => {
            expect(createdCircle).toContain('circle');
        });
    });
});

describe('createShape() for Triangle', () => {
    describe('should create a Triangle class if user selects triangle ', () => {
        const triangle = new Triangle('red', 'txt', 'black');
        it('should create an instance of Triangle class', () => {
            expect(triangle instanceof Triangle).toBeTruthy();
        });
        const data = {shape: 'Triangle'};
        const createdTriangle = createShape(data);
        it('should return a ploygon in the svg', () => {
            expect(createdTriangle).toContain('polygon');
        });
    });
});

describe('createShape() for Square', () => {
    describe('should create a Square class if user selects Square ', () => {
        const square = new Square('red', 'txt', 'black');
        it('should create an instance of Square class', () => {
            expect(square instanceof Square).toBeTruthy();
        });
        const data = {shape: 'Square'};
        const createdSquare = createShape(data);
        it('should return a rect in the svg', () => {
            expect(createdSquare).toContain('rect');
        });
    });
});