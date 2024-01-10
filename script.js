function select(number) {
    document.querySelector('.selected').classList.remove('selected');
    document.getElementById('btn' + number).classList.add('selected');
    document.getElementById("mountain2").classList.remove("d-none")
    const mountainElements = document.querySelectorAll('[id*="mountain"]');
    mountainElements.forEach(function (element) {
        element.style.display = 'none';
    });
    document.getElementById('mountain' + number).style.display = 'block';

}


window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        console.log("yes")
        document.querySelector('.mynavbar').classList.add('bg-light');
        document.querySelectorAll('.mynavbar li').forEach(function (li) {
            li.style.color = 'black';
        });
        const logoText = document.querySelector('#logo-text');
        logoText.classList.add("d-flex")
        logoText.classList.remove("d-none")
        logoText.classList.add("logo-text")
    } else {
        console.log("n")
        document.querySelector('.mynavbar').classList.remove('bg-light');
        document.querySelectorAll('.mynavbar li').forEach(function (li) {
            li.style.color = '';
        });
        const logoText = document.querySelector('#logo-text');
        logoText.classList.remove("d-flex")
        logoText.classList.add("d-none")
        logoText.classList.add("logo-text")
    }
});
const swiper = new Swiper('.mySwiper', {
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});
