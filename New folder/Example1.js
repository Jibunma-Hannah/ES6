class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    calculateArea(){
   return this.width  * this.height;   
    }
}
let rectangle = new Rectangle (10,5);
let area = rectangle.calculateArea();
console.log("The area of the rectangle is : " + area);