document.addEventListener("DOMContentLoaded", function () {
    
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    const highScoresList = document.getElementById("highScoresList");

    
    highScores.sort((a, b) => b.score - a.score);

   
    highScores.forEach((scoreData) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${scoreData.initials}: ${scoreData.score}`;
        highScoresList.appendChild(listItem);
    });
});