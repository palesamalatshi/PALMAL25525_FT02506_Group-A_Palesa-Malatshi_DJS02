// src/views/createGrid.js
import "../components/PodcastCard.js";

/**
 * Grid Renderer for podcast cards.
 */
export const createGrid = () => {
  const container = document.getElementById("podcastGrid");

  return {
    /**
     * Render podcast cards as Web Components.
     * @param {Object[]} podcastList
     */
    render(podcastList) {
      container.innerHTML = "";

      podcastList.forEach((podcast) => {
        const card = document.createElement("podcast-card");
        card.data = podcast; // pass data via property
        container.appendChild(card);
      });
    },
  };
};
