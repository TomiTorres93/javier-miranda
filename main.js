$('img').on('click', function (){
    $('body').append('<div id="dialog" title="Image"><img src="' + $(this).attr('src') + '" width="300" /></div>');
    $('#dialog').dialog();
});