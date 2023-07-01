// SVG text tag
class SVG {
    constructor() {
        this.shape = "";
        this.text =  "";
    }
    setShape(selectedShape){
        this.shape = selectedShape.render()
    }
    setText(promptedText, selectedColor){
        this.text = `<text x="25" y="50" fill="${selectedColor}">${promptedText}</text>`
    }
    render() {
        return `<svg width="300" height="200">${this.shape}${this.text} </svg>`
    }
}

module.exports = SVG