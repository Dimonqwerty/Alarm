const timeForm = document.getElementById("time")
let audio = new Audio("./audio/rename.mp3")

timeForm.addEventListener("submit", function (e) {
    e.preventDefault()

    let hours = document.getElementById("hours").value
    let minutes = document.getElementById("minutes").value
    let seconds = document.getElementById("seconds").value
    if (hours > 23 || minutes > 59 || seconds > 59 || hours == 0 || hours == ` `) {
        timeForm.classList.add("border-danger")
        timeForm.classList.add("border")
    }
    else {
        const alarmTime = new Date()
        alarmTime.setHours(hours)
        alarmTime.setMinutes(minutes)
        alarmTime.setSeconds(seconds)

        const nowTime = new Date()

        if (alarmTime < nowTime) {
            alarmTime.setDate(alarmTime.getDate() + 1)
        }

        const timeUntilAlarm = alarmTime - nowTime

        setTimeout(function () {
            console.log("Будильник")
            audio.play()
        }, timeUntilAlarm)

        hours = ` `
        minutes = ` `
        seconds = ` `
    }
})