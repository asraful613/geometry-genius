function calculateRhombusArea(){
    // get d1 of the Rhombus
    const rhombusLength=document.getElementById('rhombus-length');
    const rhombusText=rhombusLength.value;
    const length=parseFloat(rhombusText);
    console.log(length);

    // get d2 of the rhombus
    const rhombusWidht=document.getElementById('rhombus-widht');
    const widhtText=rhombusWidht.value;
    const widht=parseFloat(widhtText);
    console.log(widht);

    // calculate d1 and d2
    const area=0.5*length*widht;
    console.log('area of the rhombus:',area);

    // display rhombus area
    const rhombusAreaSpan=document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText=area;
}