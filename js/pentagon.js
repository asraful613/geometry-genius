let area=0;
function calculatePentagonArea(){
    const perimeter=getInputValueById('pentagon-perimeter');
    const apothem=getInputValueById('pentagon-apothem');
     area=0.5*perimeter*apothem;
    setInnerTextById('pentagon-area',area)
}

function getInputValueById(inputfieldId){
    const inputfield=document.getElementById(inputfieldId)
    const inputValueText=inputfield.value ;
    const value=parseFloat(inputValueText);
    return value;
}
function setInnerTextById(elementId){
    const element=document.getElementById(elementId)
    element.innerText=area;
}

