$(onReady)


function onReady() {

    $("#voteSearchInput").submit(function (e) {
        e.preventDefault();
        return false;
    });//end of voteSearchInput

}//end of onReady