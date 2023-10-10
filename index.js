let tabla= document.getElementById("t1");
let dagaa= document.getElementById("t2");
let tasha= document.getElementById("tasha");
let basuri= document.getElementById("basuri");


tabla.addEventListener("click",(e)=>{
    e.preventDefault()
    // console.log(tabla)
    let audio = new Audio("t1.wav")
    audio.play()
})
dagaa.addEventListener("click",(e)=>{
    e.preventDefault()
    // console.log(dagaa)

    let audio = new Audio("t2.wav")
    audio.play()
})
tasha.addEventListener("click",(e)=>{
    e.preventDefault()
    let audio = new Audio("tasha.wav")
    audio.play()
})
basuri.addEventListener("click",(e)=>{
    e.preventDefault()
    let audio = new Audio("basuri.wav")
    audio.play()
})