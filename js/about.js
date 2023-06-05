$(window).on('load' ,function() {
    setTimeout(function(){
        $('.parent-load').addClass('remove');
    }, 2000);
});

// $(window).on('load' ,function() {
//     $('.parent-load').fadeOut(9000);
// });


// window.addEventListener('scroll', function() {
//     const nav = this.document.querySelector('nav');
//     nav.classList.toggle('fixed', this.window.scrollY > 0);
// });