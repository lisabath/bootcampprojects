function changeMe(){
    const pic1 = document.getElementById ("pic1")
    const pic2 = document.getElementById ("pic2")

   /**if pic1 is visible then hide it and put in pic 2 */
    if (pic1.style.visibility === "visible") { 
        console.log ("visibility")
        pic1.style.visibility = "hidden"
        pic2.style.visibility = "visible"
    }
    /** if above not true, do this one*/
    else if (pic2.style.visibility==="visible") {
        pic2.style.visibility = "hidden"
        pic1.style.visibility = "visible" }
    }
    