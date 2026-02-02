(function () {
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a => {
    const target = (a.getAttribute("href") || "").toLowerCase();
    if (target === current) a.classList.add("active");
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const backdrop = document.querySelector(".modal-backdrop.open");
      if (backdrop) backdrop.classList.remove("open");
    }
  });
})();
