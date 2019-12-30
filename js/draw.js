var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ini = 75;
var gap = 150;

function draw() {
    ctx.clearRect(0, 0, 1200, 600);

    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "green";
    ctx.moveTo(0, 550);
    ctx.lineTo(1200, 550);
    ctx.stroke();

    ctx.fillStyle = "#00c3ff"
    ctx.beginPath();
    for (let i = 1; i <= 7; i++) {
        ctx.arc(gap * i, 550, 3, 0, 2 * Math.PI);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "green";
    for (let i = 0; i <= 7; i++) {
        ctx.moveTo(ini + gap * i, 0);
        ctx.lineTo(ini + gap * i, 600);
    }
    ctx.stroke();
}

function newCircle(i, t) {
    ctx.fillStyle = "#00c3ff"
    ctx.beginPath();
    ctx.arc(gap * (i + 1), 550 - 200 * (t - audioElement.currentTime), 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "black"
    ctx.beginPath();
    ctx.arc(gap * (i + 1), 550 - 200 * (t - audioElement.currentTime), 1, 0, 2 * Math.PI);
    ctx.fill();
}

var gameRead = setInterval(function() {
    draw()
    if (!audioElement.paused && audioElement.currentTime > 0 && gt != null && gl != null) {
        if (gt[0] <= audioElement.currentTime + 3) {
            dt.push(gt[0]);
            gt.shift();
            dl.push(gl[0]);
            gl.shift();
        }
    }
    if (dt != null && dl != null) {
        for (let i = 0; i < dt.length; i++) {
            if (audioElement.currentTime - 1 < dt[i]) {
                newCircle(dl[i], dt[i])
            } else {
                delete dl[i];
                delete dt[i];
            }
        }
    }
    if (audioElement.ended == true) {
        clearInterval(gameRead)
    }
}, 1)

var gamePlay = setInterval(function() {
    draw()
    if (!audioElement.paused && audioElement.currentTime > 0 && gt != null && gl != null) {
        if (gt[0] <= audioElement.currentTime + 3) {
            dt.push(gt[0]);
            gt.shift();
            dl.push(gl[0]);
            gl.shift();
        }
    }
    if (dt != null && dl != null) {
        for (let i = 0; i < dt.length; i++) {
            if (audioElement.currentTime - 1 < dt[i]) {
                newCircle(dl[i], dt[i])
            } else {
                delete dl[i];
                delete dt[i];
            }
        }
    }

    if (audioElement.ended == true) {
        clearInterval(gamePlay)
    }
}, 1);


t = [3]
line = [0]

$('#go').on('click', () => {
    if (play == true) {
        gl = [];
        gt = [];
        dt = [];
        dl = [];
        gt = t.map(x => x);
        gl = line.map(x => x);
        gamePlay
    } else {
        gl = [];
        gt = [];
        dt = [];
        dl = [];
        gt = t.map(x => x);
        gl = line.map(x => x);
        gameRead
    }
})

$('#remake').on('click', () => {
    t = []
    line = []
})
$('#re').on('click', () => {
    audioElement.currentTime = 0
})
$('#pause').on('click', () => {
    audioElement.pause()
})