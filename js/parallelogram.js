function calculateParallelogramArea(){
//    get length of the parallelogram
const parallelogramLength=document.getElementById('parallelogram-length');
const parallelogramText=parallelogramLength.value;
const length=parseFloat(parallelogramText);
console.log(length);

// get width of the parallelogram
const parallelogramWidth=document.getElementById('parallelogram-width');
const widthText=parallelogramWidth.value;
const width=parseFloat(widthText)
console.log(width);

// calculate paralleo area
const area=length*width;
console.log('area of the parallelogram:',area);

// display parallelogram area
const parallelogramSpan=document.getElementById('parallelogram-area');
parallelogramSpan.innerText=area;
}