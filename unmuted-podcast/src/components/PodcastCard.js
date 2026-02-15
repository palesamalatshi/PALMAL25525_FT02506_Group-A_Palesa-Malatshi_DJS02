// src/components/PodcastCard.js
import { GenreService } from "../utils/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";

/**
 * PodcastCard Web Component
 * Represents a reusable podcast preview card.
 *
 * @class PodcastCard
 * @extends HTMLElement
 */
export class PodcastCard extends HTMLElement {
  /**
   * Creates a PodcastCard instance and attaches Shadow DOM.
   */
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  /**
   * Sets podcast data as a property.
   * @param {Object} podcast - Podcast object.
   */
  set data(podcast) {
    this.podcast = podcast;
    this.render();
  }

  /**
   * Renders the podcast card UI inside Shadow DOM.
   */
  render() {
    if (!this.podcast) return;

    const genreNames = GenreService.getNames(this.podcast.genres);

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          background: #1e1e1e;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(255,255,255,0.05);
          cursor: pointer;
          transition: transform 0.2s, background 0.2s;
          color: white;
          font-family: Inter, sans-serif;
        }
        .card:hover {
          transform: scale(1.02);
          background: #2a2a2a;
        }
        img {
          width: 100%;
          border-radius: 6px;
        }
        h3 {
          margin: 0.5rem 0;
        }
        p {
          margin: 0;
          font-size: 0.8rem;
          color: #ccc;
        }
        .tag {
          background: #333;
          color: #ccc;
          padding: 0.3rem 0.6rem;
          margin-right: 0.4rem;
          border-radius: 4px;
          font-size: 0.7rem;
        }
      </style>

      <div class="card">
        <img src="${this.podcast.image}" alt="${this.podcast.title}" />
        <h3>${this.podcast.title}</h3>
        <p>${this.podcast.seasons} season${this.podcast.seasons > 1 ? "s" : ""}</p>
        <div>
          ${genreNames.map((g) => `<span class="tag">${g}</span>`).join("")}
        </div>
        <p>${DateUtils.format(this.podcast.updated)}</p>
      </div>
    `;

    this.shadowRoot.querySelector(".card").addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("open-modal", {
          detail: this.podcast,
          bubbles: true,
          composed: true,
        })
      );
    });
  }
}

// Register custom element
customElements.define("podcast-card", PodcastCard);
