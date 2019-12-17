// nothing to see here yet.  Move along

// this won't be running on the server
// this is a static file that we expect to run on the client

function startup() {
    // eslint-disable-next-line no-undef
    document.body.innerHTML = '<p>Taken Over on Startup</p>'
}

const doMoreStuff = () => {

}

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 10,
    display = document.querySelector('#time');
  startTimer(fiveMinutes, display)
}