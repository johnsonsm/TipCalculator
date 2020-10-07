    var tipPercentage = 0.15;
    var tipPercentageB = 0.20;
    var tipPercentageC = 0.25;
    
    //the math for 15%
    const calculateTip = () => {
        const bill = document.getElementById("bill").value;
        const tipAmount = bill * tipPercentage; 
       console.log("Bill:", bill);
       console.log("Tip Percentage:", tipPercentage);
       console.log(tipAmount);
       document.getElementById("demo").innerHTML = ("You Should Tip $" +(tipAmount));
      // window.alert("You should tip $"+ (tipAmount));
       // TODO: Figure out how to print the tipAmount appear in HTML
    }

     //the math for 20%
     const calculateTipB = () => {
        const bill = document.getElementById("bill").value;
        const tipAmount = bill * tipPercentageB; 
       console.log("Bill:", bill);
       console.log("Tip Percentage:", tipPercentageB);
       console.log(tipAmount);
       document.getElementById("demo").innerHTML = ("You Should Tip $" +(tipAmount));
       //window.alert("You should tip $"+ (tipAmount));
       // TODO: Figure out how to print the tipAmount appear in HTML
    }

    //the math for 25%
    const calculateTipC = () => {
        const bill = document.getElementById("bill").value;
        const tipAmount = bill * tipPercentageC; 
       console.log("Bill:", bill);
       console.log("Tip Percentage:", tipPercentageC);
       console.log(tipAmount);
       document.getElementById("demo").innerHTML = ("You Should Tip $" +(tipAmount));
      // window.alert("You should tip $"+ (tipAmount));
       // TODO: Figure out how to print the tipAmount appear in HTML
    }

    /*
    TODO: Figure out how to use this function in the html to update the tip variable
    */
    const changeTip = (newPercentage) => {
        tipPercentage = newPercentage;
    }