function calculate(){
    try {
        var display = document.getElementsByName("display")[0];
        var inputValue = display.value.trim();
        
        if (inputValue === ""){
            display.value = "";
            return;
        }

        display.value = eval(inputValue.replace(/[+\-*/%]$/, ""));

    } catch(error){
        display.value = "Error";
    }
}


