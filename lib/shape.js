// Create a parent class with attrib that each shape will inherit
class Shape {
    constructor(){
        this.color = ""; //property on this class
    }
    setColor(selectedColor){
        this.color = selectedColor; //taking input to feed into constructor, dynamically feed
    }
}

// Create a circle, inheritting the parent class of shape while also being unique
class Circle extends Shape  {
    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`
    }
}

class Ellipse extends Shape  {
    render() {
        return `<ellipse cx="50" cy="45" rx="50" ry="25" fill="${this.color}" />`
    }
}

// Create a triangle
class Triangle extends Shape {
    render() {
        return `<polygon points="50,10 10,90 90,90" style="fill:${this.color}" />`
    }
}

// Create a rectangle
class Rectangle extends Shape {
    render() {
        return `<rect x="0" y="25" width="150" height="50" style="fill:${this.color}" />`
    }
}

// export all parent classes. No need to export "Shape" because Circle, Rectangle, and Triangle inherrits the Shape class 
module.exports = {Circle, Ellipse, Rectangle, Triangle}