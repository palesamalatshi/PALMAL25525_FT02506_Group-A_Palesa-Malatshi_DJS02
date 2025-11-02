import { podcasts } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("podcasts");
  const modal = document.getElementById("podcastModal");
  const closeBtn = document.querySelector(".close-btn");

  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalGenres = document.getElementById("modalGenres");
  const modalDate = document.getElementById("modalDate");

  podcasts.forEach((pod) => {
    const card = document.createElement("div");
    card.classList.add("podcast-card");

    card.innerHTML = `
      <img src="${pod.image}" alt="${pod.title}" class="podcast-img" />
      <div class="card-content">
        <h3>${pod.title}</h3>
        <p>${pod.description}</p>
        <span class="genre">${pod.genres.join(", ")}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalImage.src = pod.image;
      modalTitle.textContent = pod.title;
      modalDescription.textContent = pod.description;
      modalGenres.textContent = `Genres: ${pod.genres.join(", ")}`;
      modalDate.textContent = `Last updated: ${new Date(
        pod.lastUpdated
      ).toLocaleDateString()}`;
    });

    container.appendChild(card);
  });

  closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
});
