// Tab Animation
document.querySelectorAll(".tab").forEach((value)=>{
    value.addEventListener("click",function(){
        this.classList.add("click")
        setTimeout(()=>{
            this.classList.remove("click")
        },100)
    })
})

// Button Animation
document.querySelectorAll(".button").forEach((value)=>{
    value.addEventListener("click",function(){
        this.classList.add("click")
        setTimeout(()=>{
            this.classList.remove("click")
        },100)
    })
})

// Countdown
document.addEventListener("DOMContentLoaded", function() {
    // Set end time
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    // Update countdown every second
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Countdown ended";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }, 1000);
});
