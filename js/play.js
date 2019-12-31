var audioElement = document.createElement('audio');
$(document).ready(function() {
    audioElement.setAttribute('src', './music/everlastingsnow.mp3');
    /*audioElement.addEventListener('ended', function() {
        audioElement.paused();
        audioElement.currentTime = 0;

    }, false);*/

    audioElement.addEventListener("canplay", function() {
        $('#make').removeAttr('disabled')
        $('#go').removeAttr('disabled')
        $("#length").text("播放時長:" + audioElement.duration + " 秒");
        $("#source").text("位置:" + audioElement.src);
        $("#status").text("狀態: 可以播放").css("color", "green");
    });

    audioElement.addEventListener("timeupdate", function() {
        $("#currentTime").text("播放時間:" + audioElement.currentTime);
    });

    $('#go').click(function() {
        audioElement.play();
        $("#status").text("狀態: 播放");
    });

    function handleFiles(event) {
        var files = event.target.files;
        audioElement.setAttribute("src", URL.createObjectURL(files[0]));
        audioElement.load();
    }
    document.getElementById("rll").addEventListener("change", handleFiles, false);
});
