$(onReady)


function onReady() {
    console.log('onReadu');

    $("#root").on('click', ".Box-1", () => {

        $(this).data('box', "1").toggleClass('Box-2');
    })
}