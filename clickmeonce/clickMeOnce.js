var alreadyClicked = false;

    $('#box').click(function() {
        if (alreadyClicked === false) {
            $(this).fadeOut(1000).fadeIn(1000);
            alreadyClicked = true;
        }
    });
