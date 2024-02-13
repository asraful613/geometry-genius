function calculateRectangleArea(){
    // get length of the rectangle
    const rectangleLength=document.getElementById('rectangle-length');
    const lengthText=rectangleLength.value;
    const length=parseFloat(lengthText);
    console.log(length);

    // get width of the rectangle
    const rectangleWidht=document.getElementById('rectangle-width');
    const widthText=rectangleWidht.value;
    const width=parseFloat(widthText)
    console.log(width);

    // calculate rectangle area
    const area=length*width;
    console.log('area of the rectangle:',area);
    
    // display rectangle area
    const rectangleAreaSpan=document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText=area;

}