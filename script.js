
// Fade in on page load
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("fade-in");
});

// Fade out on link click
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const url = this.href;

    document.documentElement.classList.remove("fade-in");
    document.documentElement.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = url;
    }, 500); // match CSS transition
  });
});
