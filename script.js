// ===============================
// Hero Heading Animation
// ===============================

const heading = document.querySelector("h1");

heading.animate(
    [
        {
            opacity: 0,
            transform: "translateY(30px)"
        },
        {
            opacity: 1,
            transform: "translateY(0)"
        }
    ],
    {
        duration: 1500,
        easing: "ease-out"
    }
);

// ===============================
// Read Wishes Button
// ===============================

const button = document.querySelector(".btn");
if(button){

button.addEventListener("click", () => {


});
}

// ===============================
// Gift Button
// ===============================

const giftButton = document.querySelector(".gift-btn");

giftButton.addEventListener("click", () => {

    alert("🎉 Surprise! You are the best gift life has ever given. ❤️");
});
function flipCard(card){
    card.classList.toggle("flip");
}
function openLetter(){

document.getElementById("letter").style.display="block";

}
function popBalloon(balloon){

    const rect = balloon.getBoundingClientRect();

    // Hide clicked balloon
    balloon.remove();

    // Play music
    document.getElementById("bgMusic").play();

    // Create flowers
    for(let i=0;i<30;i++){

        const flower=document.createElement("div");

        flower.classList.add("flower");
        flower.innerHTML=Math.random()>0.5 ? "🌸" : "🌺";

        flower.style.left=(rect.left+rect.width/2)+"px";
        flower.style.top=(rect.top+rect.height/2)+"px";

        flower.style.setProperty("--x",(Math.random()*400-200)+"px");
        flower.style.setProperty("--y",(Math.random()*400-200)+"px");

        document.body.appendChild(flower);

        setTimeout(()=>{
            flower.remove();
        },1000);
    }
}

        
window.addEventListener("load", () => {

    const music = document.getElementById("bgMusic");

    if(music){
        music.volume = 0.5;   // Volume 50%

        music.play().catch(() => {
            console.log("Autoplay blocked by browser.");
        });
    }

});
function checkPassword(){

    let password = document.getElementById("password").value;

    let correctPassword = "13/08/2007";  // yahan apna password likho


    if(password === correctPassword){

        document.querySelector(".message").innerHTML =
        "✨ Unlocking your surprise... ❤️";


        setTimeout(()=>{

            window.location.href = "home.html";

        },1000);


    }
    else{

        document.querySelector(".message").innerHTML =
        "❌ Wrong Password! Try again ❤️";

    }

}