//end load first page
$(window).on('load' ,function() {
    $('.parent-load').fadeOut(3000);
});
//fixed nav bar in top bage
window.addEventListener('scroll' , function(){
    let header = this.document.querySelector('.paernt-nav');
    header.classList.toggle('sticky', window.scrollX > 0);
});
