function recTangle(long, wide) {
    this.long = long;
    this.wide = wide;
    this.getArea = function () {
        return this.long * this.wide;
    }
    this.getPerimeter = function () {
        return this.long + this.wide;
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomNumber();
    let green = getRandomNumber();
    let blue = getRandomNumber();
    return "rgb(" + red + "," + green + "," + blue + ")";
}

function createRectangle() {
    let rec = document.getElementById("myCanvas").getContext("2d");
    let long = Math.floor(Math.random() * 100);
    let wide = Math.floor(Math.random() * 50);
    let rectangle = new recTangle(long, wide);
    let area = rectangle.getArea();
    let perimeter = rectangle.getPerimeter();
    let color = getRandomColor();
    // rec.beginPath();
    rec.fillStyle = color;
    rec.fillRect(rectangle.long, rectangle.wide, rectangle.long, rectangle.wide);

    document.getElementById('area').innerHTML = 'Area:' + area;
    document.getElementById('perimeter').innerHTML = 'Perimeter:' + perimeter;
}

createRectangle();