/* ==========================
   NAMA TAMU DARI URL
========================== */

function getGuestName(){

    const params =
    new URLSearchParams(
        window.location.search
    );

    const guest =
    params.get("to") ||
    "Tamu Undangan";

    const guestElement =
    document.getElementById("guest");

    if(guestElement){
        guestElement.innerHTML = guest;
    }

}

/* ==========================
   LANJUTKAN PARAMETER URL
========================== */

function setupLinks(){

    const params =
    new URLSearchParams(
        window.location.search
    );

    const guest =
    params.get("to") || "";

    const links =
    document.querySelectorAll(".next-page");

    links.forEach(link => {

        const href =
        link.getAttribute("href");

        link.href =
        href + "?to=" +
        encodeURIComponent(guest);

    });

}

/* ==========================
   COUNTDOWN
========================== */

function startCountdown(){

    const targetDate =
    new Date(
        "December 20, 2026 09:00:00"
    ).getTime();

    const timer =
    document.getElementById("countdown");

    if(!timer) return;

    setInterval(()=>{

        const now =
        new Date().getTime();

        const distance =
        targetDate - now;

        const days =
        Math.floor(
            distance /
            (1000*60*60*24)
        );

        const hours =
        Math.floor(
            (distance %
            (1000*60*60*24))
            /
            (1000*60*60)
        );

        const minutes =
        Math.floor(
            (distance %
            (1000*60*60))
            /
            (1000*60)
        );

        const seconds =
        Math.floor(
            (distance %
            (1000*60))
            /1000
        );

        timer.innerHTML = `
        <div class="box">
            <h3>${days}</h3>
            <p>Hari</p>
        </div>

        <div class="box">
            <h3>${hours}</h3>
            <p>Jam</p>
        </div>

        <div class="box">
            <h3>${minutes}</h3>
            <p>Menit</p>
        </div>

        <div class="box">
            <h3>${seconds}</h3>
            <p>Detik</p>
        </div>
        `;

    },1000);

}

/* ==========================
   BUKA UNDANGAN
========================== */

function openInvitation(){

    const cover =
    document.getElementById("cover");

    const music =
    document.getElementById("music");

    if(cover){

        cover.style.opacity = "0";

        setTimeout(()=>{

            cover.style.display =
            "none";

        },800);

    }

    if(music){

        music.play();

    }

}

/* ==========================
   COPY REKENING
========================== */

function copyRekening(number){

    navigator.clipboard.writeText(
        number
    );

    alert(
        "Nomor rekening berhasil disalin"
    );

}

/* ==========================
   LIGHTBOX GALERI
========================== */

function openImage(src){

    const lightbox =
    document.getElementById(
        "lightbox"
    );

    const image =
    document.getElementById(
        "lightbox-img"
    );

    if(lightbox && image){

        image.src = src;

        lightbox.style.display =
        "flex";

    }

}

function closeImage(){

    const lightbox =
    document.getElementById(
        "lightbox"
    );

    if(lightbox){

        lightbox.style.display =
        "none";

    }

}

/* ==========================
   LOAD
========================== */

window.onload = ()=>{

    getGuestName();

    setupLinks();

    startCountdown();

};
