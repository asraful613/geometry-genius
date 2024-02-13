// function calculateEllipseArea(){
//     const majorRadius=getInputValueById('ellipse-major-radius');
//     const minorRadius=getInputValueById('ellipse-minor-radius');
//     const area=3.14*majorRadius*minorRadius;
//     setInnerTextById('ellipse-area',area)
// }
function calculateEllipseArea(){
    // get ellipse major
    const ellipseMajor=document.getElementById('ellipse-major-radius')
    const majorText=ellipseMajor.value;
    const major=parseFloat(majorText)
    console.log(major);
    
    // get ellipse minor
    const ellipseMinor=document.getElementById('ellipse-minor-radius');
    const minorText=ellipseMinor.value;
    const minor=parseFloat(minorText)
    console.log(minor);

    // calculate major and minor
    const area=3.14*major*minor;
    console.log(area);

    // display ellipse area
    const ellipseDisplay=document.getElementById('ellipse-area');
    console.log(ellipseDisplay);
    ellipseDisplay.innerText=area;
}