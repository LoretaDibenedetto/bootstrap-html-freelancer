
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
    
    let inputHours = document.getElementById("hours").value;
    if(isNaN(inputHours) || inputHours == ""){
       document.getElementById("hourvalidate").innerHTML= "Insert a Number";
       document.getElementById("hourvalidate").classList.add("text-danger");
       inputHours.classList.add('border-danger');
    }

    // Qui sono sicuro che la mia stringa conterrà un numero
    let numhours = parseFloat(inputHours);
     
    let PriceForHours =  Price * numhours;


   // document.getElementById("finalPrice").innerHTML =`${ PriceForHours.toFixed(2)}€`;

    //codice sconto
    let discountCodeUser = document.getElementById("discountRequested").value;
    let isDiscountCodeAvailable = disocuntCodes.includes(discountCodeUser);

    let validateCoupon = document.getElementById("result-applied-discount");
    
    let validateInput = document.getElementById("discountRequested");


    if(isDiscountCodeAvailable){

        PriceForHours = PriceForHours - PriceForHours * 0.25;

        discountCodes = removeElementFromArray(disocuntCodes, discountCodeUser);

        console.log(discountCodes);
       
       validateCoupon.innerHTML = 'Discount Code has been applied';
       validateCoupon.classList.add('text-success');
       validateInput.classList.add('border-success');

    } else if (discountCodeUser != "") {

       validateCoupon.innerHTML = "Discount Code isn't valid";
       validateCoupon.classList.add('text-danger');
       validateInput.classList.add('border-danger');
        
    } else {
       validateCoupon.innerHTML = "";
    };

   document.getElementById("finalPrice").innerHTML =`${ PriceForHours.toFixed(2)}€`;
   // document.getElementById("finalPrice").innerHTML =`${ Price.toFixed(2)}€ h`;

};







// ------------------- FUNZIONI GENERICHE --------------------
function removeElementFromArray(array, elementToRemove){

    const index = array.indexOf(elementToRemove);

    array.splice(index, 1);

    return array;

};

