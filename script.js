const playPauseBtn = document.getElementById("playPauseBtn");
const bgMusic = document.getElementById("bgMusic");
const playerStatus = document.getElementById("playerStatus");
let isPlaying = false;
let userMuted = false;

// УКАЖИТЕ СЕКУНДУ НАЧАЛА ПРИПЕВА (например, 45)
const chorusStartTime = 80; 
let isFirstPlay = true;

function startMusic() {
    if (isPlaying || userMuted) return;

    // При первом запуске перематываем сразу на припев
    if (isFirstPlay) {
        bgMusic.currentTime = chorusStartTime;
        isFirstPlay = false;
    }

    bgMusic.play().then(() => {
        isPlaying = true;
        playPauseBtn.innerText = "🔊";
        playPauseBtn.classList.add("playing");
        playerStatus.innerText = "Ыры ойнап тур (өжүрер дээш базыңар)";
    }).catch(() => {
        playerStatus.innerText = "Экранга дээптерге ыры ойнай бээр 🎵";
    });
}

window.addEventListener("load", startMusic);

["click", "touchstart", "scroll"].forEach(eventType => {
    document.addEventListener(eventType, function() {
        if (!isPlaying && !userMuted) {
            startMusic();
        }
    }, { once: true });
});

playPauseBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    if (isPlaying) {
        bgMusic.pause();
        isPlaying = false;
        userMuted = true;
        playPauseBtn.innerText = "🔇";
        playPauseBtn.classList.remove("playing");
        playerStatus.innerText = "Үннү өжүрген (кыпсыр дээш базыңар)";
    } else {
        userMuted = false;
        startMusic();
    }
});

const eventDate = new Date("2026-11-28T17:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<strong>Байырлал эгелей берди!</strong>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
}, 1000);

const cakeBtn = document.getElementById("cakeBtn");
const flames = document.getElementById("flames");
const wishResult = document.getElementById("wishResult");
const cakeInstruction = document.getElementById("cakeInstruction");
let candlesBlown = false;

cakeBtn.addEventListener("click", function() {
    if (candlesBlown) return;
    candlesBlown = true;

    flames.style.display = "none";
    cakeInstruction.innerText = "Ура! Лааларны өжүрүптүңер! 🎉";
    wishResult.classList.remove("hidden");

    const colors = ["#F4A2B8", "#9EB08D", "#E5B84B", "#FF6B35", "#6EC6FF"];
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti-piece");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";
        confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
        // Инициализация живой карты с меткой на Банкетный зал «Аржай»
if (document.getElementById("customMap") && typeof L !== "undefined") {
    const map = L.map("customMap").setView([51.711867, 94.437574], 16);

    L.tileLayer("https://arcgisonline.com{z}/{y}/{x}", {
        attribution: "Карта"
    }).addTo(map);

    L.marker([51.711867, 94.437574]).addTo(map)
        .bindPopup("<b>Банкетный зал «Аржай»</b><br>ул. Калинина, 126")
        .openPopup();
}

    }
});