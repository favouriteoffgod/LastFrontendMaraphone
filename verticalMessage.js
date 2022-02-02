function showVerticalMessage(str) {
   
    const maxlength = (str.length > 10);
    const firstSymbol = (str.charAt(0) === "м");
    
    if (maxlength) {
        str = str.slice(0, 10) + "-";
    }
    
    if (firstSymbol) {
        str = str[0].toUpperCase() + str.slice(1);
    }
        
    let vertStr = "";

    for (let char of str) {
        vertStr += char + "\n";
    }
    console.log(vertStr);
}

showVerticalMessage("марафон");
showVerticalMessage("марафонищееее");
showVerticalMessage("апельсин");