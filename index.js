// Tab Animation
document.querySelectorAll(".tab").forEach((value)=>{
    value.addEventListener("click",function(){
        this.classList.add("click")
        setTimeout(()=>{
            this.classList.remove("click")
        },100)
    })
})

// Tab Time Animation
document.querySelectorAll(".tab-time").forEach((value)=>{
    value.addEventListener("click",function(){
        document.querySelectorAll(".tab-time").forEach((value)=>{
            value.classList.remove("active")
            console.log([value]);
            value.lastElementChild.classList.add("hidden")
        })
        this.classList.add("active")
        this.lastElementChild.classList.remove("hidden")
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
        console.log(document.getElementById('countdown'));
        document.getElementById('progress').style.width = `${seconds/60*100}%`
    }, 1000);
});

// selectItem
document.addEventListener("DOMContentLoaded", function() {
    const itemList = document.getElementById("item-list");
    const items = itemList.getElementsByTagName("li");

    for (let item of items) {
        item.addEventListener("click", function() {
            // Loại bỏ lớp 'bg-blue-500' và 'text-white' khỏi tất cả các item
            for (let i of items) {
                i.classList.remove("bg-blue-500", "text-white");
                i.classList.add("bg-gray-200", "text-black");
            }
            // Thêm lớp 'bg-blue-500' và 'text-white' vào item được chọn
            this.classList.remove("bg-gray-200", "text-black");
            this.classList.add("bg-blue-500", "text-white");
        });
    }
});
