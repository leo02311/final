var play = true;

$('#play').on('click', () => {
    $('#play').attr('disabled', '')
    $('#make').removeAttr('disabled')
    play = true;
})
$('#make').on('click', () => {
    $('#make').attr('disabled', '')
    $('#play').removeAttr('disabled')
    play = false;
})