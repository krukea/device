const openBtn = document.querySelectorAll(".modal-open");
const closeBtn = document.querySelectorAll(".modal-close");

openBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target;
    if (target.tagName === btn.tagName) return;

    const modalClass = target.closest("a").getAttribute("data-modal");
    const modal = document.querySelector(`.${modalClass}`);
    modal.classList.add("modal--show");
  });
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target;
    target.closest("section").classList.remove("modal--show");
  });
});
