let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchStartTime;
let stopwatchTime = 0;
let laps = [];

function startStop() {
    if (!stopwatchRunning) {
        startStopwatch();
        document.getElementById('startStopButton').textContent = 'Stop';
        document.getElementById('lapButton').style.display = 'inline-block';
    } else {
        stopStopwatch();
        document.getElementById('startStopButton').textContent = 'Start';
    }
}

function startStopwatch() {
    stopwatchRunning = true;
    stopwatchStartTime = Date.now() - stopwatchTime;
    stopwatchInterval = setInterval(updateStopwatchDisplay, 10);
}

function stopStopwatch() {
    stopwatchRunning = false;
    clearInterval(stopwatchInterval);
}

function lap() {
    if (stopwatchRunning) {
        let lapTime = stopwatchTime;
        laps.push(lapTime);
        displayLaps();
    }
}

function reset() {let stopwatchInterval;
    let stopwatchRunning = false;
    let stopwatchStartTime;
    let stopwatchTime = 0;
    let laps = [];
    
    function startStop() {
        if (!stopwatchRunning) {
            startStopwatch();
            document.getElementById('startStopButton').textContent = 'Stop';
            document.getElementById('lapButton').style.display = 'inline-block';
        } else {
            stopStopwatch();
            document.getElementById('startStopButton').textContent = 'Start';
        }
    }
    
    function startStopwatch() {
        stopwatchRunning = true;
        stopwatchStartTime = Date.now() - stopwatchTime;
        stopwatchInterval = setInterval(updateStopwatchDisplay, 10);
    }
    
    function stopStopwatch() {
        stopwatchRunning = false;
        clearInterval(stopwatchInterval);
    }
    
    function lap() {
        if (stopwatchRunning) {
            let lapTime = stopwatchTime;
            laps.push(lapTime);
            displayLaps();
        }
    }
    
    function reset() {
        stopStopwatch();
        stopwatchRunning = false;
        stopwatchTime = 0;
        laps = [];
        updateStopwatchDisplay(); // Update display to show 00:00.000
        document.getElementById('startStopButton').textContent = 'Start';
        document.getElementById('lapButton').style.display = 'none';
        clearLaps();
    }
    
    function updateStopwatchDisplay() {
        stopwatchTime = Date.now() - stopwatchStartTime;
        let formattedTime = formatTime(stopwatchTime);
        document.getElementById('stopwatchDisplay').textContent = formattedTime;
    }
    
    function formatTime(time) {
        let minutes = Math.floor(time / (60 * 1000));
        let seconds = Math.floor((time % (60 * 1000)) / 1000);
        let milliseconds = Math.floor((time % 1000) / 10);
    
        return (
            (minutes < 10 ? '0' : '') + minutes + ':' +
            (seconds < 10 ? '0' : '') + seconds + '.' +
            (milliseconds < 10 ? '0' : '') + milliseconds
        );
    }
    
    function displayLaps() {
        let lapsList = document.getElementById('laps');
        lapsList.innerHTML = '';
        laps.forEach((lapTime, index) => {
            let lapItem = document.createElement('li');
            lapItem.textContent = `Lap ${index + 1}: ${formatTime(lapTime)}`;
            lapsList.appendChild(lapItem);
        });
    }
    
    function clearLaps() {
        document.getElementById('laps').innerHTML = '';
    }
    
    stopStopwatch();
    stopwatchRunning = false;
    stopwatchTime = 0;
    laps = [];
    updateStopwatchDisplay();
    document.getElementById('startStopButton').textContent = 'Start';
    document.getElementById('lapButton').style.display = 'none';
    clearLaps();
}

function updateStopwatchDisplay() {
    stopwatchTime = Date.now() - stopwatchStartTime;
    let formattedTime = formatTime(stopwatchTime);
    document.getElementById('stopwatchDisplay').textContent = formattedTime;
}

function formatTime(time) {
    let minutes = Math.floor(time / (60 * 1000));
    let seconds = Math.floor((time % (60 * 1000)) / 1000);
    let milliseconds = Math.floor((time % 1000) / 10);

    return (
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds + '.' +
        (milliseconds < 10 ? '0' : '') + milliseconds
    );
}

function displayLaps() {
    let lapsList = document.getElementById('laps');
    lapsList.innerHTML = '';
    laps.forEach((lapTime, index) => {
        let lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${index + 1}: ${formatTime(lapTime)}`;
        lapsList.appendChild(lapItem);
    });
}

function clearLaps() {
    document.getElementById('laps').innerHTML = '';
}
