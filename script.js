const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

const guestElement = document.getElementById("guestName");

if (guest) {

    guestElement.textContent =
        decodeURIComponent(guest);

} else {

    guestElement.textContent =
        "Tamu Undangan";

}
