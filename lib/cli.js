const {Circle, Ellipse, Rectangle, Triangle} = require('./shape.js');
const SVG = require('./svg.js');

const inquire = require('inquirer');
const fs = require('fs');

class cli {
    init() {
        inquire.prompt([
            {
                type: "list",
                name: "shape",
                choices: ["Circle", "Ellipse", "Triangle", "Rectangle"],
                message: "What shape do you want your logo to be?",
            },
            {
                type: "input",
                name: "shapeColor",
                message: "What color background do you want for your shape?"
            },
            {
                message: "What text for shape?",
                type: "input",
                name: "typeShape",
            },
            {
                message: "What color text?",
                type: "input",
                name: "fontColor",
            }
        
        ]).then(answer => {
            var choosenShape;
            if (answer.shape === "Circle") {
                choosenShape = new Circle();
            }
            else if (answer.shape === "Ellipse") {
                choosenShape = new Ellipse();
            }
            else if (answer.shape === "Rectangle") {
                choosenShape = new Rectangle();
            } 
            else {
                choosenShape = new Triangle(); //Calling a new instance
            }
            choosenShape.setColor(answer.shapeColor)
            const newLogo = new SVG()
            newLogo.setShape(choosenShape)
            newLogo.setText(answer.typeShape, answer.fontColor)
            return fs.writeFileSync("./logo/logo.svg", newLogo.render())
        })
    }
}

module.exports = cli;