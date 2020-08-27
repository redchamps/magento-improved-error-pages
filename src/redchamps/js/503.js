// https://www.webredone.com/
let elementsCC = document.querySelectorAll('.origin-center');

elementsCC.forEach(element => {
    let bbox = element.getBBox(),
        x = bbox.x,
        y = bbox.y,
        w = bbox.width,
        h = bbox.height;

    //center center
    let resultCC = (x + (w / 2)) + 'px ' + (y + (h / 2)) + 'px';

    element.style.setProperty("transform-origin", resultCC)
}); // forEach


let elementsTL = document.querySelectorAll('.origin-left');

elementsTL.forEach(element => {
    let bbox = element.getBBox(),
        x = bbox.x,
        y = bbox.y,
        w = bbox.width,
        h = bbox.height;

    //top left
    let resultTL = x + 'px ' + y + 'px';

    element.style.setProperty("transform-origin", resultTL)
}); // forEach

timer(
    120, // seconds
    function(timeleft) { // called every step to update the visible countdown
        document.getElementById('timer').innerHTML = "Page will be automatically refreshed in "+timeleft+" minute(s)";
    },
    function() { // what to do after
        document.getElementById('timer').innerHTML = "Page is being reloaded";
        location.reload();
    }
);

function timer(time,update,complete) {
    var start = (new Date().getTime())/1000;
    var interval = setInterval(function() {
        var now = time-((new Date().getTime())/1000-start);
        if( now <= 0) {
            clearInterval(interval);
            complete();
        }
        else {
            var minutes = ('0'+Math.floor(now / 60)).slice(-2);
            var seconds = ('0'+Math.floor(now - minutes * 60)).slice(-2);
            update(minutes+':'+seconds);
        }
    },100); // the smaller this number, the more accurate the timer will be
}
