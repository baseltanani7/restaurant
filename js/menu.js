//end load first page
// $(window).on('load' ,function() {
//     $('.parent-load').fadeOut(3000);
// });

$(window).on('load' ,function() {
    setTimeout(function(){
        $('.parent-load').addClass('remove');
    }, 2000);
});



//fixed nav bar in top bage
window.addEventListener('scroll' , function(){
    let header = this.document.querySelector('.paernt-nav');
    header.classList.toggle('sticky', window.scrollX > 0);
});

// const links = document.querySelectorAll('.nav-link');
    
// if (links.length) {
// links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//     links.forEach((link) => {
//         link.classList.remove('active');
//     });
//     e.preventDefault();
//     link.classList.add('active');
//     });
// });
// }
