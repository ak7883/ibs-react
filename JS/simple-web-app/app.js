console.log('-app.js-');

// document.addEventListener('DOMContentLoaded', function () {
//     // using  DOM API
//     let box = document.querySelector('.well');
//     let hideBtn = document.querySelector('.btn-danger');
//     let showBtn = document.querySelector('.btn-primary');

//     hideBtn.addEventListener('click', function (e) {
//         box.style.display = 'none';
//     })
//     showBtn.addEventListener('click', function (e) {
//         box.style.display = '';
//     })
// });

//-----------------------------------------------------

$(document).ready(function(){
    let box=$('.well');
    $('.btn-danger').click(function(){
        box.hide();
    });
    $('.btn-primary').click(function(){
        box.show();
    });
});

//-----------------------------------------------------