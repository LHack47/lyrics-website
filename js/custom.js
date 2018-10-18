$(document).ready(function(){

    //Define our event listener
    $("#find-lyrics").on("submit", function(e){
        //Listening for a submit event, need to prevent the default 
        e.preventDefault();
        $(".lyric-container").text("loading....");
        //Declare variables to store the artist and song, aka the form inputs
        var artist = $("#artist").val();
        var song = $("#song").val();

        var url = "https://api.lyrics.ovh/v1/" + artist + "/" + song + "";
        // fetch(url).then(function(response){
        //     var processedLyrics = response.json();
        //     return processedLyrics;
        // })
        fetch(url).then(response => {
            var processedLyrics = response.json();
            return processedLyrics;
        }).then(processedLyrics => {
            $(".lyric-container").html("<p>" + processedLyrics.lyrics + "</p>" );
        }).catch(error => {
            console.log(error);
            alert("Please enter a valid song/artist");
        });
        // $.ajax({
        //     type: "GET",
        //     url: "https://api.lyrics.ovh/v1/" + artist + "/" + song + "",
        //     success: function(data){
        //         $(".lyric-container").html("<p>" + data.lyrics + "</p>" );
        //     },
        //     error: function(xhr, status, e){
        //         console.log(status, e);
        //         alert("Please enter a valid song/artist.")
        //     }
        // });
        //Ajax call
        //Get request
        //Input url: two strings from the form, concatenate with our created variables
        //Callback: success -> console log the response
        //Callback: error -> console log the error

    });
});