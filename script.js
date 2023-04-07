
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

    let validateCoupon = document.getElementById("result-applied-discount");
    let validateInput = document.getElementById("discountRequested");
    if(isDiscountCodeAvailable){

        Price = Price - Price * 0.25;

        discountCodes = removeElementFromArray(disocuntCodes, discountCodeUser);

        console.log(discountCodes);
       
       validateCoupon.innerHTML = 'il codice sconto è stato applicato correttamente';
       validateCoupon.classList.add('text-success');
       validateInput.classList.add('border-success');

    } else if (discountCodeUser != "") {

       validateCoupon.innerHTML = "Il codice sconto non è valido!";
       validateCoupon.classList.add('text-danger');
       validateInput.classList.add('border-danger');
        
    } else {
       validateCoupon.innerHTML = "";
    };


    document.getElementById("finalPrice").innerHTML =`${ Price.toFixed(2)}€ h`;

};







// ------------------- FUNZIONI GENERICHE --------------------
function removeElementFromArray(array, elementToRemove){

    const index = array.indexOf(elementToRemove);

    array.splice(index, 1);

    return array;

};