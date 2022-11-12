    //make animatin use scrolling
    window.onscroll = function() {
        var theta = document.documentElement.scrollTop / 100;
        document.getElementById('img-plase1').style.transform ='rotate(' + theta + 'rad)';

        document.getElementById('img-plase2').style.transform ='rotate(-' + theta + 'rad)';

        document.getElementById('img-plase3').style.transform ='rotate(' + theta + 'rad)';

        let parentBurgerPlase = document.querySelector('.parent-burger-Plase');
        if(window.scrollY > parentBurgerPlase.offsetTop - 850){
            parentBurgerPlase.style.animation = 'anim 3s';
        }

        let parentCardBurger1 = document.querySelector('.card-burger4');
        if(window.scrollY > parentCardBurger1.offsetTop - 750){
            parentCardBurger1.style.animation = 'transformOverlay 2s';
        }
        let parentCardBurger2 = document.querySelector('.card-burger3');
        if(window.scrollY > parentCardBurger2.offsetTop - 750){
            parentCardBurger2.style.animation = 'transformOverlay 3s';
        }
        let parentCardBurger3 = document.querySelector('.card-burger2');
        if(window.scrollY > parentCardBurger3.offsetTop - 750){
            parentCardBurger3.style.animation = 'transformOverlay 4s';
        }
        let parentCardBurger4 = document.querySelector('.card-burger1');
        if(window.scrollY > parentCardBurger4.offsetTop - 750){
            parentCardBurger4.style.animation = 'transformOverlay 5s';
        }

        let img = document.querySelector('.parent-burger-Plase img');
        if(window.scrollY > img.offsetTop - 650){
            img.style.animation = 'transformOverlay1 3s';
        }
        let plasecontact = document.querySelector('.plase-contact');
        if(window.scrollY > plasecontact.offsetTop - 650){
            plasecontact.style.animation = 'transformOverlay2 3s';
        }
    };

    //end load first page
    $(window).on('load' ,function() {
        $('.parent-load').fadeOut(4000);
    });

    //fixed nav bar in top bage
    window.addEventListener('scroll' , function(){
        let header = this.document.querySelector('.navbar');
        header.classList.toggle('sticky', window.scrollX > 0);
    });


    var label = document.getElementsByTagName('label');
        label[0].style.marginTop = '45px';
        label[0].style.marginRight = '10px';
        label[0].style.fontFamily = "dubai";
        label[0].style.fontSize = "13px";

        label[1].style.marginTop = '10px';
        label[1].style.marginRight= '10px';
        label[1].style.fontFamily = "dubai";
        label[1].style.fontSize = "13px";

        label[2].style.marginTop = '-10px';
        label[2].style.marginRight= '10px';
        label[2].style.fontFamily = "dubai";
        label[2].style.fontSize = "13px";

    function validation() {
        var valid = true;
        var fullName = document.regForm.fullName.value;
        var email = document.regForm.email.value;
        var label = document.getElementsByTagName('label');

        if (fullName == "") {
            label[0].innerHTML = "الحقل فارغ : *";
            label[0].style.color = 'red';
            valid = false;
        } else if (!isNaN(fullName)) {
            label[0].innerHTML = "يرجى كتابه نص فقط: *";
            label[0].style.color = 'red';
            valid = false;
        } else {
            label[0].innerHTML = 'الأسم كامل : *'; 
            label[0].style.color = 'black';
            valid = (valid) ? true : false;
        }

        var at = email.indexOf('@');
        if (email == "") {
            label[1].innerHTML = "الحقل فارغ : *";
            label[1].style.color = 'red';
            valid = false;
        } else if (at == -1) {
            label[1].innerHTML = 'يرجى وضع علامه @ : *';
            label[1].style.color = 'red';
            valid = false;
        } else { 
            label[1].innerHTML =  "الأيميل : *";
            label[1].style.color = 'black';
            valid = (valid) ? true : false;
        }

        return valid;
    }

