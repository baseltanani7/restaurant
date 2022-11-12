    //end load first page
    $(window).on('load' ,function() {
        $('.parent-load').fadeOut(3000);
    });

    //fixed nav bar in top bage
    window.addEventListener('scroll' , function(){
        let header = this.document.querySelector('.paernt-nav');
        header.classList.toggle('sticky', window.scrollX > 0);
    });

    // var label = document.getElementsByTagName('label');
        // label[0].style.marginLeft = '140px';
        // label[0].style.fontFamily = 'dubai';

        // label[1].style.marginLeft = '110px';
        // label[1].style.fontFamily = 'dubai';

        // label[2].style.marginLeft = '130px';
        // label[2].style.fontFamily = 'dubai';

        // label[3].style.marginLeft = '110px';
        // label[3].style.fontFamily = 'dubai';

        // label[4].style.marginLeft = '475px';
        // label[4].style.fontFamily = 'dubai';

    // function validation() {
    //     valid = true;
    //     var fullName = document.regForm.fullName.value;
    //     var label = document.getElementsByTagName('label');

    //     if(fullName == "") {
    //         label[0].innerHTML = 'حقل فارغ';
    //         label[0].style.color = 'red';
    //         valid = false;
    //     } else if (!isNaN(fullName)) {
    //         label[0].innerHTML = 'يجب كتابه نص';
    //         label[0].style.color = 'red';
    //         valid = false;
    //     } else {
    //         label[0].innerHTML = 'الأسم كامل';
    //         label[0].style.color = 'black';
    //         valid = (valid) ? true : false;
    //     }

    //     return valid;
    // }


    function validation (){

        var valid = true;
        var firstName = document.regForm.firstName.value;
        var email = document.regForm.email22.value;
        var formlabel = document.getElementsByTagName('label');

        if (firstName == ''){
            formlabel[0].innerHTML = "حقل فارغ";
            formlabel[0].style.color = "red";
            valid =false;
        }
        else if (!isNaN(firstName) ){
            formlabel[0].innerHTML = "يجب كتابة نص";
            formlabel[0].style.color = "red";
            valid =false;
        }else{
            formlabel[0].innerHTML = "الأسم كامل";
            formlabel[0].style.color = "black";
            valid = (valid) ? true : false;
        }

        var at = email.indexOf('@');
        if (email == ''){
            formlabel[1].innerHTML = "حقل فارغ";
            formlabel[1].style.color = "red";
            valid =false;
        }
        else if (at == -1){
            formlabel[1].innerHTML = "يجب وضع علامه @";
            formlabel[1].style.color = "red";
            valid =false;
        }else{
            formlabel[1].innerHTML = "الإيميل";
            formlabel[1].style.color = "black";
            valid = (valid) ? true : false;
        }
        return valid;
    }