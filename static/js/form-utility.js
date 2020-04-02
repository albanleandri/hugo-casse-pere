/*This utlity clears the form fields. It allows for not reloading a page after form submission */

function cleanForm(){    
    var allInputs = $( ":input" );
    for (let i = 0; i < allInputs.length; i++) { 
      allInputs[i].value = ""; 
    }
}   