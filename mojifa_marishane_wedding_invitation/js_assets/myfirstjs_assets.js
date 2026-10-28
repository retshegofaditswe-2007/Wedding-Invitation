
document.addEventListener("DOMContentLoaded", function () {

    // Wedding date: 2 January 2027, South African time
    const weddingDate = new Date(
        "2027-01-02T00:00:00+02:00"
    ).getTime();

    const countdown = document.querySelector(".wedding-countdown");

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Stop if the countdown HTML cannot be found
    if (
        !countdown ||
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {
        console.error("Countdown HTML elements could not be found.");
        return;
    }

    function updateWeddingCountdown() {

        // Get the current time
        const now = Date.now();

        // Calculate the remaining time
        const difference = weddingDate - now;

        // Show a message on the wedding day
        if (difference <= 0) {
            countdown.innerHTML = `
                <h3>Today Is Our Wedding Day! 💍</h3>
                <p>Our forever begins today ❤️</p>
            `;

            clearInterval(countdownInterval);
            return;
        }

        // Calculate days, hours, minutes and seconds
        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );

        // Display the numbers
        daysElement.textContent = days;
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent = String(minutes).padStart(2, "0");
        secondsElement.textContent = String(seconds).padStart(2, "0");
    }

    // Display the countdown immediately
    updateWeddingCountdown();

    // Update every second
    const countdownInterval = setInterval(
        updateWeddingCountdown,
        1000
    );

});



    // Wedding date: 2 January 2027 at midnight
    // South African time (UTC+2)
    const weddingDate = new Date("2027-01-02T00:00:00+02:00").getTime();

    function updateWeddingCountdown() {

        // Get the current time
        const now = new Date().getTime();

        // Calculate the time remaining
        const difference = weddingDate - now;

        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");

        const countdown = document.querySelector(".wedding-countdown");

        if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
            return;
        }

        // Show a message when the wedding day arrives
        if (difference <= 0) {
            countdown.innerHTML =
                "<h3>Today Is Our Wedding Day! 💍</h3>" +
                "<p>Our forever begins today ❤️</p>";
            return;
        }

        // Calculate and display the remaining time
        daysElement.textContent = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        hoursElement.textContent = String(
            Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0");

        minutesElement.textContent = String(
            Math.floor((difference / (1000 * 60)) % 60)
        ).padStart(2, "0");

        secondsElement.textContent = String(
            Math.floor((difference / 1000) % 60)
        ).padStart(2, "0");
    }

    // Display the countdown immediately
    updateWeddingCountdown();

    // Update the countdown every second
    setInter
