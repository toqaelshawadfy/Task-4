// Darkmode//
let darkmode =localStorage.getItem('darkmode')
const themeswitch = document.getElementById('theme-switch')
// enableDarkMode//
 const enabledarkmode = () =>{
   document.body.classList.add('darkmode')
   localStorage.setItem('darkmode' ,'active')
 }
//  disabledarkmode//
const disabledarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode' ,null)
}
if(darkmode === "active") enabledarkmode()
// click darkmode btn//
themeswitch.addEventListener("click" ,() => {
    let darkmode =localStorage.getItem('darkmode')
    darkmode !== "active"? enabledarkmode():disabledarkmode()
})







// Show or hide the "Back to Top" button based on scroll position
window.onscroll = function(){
    const topbtn = document.getElementById("Back-to-top");
    // If the user scrolls down 200px from the top, show the button
    if(document.body.scrollTop > 100|| document.documentElement.scrollTop > 100){

        topbtn.style.display = "block"
    }else{
        topbtn.style.display = "none"
    }
}
// Scroll to the top of the page when the "Back to Top" button is clicked
document.getElementById("Back-to-top").onclick=function(){
 window.scrollTo({top:0 , behavior:"smooth"})
}
