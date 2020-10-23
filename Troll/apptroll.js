let $no = document.getElementById('no');
let $answers = document.getElementById('answers');
// ghi đè sự kiện onmouseenter
$no.onmouseenter = function(){
    $answers.classList.toggle('reverse')
}

// thêm hàm xử lý sk 

// $no.addEventListener('mouseenter', function(){
//     $answers.classList.toggle('reverse')
// });
