let submitButton =  document.getElementById("submitButton")



submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    let selectedRadioButton = document.querySelector("input[name='btn']:checked").value
   
    console.log(selectedRadioButton)   


let outerTwo = document.createElement("div")
let newImage = document.createElement("img")
let ratingText = document.createElement("div")
let thankText = document.createElement("div")
let paraText = document.createElement("div")

newImage.src = "./images/illustration-thank-you.svg";
newImage.className="midImage";

ratingText.innerHTML = "You selected " + selectedRadioButton +  ' out of 5 ';
ratingText.className="ratingText";

thankText.innerHTML ="Thank you!";
thankText.className = "thankText";

paraText.innerHTML = 
"We appreciate you taking the time to give rating.If you ever need more support, don't hestitate to get in touch";
paraText.className = "paraText";

outerTwo.className = "outerCard"
outerTwo.append(newImage)
outerTwo.append(ratingText)
outerTwo.append(thankText)
outerTwo.append(paraText)

let outerCard = document.getElementById("outerCard")
outerCard.style.display = "none"

let result = document.getElementById("result")
result.append(outerTwo)

});




