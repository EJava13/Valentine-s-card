document.addEventListener("DOMContentLoaded", () => {
    
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    const nextButton = document.getElementById("next-btn");
    const revealButton = document.getElementById("reveal-btn");


    
    const mainPage = document.querySelector(".center-container");
    const yayPage = document.getElementById("yay-page");
    const loveLetter = document.getElementById("love-letter");
    const letterContainer = document.getElementById("love-letter-content");
    const letterText = document.getElementById("letter-content");


    
    loveLetter.style.display = "none";


    yesButton.addEventListener("click", () => {
        mainPage.style.display = "none";
        yayPage.style.display = "block"; 
    });


    
    let noClickCount = 0;


   
    const funnyMessages = [
        "How were you even able to click on it?? 💔",
        "NO????!",
        "Just fell to my knees"
    ];


 
    noButton.addEventListener("click", () => {
        if (noClickCount < funnyMessages.length) {
            document.body.innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <h1>${funnyMessages[noClickCount]}</h1>
                    <img src="https://media.tenor.com/meANmw3hopUAAAAM/long-tears.gif" alt="Sad GIF" width="300">
                    <button id="go-back-btn" style="padding: 15px 30px; font-size: 1.5em; background-color: red; color: white; border: none; border-radius: 10px; cursor: pointer;">Go Back ❤️</button>
                </div>
            `;
            noClickCount++;


           
            document.getElementById("go-back-btn").addEventListener("click", () => {
                location.reload();
            });
        }
    });


   
    noButton.addEventListener("mouseover", () => {
        let randomX = Math.random() * (window.innerWidth - 100); 
        let randomY = Math.random() * (window.innerHeight - 50);


        noButton.style.position = "absolute"; 
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });


    
    nextButton.addEventListener("click", () => {
        yayPage.style.display = "none"; 
        loveLetter.style.display = "block"; 
    });


   
    revealButton.addEventListener("click", () => {
        if (letterText) {
            
            letterContainer.style.padding = "30px";
            letterContainer.style.minHeight = "400px"; 


            
            letterText.innerHTML = `
                My Dearest,
                <br><br>
                I have never considered myself a romantic, yet here I am, trying my very best and through our specialization.
                There are so many language in our course. Python, Java, C++, C# etc.. but you taught me a language far more beautiful and will be forever
                written in our history, laughter, and our understanding.
                <br><br>
                As H. Jackson Brown Jr. once wrote, <br>
                <em>"Love is when the other person's happiness is more important than your own."</em>
                <br><br>
                Jackson Brown is true, because what's happiness if I can't see you happy? I can't feel true happiness if my other half is empty, and neglected.
                But don't say that I don't care about my own happiness, I do care about it. And I'll put my very best just to make you happy, love. Your happiness is my light to this dark chaotic world. Your smile brightens up my day.
                <br><br>
                Thank you for being my Valentine, for 3rd time. ❤️
                <br><br>
                With all my heart, 💖<br><strong>Ej</strong>
            `;


            
            revealButton.style.display = "none";
        } else {
            console.error("Error: Letter content not found!");
        }
    });
});
