/*
// objective :get base,height of a triangle.calculate the 
area by using the provided formula.and then display the area
*step 1:get base value of the triangle
*step-2:added an id in the input field
*step-3 :use getelementbyId to access the input field
*step-4:get value from the input field.(value is string now)
*step -5:convert the value to a number.use parsefloat
*/
function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseinput=document.getElementById('triangle-base');
    const triangleBasetext=triangleBaseinput.value;
    const base=parseFloat(triangleBasetext)
    console.log(base);


    // get triagle height value
    const triagleHeightInput=document.getElementById('triangle-height');
    const triagleHeighttext=triagleHeightInput.value;
    const height=parseFloat(triagleHeighttext)
    console.log(height);
// calculate triange area
    const area=0.5*base*height;
    console.log('area of the triangle is:',area);

    // display triangle area
    const triagleAreaSpan=document.getElementById('triangle-area');
    triagleAreaSpan.innerText=area;
}