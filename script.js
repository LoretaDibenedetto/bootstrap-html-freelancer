
let disocuntCodes = ["YHDNU32", "JANJC63" , "PWKCN25", "POCIE24", "SJDPO96" ];


function validateForm(event){
   
    event.preventDefault(event);

    console.log("FUNZIONAAAA!!!");

    

    let selectedTypeOfWork = document.getElementById("work-type").value;

    console.log(selectedTypeOfWork);

    let Price = 0;

    switch(selectedTypeOfWork){
        case "backend":
            Price += 20.50;
            break;
        case "frontend":
            Price += 15.30;
            break; 
        case "analize project":
            
            Price += 33.60;
            break;
        
    };

    document.getElementById("finalPrice").innerHTML =`${ Price.toFixed(2)}€`;

    //codice sconto
    let discountCodeUser = document.getElementById("discountRequested").value;
    let isDiscountCodeAvailable = disocuntCodes.includes(discountCodeUser);

    
    if(isDiscountCodeAvailable){
        Price = Price - Price * 0.25;
        discountCodes = removeElementFromArray(disocuntCodes, discountCodeUser);

        console.log(discountCodes);

        document.getElementById("result-applied-discount").innerHTML = "Il codice sconto è stato corettamente applicato!";
    } else if (discountCodeUser != "") {
        document.getElementById("result-applied-discount").innerHTML = "Il codice sconto non è valido!";
    } else {
        document.getElementById("result-applied-discount").innerHTML = "";
    };


    document.getElementById("finalPrice").innerHTML =`${ Price.toFixed(2)}€ h`;

};







// ------------------- FUNZIONI GENERICHE --------------------
function removeElementFromArray(array, elementToRemove){

    const index = array.indexOf(elementToRemove);

    array.splice(index, 1);

    return array;

};