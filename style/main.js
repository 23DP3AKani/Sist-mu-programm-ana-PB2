document.getElementById("actionButton").addEventListener("click", () => {
    document.querySelector(".hero").style.background = ["blue", "black", "green", "purple", "yellow"][Math.floor(Math.random() * 5)];
});

document.getElementById("catFactButton").addEventListener("click", () => {
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => document.getElementById("catFact").textContent = data.fact);
});