document.getElementById('changeColorBtn').addEventListener('click', function() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('h1').style.color = randomColor;
});
