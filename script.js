function searchStyle(styleName) {
    const searchQuery = `STYLE ${styleName}`;
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleSearchURL, '_blank');
}

document.getElementById('styleForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const styleDesc = document.getElementById('styleDesc').value;
    const selectedStyle = document.getElementById('styles').value;

    alert(`Thank you, ${name}! You chose ${selectedStyle} and described it as: "${styleDesc}"`);
});
