import { podcasts } from "./data.js";
import { createGrid } from "./views/createGrid.js";
import "./components/PodcastModal.js";

function init() {
  const grid = createGrid();
  grid.render(podcasts);

  const modal = document.querySelector("podcast-modal");

  document.addEventListener("open-modal", (e) => {
    console.log("EVENT FIRED:", e.detail); // DEBUG
    modal.data = e.detail;
  });
}

init();
