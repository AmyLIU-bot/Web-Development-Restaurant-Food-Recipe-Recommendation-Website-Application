const foodData = {
    "BanhMi.webp": { name: "BanhMi", origin: "Vietnam" },
    "BBQRibs.jpg": { name: "BBQRibs", origin: "United States" },
    "ChickenTikkaMasala.jpg": { name: "ChickenTikkaMasala", origin: "India" },
    "Croque-Monsieur.jpg": { name: "Croque-Monsieur", origin: "France" },
    "FishAndChip.jpg": { name: "FishAndChip", origin: "United Kingdom" },
    "GreenCurry.jpg": { name: "GreenCurry", origin: "Thailand" },
    "Gyros.webp": { name: "Gyros", origin: "Greece" },
    "Lamington.jpg": { name: "Lamington", origin: "Australia" },
    "LechonKawali.jpg": { name: "LechonKawali", origin: "Philippines" },
    "MapoTofu.jpg": { name: "MapoTofu", origin: "China" },
    "MongolianBarbecue.jpg": { name: "MongolianBarbecue", origin: "Mongolia" },
    "NasiGoreng.jpg": { name: "NasiGoreng", origin: "Indonesia" },
    "PasteldeNata.jpeg": { name: "PasteldeNata", origin: "Portugal" },
    "Pizza.jpeg": { name: "Pizza", origin: "Italy" },
    "Ramen.jpg": { name: "Ramen", origin: "Japan" },
    "RotiCanai.jpg": { name: "RotiCanai", origin: "Malaysia" },
    "Samgyeopsal.jpg": { name: "Samgyeopsal", origin: "South Korea" },
    "SausagesWithSauerkraut.jpg": { name: "SausagesWithSauerkraut", origin: "Germany" },
    "Tacos.webp": { name: "Tacos", origin: "Mexico" },
    "Tapas.jpg": { name: "Tapas", origin: "Spain" }
};

const foodImages = Object.keys(foodData);

function getRandomFoodImage() {
    const randomIndex = Math.floor(Math.random() * foodImages.length);
    return foodImages[randomIndex];
}

const selectedImage = getRandomFoodImage();
const foodInfo = foodData[selectedImage];
const imageUrl = "images/" + selectedImage;

function loadImage() {
    const foodImageElement = document.getElementById("foodImage");
    foodImageElement.src = imageUrl;
}

function normalizeText(text) {
    return text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

function submitQuiz(event) {
    event.preventDefault(); 

    let score = 0;
    const userFoodAnswer = document.getElementById("food").value.trim();
    const userOriginAnswer = document.getElementById("origin").value.trim();

    const normalizedUserFoodAnswer = normalizeText(userFoodAnswer);
    const normalizedUserOriginAnswer = normalizeText(userOriginAnswer);

    const normalizedCorrectFoodAnswer = normalizeText(foodInfo.name);
    const normalizedCorrectOriginAnswer = normalizeText(foodInfo.origin);

    // Check answers
    if (normalizedUserFoodAnswer === normalizedCorrectFoodAnswer) {
        score++;
    }
    if (normalizedUserOriginAnswer === normalizedCorrectOriginAnswer) {
        score++;
    }

    let resultText = `You scored ${score} out of 2.`;
    if (score === 2) {
        resultText += " Excellent!";
    } else if (score > 0) {
        resultText += " Good job!";
    } else {
        resultText += " Better luck next time.";
    }

    resultText += `<br><br><strong>Correct Answers:</strong><br>Food Name: ${foodInfo.name}<br>Origin: ${foodInfo.origin}`;

    document.getElementById("result").innerHTML = resultText;
    const recommendationBtn = document.getElementById("recommendationBtn");
        recommendationBtn.hidden = false;

        // Add a click event to redirect to recommendations.html
    recommendationBtn.addEventListener("click", () => {
        window.location.href = "recommendation.html";
    });
}

loadImage();

document.querySelector("form").addEventListener("submit", submitQuiz);
document.getElementById("skipQuiz").addEventListener("click", () => {
    window.location.href = "recommendation.html";
});
