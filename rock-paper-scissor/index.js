const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

// console.log(gameContainer,userResult,cpuResult,result,optionImages); 
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");
        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait..."; 
        // console.log("naman");

        optionImages.forEach((image2, index2) => {
           index !== index2 && image2.classList.remove("active");
            // console.log(index, index2);
            // console.log(e.target);
        });
         gameContainer.classList.add("start");
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc
            // console.log(imageSrc);
        let rendomNumber = Math.floor(Math.random() * 3);
        // console.log(rendomNumber);
        let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
        // console.log(cpuImages);
        cpuResult.src = cpuImages[rendomNumber];

        let cpuValue = ["R","P","S"][rendomNumber];
        let userValue = ["R","P","S"][index];
        // console.log(cpuValue,userValue);

        let outcomes = {
            RR: "Draw",
            RP: "Cpu",
            RS: "User",
            PP: "Draw",
            PR: "User",
            PS: "Cpu",
            SS: "Draw",
            SR: "Cpu",
            SP: "User",
        };
        let outComeValue =outcomes[userValue + cpuValue];
        result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`
        // console.log(outComeValue);
        },2500)
    });
});
