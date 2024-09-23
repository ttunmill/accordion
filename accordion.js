$('.accordion .acc li .acc_top').on('click', function() {
    if($(this).hasClass('active')) {
        $(this).removeClass('active')
        $(this).next().hide();
    } else {
        $('.accordion .acc li .txt').hide()
        $('.accordion .acc li .acc_top').removeClass('active'); 
        $(this).addClass('active');
        $(this).next().show();
    }
})

$('.accordion ul').each(function(i) {
    $('.num_btn').append(`<p>${i + 1}</p>`);

    $('.num_btn p').each(function(j) {
        $('.num_btn p').first().addClass('active');
        $(this).on('click', function() {
            $('.num_btn p').removeClass('active');
            $(this).addClass('active');

            console.log($('.accordion ul')[j])
            $('.accordion ul').hide()
            $($('.accordion ul')[j]).show();
            $('.accordion .acc li .txt').hide()
            $('.accordion .acc li .acc_top').removeClass('active'); 
        })
    })
})
