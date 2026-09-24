document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // ABOUT MODAL
    // ========================================

    const aboutBtn = document.getElementById("aboutBtn");
    const aboutModal = document.getElementById("aboutModal");
    const closeModal = document.getElementById("closeModal");
    const closeButton = document.getElementById("closeButton");

    if (aboutBtn && aboutModal) {
        aboutBtn.addEventListener("click", () => {
            aboutModal.classList.add("active");
        });
    }

    if (closeModal && aboutModal) {
        closeModal.addEventListener("click", () => {
            aboutModal.classList.remove("active");
        });
    }

    if (closeButton && aboutModal) {
        closeButton.addEventListener("click", () => {
            aboutModal.classList.remove("active");
        });
    }

    if (aboutModal) {
        aboutModal.addEventListener("click", (event) => {
            if (event.target === aboutModal) {
                aboutModal.classList.remove("active");
            }
        });
    }


    // ========================================
    // CHATBOT
    // ========================================

    const chatbotButton = document.getElementById("chatbotButton");
    const chatbox = document.getElementById("chatbox");
    const closeChat = document.getElementById("closeChat");

    const chatInput = document.getElementById("chatInput");
    const sendChat = document.getElementById("sendChat");
    const chatMessages = document.getElementById("chatMessages");


    // Pastikan semua elemen chatbot tersedia
    if (
        !chatbotButton ||
        !chatbox ||
        !closeChat ||
        !chatInput ||
        !sendChat ||
        !chatMessages
    ) {
        console.error("Montis Bot: elemen chatbot tidak ditemukan.");
        return;
    }


    // ========================================
    // BUKA CHATBOT
    // ========================================

    chatbotButton.addEventListener("click", () => {

        chatbox.classList.toggle("active");

        if (chatbox.classList.contains("active")) {
            chatInput.focus();
        }

    });


    // ========================================
    // TUTUP CHATBOT
    // ========================================

    closeChat.addEventListener("click", () => {
        chatbox.classList.remove("active");
    });


    // ========================================
    // TAMBAH PESAN
    // ========================================

    function addMessage(message, type) {

        const messageElement = document.createElement("div");

        if (type === "user") {

            messageElement.className = "user-message";

            // Pesan user dibuat sebagai text biasa
            messageElement.textContent = message;

        } else {

            messageElement.className = "bot-message";

            // Jawaban bot boleh menggunakan HTML
            messageElement.innerHTML = message;

        }

        chatMessages.appendChild(messageElement);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }


    // ========================================
    // JAWABAN BOT
    // EDIT BAGIAN INI
    // ========================================

    function getBotResponse(question) {

        const text = question.toLowerCase().trim();


        // SAPAAN
        if (
            text.includes("halo") ||
            text.includes("hai") ||
            text.includes("hello") ||
            text.includes("hi")
        ) {
            return `
                Halo 👋<br>
                Selamat datang di <b>Montis Gear</b>!<br><br>
                Ada yang ingin kamu tanyakan?
            `;
        }


        // HARGA
        if (
            text.includes("harga") ||
            text.includes("berapa") ||
            text.includes("price")
        ) {
            return `
                Untuk melihat harga produk Montis Gear,
                silakan cek toko kami di Shopee. 🛒
                <br><br>
                <a href="https://shopee.co.id/"
                target="_blank"
                style="color:#a9c5ad;">
                🛒 Buka Shopee
                </a>
            `;
        }


        // SHOPEE
        if (
            text.includes("shopee") ||
            text.includes("shoppe")
        ) {
            return `
                Kamu bisa membeli produk Montis Gear
                melalui toko Shopee kami. 🛒
                <br><br>
                <a href="https://shopee.co.id/"
                target="_blank"
                style="color:#a9c5ad;">
                🛒 Buka Shopee
                </a>
            `;
        }


        // TIKTOK
        if (
            text.includes("tiktok") ||
            text.includes("tik tok")
        ) {
            return `
                Follow TikTok Montis Gear
                untuk melihat konten outdoor terbaru. 🎵
                <br><br>
                <a href="https://www.tiktok.com/@USERNAME"
                target="_blank"
                style="color:#a9c5ad;">
                🎵 Buka TikTok
                </a>
            `;
        }


        // INSTAGRAM
        if (
            text.includes("instagram") ||
            text === "ig" ||
            text.includes(" ig ")
        ) {
            return `
                Follow Instagram Montis Gear
                untuk melihat koleksi dan aktivitas terbaru. 📸
                <br><br>
                <a href="https://instagram.com/"
                target="_blank"
                style="color:#a9c5ad;">
                📸 Buka Instagram
                </a>
            `;
        }


        // WHATSAPP
        if (
            text.includes("whatsapp") ||
            text === "wa" ||
            text.includes(" wa ")
        ) {
            return `
                Kamu bisa langsung menghubungi
                Montis Gear melalui WhatsApp. 💬
                <br><br>
                <a href="https://wa.me/6281234567890"
                target="_blank"
                style="color:#a9c5ad;">
                💬 Chat WhatsApp
                </a>
            `;
        }


        // HIKING
        if (
            text.includes("hiking") ||
            text.includes("mendaki") ||
            text.includes("gunung")
        ) {
            return `
                Montis Gear menyediakan perlengkapan
                yang cocok untuk hiking dan petualangan outdoor. 🏔️
            `;
        }


        // CAMPING
        if (
            text.includes("camping") ||
            text.includes("kemah") ||
            text.includes("tenda")
        ) {
            return `
                Untuk kebutuhan camping,
                kamu bisa melihat koleksi perlengkapan outdoor
                kami melalui Shopee. ⛺
            `;
        }


        // RUNNING
        if (
            text.includes("running") ||
            text.includes("lari") ||
            text.includes("sepatu")
        ) {
            return `
                Untuk kebutuhan running,
                Montis Gear menghadirkan perlengkapan
                yang nyaman untuk aktivitas outdoor. 🏃
            `;
        }


        // PROMO
        if (
            text.includes("promo") ||
            text.includes("diskon") ||
            text.includes("discount")
        ) {
            return `
                Untuk informasi promo dan diskon terbaru,
                silakan cek Shopee atau TikTok Montis Gear. 🔥
            `;
        }


        // DEFAULT
        return `
            Maaf, saya belum memahami pertanyaan tersebut. 😅
            <br><br>
            Coba tanyakan:
            <br>
            • Harga
            <br>
            • Shopee
            <br>
            • TikTok
            <br>
            • Instagram
            <br>
            • WhatsApp
            <br>
            • Hiking
            <br>
            • Camping
            <br>
            • Promo
        `;
    }


    // ========================================
    // KIRIM PESAN
    // ========================================

    function sendMessage() {

        const question = chatInput.value.trim();

        if (question === "") {
            return;
        }

        addMessage(question, "user");

        chatInput.value = "";

        setTimeout(() => {

            const response = getBotResponse(question);

            addMessage(response, "bot");

        }, 500);
    }


    // ========================================
    // TOMBOL SEND
    // ========================================

    sendChat.addEventListener("click", sendMessage);


    // ========================================
    // ENTER
    // ========================================

    chatInput.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            sendMessage();
        }

    });


    // ========================================
    // QUICK QUESTIONS
    // ========================================

    const quickQuestions =
        document.querySelectorAll(".quick-questions button");


    quickQuestions.forEach((button) => {

        button.addEventListener("click", () => {

            const question = button.dataset.question;

            if (!question) {
                return;
            }

            addMessage(question, "user");

            setTimeout(() => {

                const response =
                    getBotResponse(question);

                addMessage(response, "bot");

            }, 500);

        });

    });


});

// ========================================
// YOUTUBE BACKGROUND MUSIC
// ========================================

let youtubePlayer = null;
let musicReady = false;
let musicPlaying = false;

const musicToggle = document.getElementById("musicToggle");

function createYouTubePlayer() {

    if (!window.YT || !YT.Player) {
        return;
    }

    if (!document.getElementById("youtubePlayer")) {
        return;
    }

    youtubePlayer = new YT.Player("youtubePlayer", {

        videoId: "2dNvNOGVPz4",

        playerVars: {
            autoplay: 0,
            controls: 0,
            loop: 1,
            playlist: "2dNvNOGVPz4",
            playsinline: 1,
            rel: 0
        },

        events: {

            onReady: function(event) {

                musicReady = true;

                event.target.setVolume(35);

            },

            onStateChange: function(event) {

                if (event.data === YT.PlayerState.PLAYING) {

                    musicPlaying = true;

                    if (musicToggle) {

                        musicToggle.classList.add("playing");

                        musicToggle.innerHTML =
                            '<i class="fa-solid fa-volume-high"></i>';

                    }

                }

                if (
                    event.data === YT.PlayerState.PAUSED ||
                    event.data === YT.PlayerState.ENDED
                ) {

                    musicPlaying = false;

                    if (musicToggle) {

                        musicToggle.classList.remove("playing");

                        musicToggle.innerHTML =
                            '<i class="fa-solid fa-music"></i>';

                    }

                }

            }

        }

    });

}


// YouTube API selesai dimuat
window.onYouTubeIframeAPIReady = function() {

    createYouTubePlayer();

};


// Kalau API sudah tersedia sebelum fungsi di atas dibuat
if (window.YT && YT.Player) {

    createYouTubePlayer();

}


// Tombol musik
if (musicToggle) {

    musicToggle.addEventListener("click", function() {

        if (!youtubePlayer || !musicReady) {
            return;
        }

        if (musicPlaying) {

            youtubePlayer.pauseVideo();

        } else {

            youtubePlayer.playVideo();

        }

    });

}