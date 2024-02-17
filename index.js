function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    document.getElementById('timeInput').value = currentTime;
}

function calculateOutTime() {
    const inputTime = document.getElementById('timeInput').value;
    const fixedTime = '09:00';
    const timeToAdd = 9; // Always 9 hours
    const [inputHours, inputMinutes] = inputTime.split(':').map(Number);
    const [fixedHours, fixedMinutes] = fixedTime.split(':').map(Number);

    const totalHours = inputHours + fixedHours ;
    const totalMinutes = inputMinutes + fixedMinutes;

    // let outHours = totalHours + Math.floor(totalMinutes / 60);
    let outHours = totalHours;
    let outMinutes = totalMinutes % 60;
    // alert(outHours);
    outHours = outHours % 24; // Ensure it's within a day

    const outTime = `${String(outHours).padStart(2, '0')}:${String(outMinutes).padStart(2, '0')}`;
    document.getElementById('output').textContent = outTime;
}

// Function to update clock display
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Pad single digit minutes and seconds with leading zero
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Format time as HH:MM:SS
    var timeString = hours + ":" + minutes + ":" + seconds;

    // Update the clock display
    document.getElementById("clock").textContent = timeString;
}

// Update the clock display every second
setInterval(updateClock, 1000);

// Initial call to display clock immediately
updateClock();