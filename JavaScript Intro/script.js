alert('Welcome in my first webpage of JS.')
      
      console.log("Now! Code is running...")
      console.log("What's code, Awesome")
      
      console.log("Looking like a wow")
      
      var Istrue = confirm("Please sure that Mobile No. must be correct!")
      var a = prompt("Enter your mobile Number")
      if(a.length === 10 && Istrue && !/[a-zA-Z]/.test(mobile)){
        alert("Right Mobile No.") 
        console.log("You are enter in this webpage")
        console.log("Your Mobile No. is " + a)
      }
      
      else{
        alert("Wrong Mobile No.\nTry Again.")
        alert("Next time write the correct Mobile No.")
        console.log("Wrong Mobile No.")
      }
     // document.body.style.backgroundColor = "yellowgreen"