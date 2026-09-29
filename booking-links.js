/* ==========================================================
   Where to book each teacher's classes.
   The timetable and "Meet the team" cards link here automatically,
   matched by the teacher's name as written on the timetable.
   Taken from the Aluna Timetable Autumn/Winter 2026 Canva design.
   To add or change one, edit the line below. Teachers without a
   line (e.g. Emma) show no booking link.
   ========================================================== */
const BOOKING_LINKS = {
  Andrea:    "http://buk.ie/aluna",
  Catherine: "https://bookinghawk.com/events-overview/shine-trilogy/964",
  Aoife:     "http://buk.ie/mama",
  Paul:      "mailto:info@absoluteyoga.com",
  Edel:      "https://www.babysensory.ie/login?cid=1201&returnUrl=%2Fbooking%2Fwaitlist%3Fcid%3D1201%26clid%3D310029",
  Megan:     "https://bookinghawk.com/events-overview/saol-pilates/1161",
  Katie:     "https://twinklekids.ie/register-for-new-term",
  Claire:    "https://bookinghawk.com/events-overview/down-to-earth-yoga-with-claire/608",
  Aishling:  "https://bookinghawk.com/events-overview/form-pilates/1383",
  Natalia:   "tel:+353877488638",
  Alisha:    "https://eabhacrystals.com/product-category/events/",
  Sinead:    "mailto:sineadmcnamara2016@outlook.com",
  Sharon:    "https://bookinghawk.com/events-overview/little-fire-yoga/1433",
  Quiva:     "https://bookinghawk.com/events-overview/o-croi/1437",
};

(function linkTeachers() {
  const label = href =>
    href.startsWith("tel:") ? "Call to book" :
    href.startsWith("mailto:") ? "Email to book" : "Book";

  const setLink = (a, href) => {
    a.href = href;
    if (href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
  };

  // Timetable: turn each class with a known teacher into a link
  document.querySelectorAll(".slot").forEach(slot => {
    const teacher = slot.querySelector("span")?.textContent.trim();
    const href = BOOKING_LINKS[teacher];
    if (!href) return;
    const a = document.createElement("a");
    a.className = slot.className + " is-link";
    a.innerHTML = slot.innerHTML + `<em class="book">${label(href)} →</em>`;
    a.setAttribute("aria-label", `${slot.querySelector("b").textContent} with ${teacher}: ${label(href)}`);
    setLink(a, href);
    slot.replaceWith(a);
  });

  // Team cards: add a booking link under each teacher
  document.querySelectorAll(".member").forEach(card => {
    const teacher = card.querySelector("b")?.textContent.trim();
    const href = BOOKING_LINKS[teacher];
    if (!href) return;
    const a = document.createElement("a");
    a.className = "member-book";
    a.textContent = `${label(href)} with ${teacher} →`;
    setLink(a, href);
    card.querySelector("figcaption").appendChild(a);
  });
})();
