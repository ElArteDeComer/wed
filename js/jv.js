const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value;
    alert('Realizando búsqueda: ' + searchTerm);
  
});
