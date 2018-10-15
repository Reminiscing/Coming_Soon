(function() {
    let menu = document.querySelector('ul'),
        menuLink = document.getElementById('toggle-menu');

      menuLink.addEventListener('click', function(e){
        menu.classList.toggle('active');
        e.preventDefault();
    })
})();