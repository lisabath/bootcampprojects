let submitButton =  document.getElementById("submitButton")



submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    let selectedRadioButton = document.querySelector("input[name='btn']:checked").value
   
    console.log(selectedRadioButton)   


let outerTwo = document.createElement("div")
let newImage = document.createElement("img")
let ratingText = document.createElement("h4")
let thankText = document.createElement("h2")
let paraText = document.createElement("h4")

newImage.src = "./images/illustration-thank-you.svg";
newImage.className="midImage"
ratingText = "You selected" + selectedRadioButton +  'out of 5';
ratingText.className = "ratingText"
thankText ="Thank you!";
thankText.className = "ThankText"
paraText = 
"We appreciate you taking the time to give rating.If you ever need more support, don't hestitate to get in touch";
paraText.className = "paraText"

outerTwo.className = "OuterCard"
outerTwo.append(newImage)
outerTwo.append(ratingText)
outerTwo.append(thankText)
outerTwo.append(paraText)

let outerCard = document.getElementById("outerCard")
outerCard.style.display = "none"

let result = document.getElementById("result")
result.append(outerTwo)

});




