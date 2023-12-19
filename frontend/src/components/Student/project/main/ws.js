document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        var content = dropdown.querySelector('.dropdown-content');
        dropdown.addEventListener('mouseover', function() {
            content.style.display = 'block';
        });

        dropdown.addEventListener('mouseout', function() {
            content.style.display = 'none';
        });
    });
});
