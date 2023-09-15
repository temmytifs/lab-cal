let displayButton =  document.getElementById("displayButton");
    
    displayButton.addEventListener("click", cal);

    function cal() {
        let age = parseInt(document.getElementById("age").value);
        let agedisplay = document.getElementById("agedisplay");
        let yearRemaning = 90 - age;
        let daysRemaning = yearRemaning * 365;
        let weeksRemaning = yearRemaning * 52;
        let monthsRemaning = yearRemaning * 12;
        if (yearRemaning < 0 ){
            alert("invalid input");
        } else{
            agedisplay.value =  "you have " + daysRemaning +  " days," + weeksRemaning + " weeks and " + monthsRemaning + " months remaining"   ;
        }

    }