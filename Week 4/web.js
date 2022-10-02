

function changeWord () {
    console.log("i link this page")
    /**creating a new variable to get the item we want to change */
let word=document.getElementById("word")
console.log(word)
if(word.innerText=="Pretty"){
/**changing word to new text */
word.innerText="Warm"
} else if(word.innerText=="Warm") {
    word.innerText="Pretty"
}

}
