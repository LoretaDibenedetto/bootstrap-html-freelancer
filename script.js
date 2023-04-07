
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

    document.getElementById("finalPrice").innerHTML = Price.toFixed(2);



}