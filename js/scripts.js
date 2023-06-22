const modalWindows = document.querySelectorAll(".modal");
const openBtn = document.querySelectorAll(".modal-open");
const closeBtn = document.querySelectorAll(".modal-close");

const feedbackLink = document.querySelector(".feedback__link");
const feedback = document.querySelector(".feedback");
const feedbackForm = document.querySelector(".feedback__form");
const userName = feedbackForm.querySelector("#feedback-name");
const userEmail = feedbackForm.querySelector("#feedback-email");
const feedbackText = feedbackForm.querySelector("#feedback-message");

const mapBtn = document.querySelector(".contacts__map-link");
const mapModal = document.querySelector(".map");

let storageName;
let storageEmail;
/* openBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target;
    if (target.tagName === btn.tagName) return;

    const modalClass = target.closest("a").getAttribute("data-modal");
    const modal = document.querySelector(`.${modalClass}`);
    modal.classList.add("modal--show");
  });
}); */

let isStorageSupported = true;

try {
  storageName = localStorage.getItem("username");
  storageEmail = localStorage.getItem("email");
} catch (error) {
  isStorageSupported = false;
}

feedbackLink.addEventListener("click", (e) => {
  e.preventDefault();

  feedback.classList.add("modal--show");

  userName.value = storageName;
  userName.value = storageName;
  userName.focus();

  if (storageName && !storageEmail) {
    userEmail.focus();
  } else if (storageName && storageEmail) {
    feedbackText.focus();
  }
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target;
    target.closest("section").classList.remove("modal--show");
    target.closest("section").classList.remove("modal--error");
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalWindows.forEach((modal) => {
      if (modal.classList.contains("modal--show")) {
        e.preventDefault();
        modal.classList.remove("modal--error");
        modal.classList.remove("modal--show");
      }
    });
  }
});

feedbackForm.addEventListener("submit", (e) => {
  if (!userName.value || !userEmail.value || !feedbackText.value) {
    e.preventDefault();
    feedback.classList.remove("modal--error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("modal--error");
  } else {
    if (isStorageSupported) {
      localStorage.setItem("username", userName.value);
      localStorage.setItem("email", userEmail.value);
    }
  }
});

mapBtn.addEventListener("click", (e) => {
  e.preventDefault();

  mapModal.classList.add("modal--show");
});
