var line = []
var t = []
var dt = []
var dl = []
var gl = [];
var gt = [];
$('#go').on('click', () => {
    document.addEventListener('keydown', event => {
        var key = event.keyCode;
        document.getElementById('keyCode').innerHTML = key;
        if (key == 80 && audioElement.currentTime > 0) {
            audioElement.pause();
            $("#status").text("狀態: 暫停");
        }
        if (!audioElement.paused && audioElement.currentTime > 0 && play == false) {
            switch (key) {
                case 65:
                    t.push(audioElement.currentTime)
                    line.push(0)
                    break;
                case 83:
                    t.push(audioElement.currentTime)
                    line.push(1)
                    break;
                case 68:
                    t.push(audioElement.currentTime)
                    line.push(2)
                    break;
                case 70:
                    t.push(audioElement.currentTime)
                    line.push(3)
                    break;
                case 74:
                    t.push(audioElement.currentTime)
                    line.push(4)
                    break;
                case 75:
                    t.push(audioElement.currentTime)
                    line.push(5)
                    break;
                case 76:
                    t.push(audioElement.currentTime)
                    line.push(6)
                    break;
            }
        }


        if (!audioElement.paused && audioElement.currentTime > 0 && play == true) {
            switch (key) {
                case 65:
                    for (let i = 0; i < dt.length; i++) {
                        if (-0.25 <= parseFloat(dt[i] - audioElement.currentTime) && parseFloat(dt[i] - audioElement.currentTime) <= 0.25) {
                            if (dl[i] == 0) {
                                delete dt[i]
                                delete dl[i]
                            }
                        }
                    }
                    break;
                case 83:
                    for (let i = 0; i < dt.length; i++) {
                        if (-0.25 <= parseFloat(dt[i] - audioElement.currentTime) && parseFloat(dt[i] - audioElement.currentTime) <= 0.25) {
                            if (dl[i] == 1) {
                                delete dt[i]
                                delete dl[i]
                            }
                        }
                    }
                    break;
                case 68:
                    for (let i = 0; i < dt.length; i++) {
                        if (-0.25 <= parseFloat(dt[i] - audioElement.currentTime) && parseFloat(dt[i] - audioElement.currentTime) <= 0.25) {
                            if (dl[i] == 2) {
                                delete dt[i]
                                delete dl[i]
                            }
                        }
                    }
                    break;
                case 70:
                    for (let i = 0; i < dt.length; i++) {
                        if (-0.25 <= parseFloat(dt[i] - audioElement.currentTime) && parseFloat(dt[i] - audioElement.currentTime) <= 0.25) {
                            if (dl[i] == 3) {
                                delete dt[i]
                                delete dl[i]
                            }
                        }
                    }
                    break;
                case 74:
                    for (let i = 0; i < dt.length; i++) {
                        if (-0.25 <= parseFloat(dt[i] - audioElement.currentTime) && parseFloat(dt[i] - audioElement.currentTime) <= 0.25) {
                            if (dl[i] == 4) {
                                delete dt[i]
                                delete dl[i]
                            }
                        }
                    }
                    break;
                case 75:
                    for (let i = 0; i < dt.length; i++) {
                        if (-0.25 <= parseFloat(dt[i] - audioElement.currentTime) && parseFloat(dt[i] - audioElement.currentTime) <= 0.25) {
                            if (dl[i] == 5) {
                                delete dt[i]
                                delete dl[i]
                            }
                        }
                    }
                    break;
                case 76:
                    for (let i = 0; i < dt.length; i++) {
                        if (-0.25 <= parseFloat(dt[i] - audioElement.currentTime) && parseFloat(dt[i] - audioElement.currentTime) <= 0.25) {
                            if (dl[i] == 6) {
                                delete dt[i]
                                delete dl[i]
                            }
                        }
                    }
                    break;
                case 81:
                    if (audioElement.currentTime > 5) {
                        audioElement.currentTime -= 5
                        gl = [];
                        gt = [];
                        dt = [];
                        dl = [];
                        gt = t.map(x => x);
                        gl = line.map(x => x);
                    }
                    break;
                case 69:
                    if ((audioElement.duration - audioElement.currentTime) > 5) {
                        audioElement.currentTime += 5
                        gl = [];
                        gt = [];
                        dt = [];
                        dl = [];
                        gt = t.map(x => x);
                        gl = line.map(x => x);
                    }
                    break;
            }
        }



    })
});