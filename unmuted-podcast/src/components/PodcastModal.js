// src/components/PodcastModal.js
import { GenreService } from "../utils/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";
import { seasons } from "../data.js";

/**
 * Podcast Modal Web Component
 * Displays detailed podcast information in an encapsulated modal.
 */
export class PodcastModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.podcast = null;
  }

  /**
   * Set podcast data and render modal.
   * @param {Object} podcast
   */
  set data(podcast) {
    this.podcast = podcast;
    this.render();
    this.open();
  }

  /** Open modal */
  open() {
    this.shadowRoot.querySelector(".modal").classList.remove("hidden");
  }

  /** Close modal */
  close() {
    this.shadowRoot.querySelector(".modal").classList.add("hidden");
  }

  /** Render modal UI */
  render() {
    if (!this.podcast) return;

    const genreNames = GenreService.getNames(this.podcast.genres);
    const seasonData =
      seasons.find((s) => s.id === this.podcast.id)?.seasonDetails || [];

    this.shadowRoot.innerHTML = `
      <style>
        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
          backdrop-filter: blur(5px);
        }

        .hidden { display: none; }

        .modal-content {
          background: #111;
          color: white;
          max-width: 900px;
          width: 90%;
          padding: 2rem;
          border-radius: 8px;
          max-height: 90vh;
          overflow-y: auto;
          font-family: Inter, sans-serif;
        }

        .title-section {
          display: flex;
          justify-content: space-between;
        }

        img {
          width: 45%;
          border-radius: 6px;
        }

        .banner {
          display: flex;
          gap: 1rem;
        }

        .tag {
          background: #333;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          font-size: 0.8rem;
          margin-right: 0.4rem;
        }

        .season-item {
          list-style: none;
          border: 1px solid #333;
          padding: 10px;
          margin-bottom: 8px;
          border-radius: 6px;
        }

        button {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: white;
          cursor: pointer;
        }

        button:hover {
          color: red;
        }

        @media (max-width: 600px) {
          .banner {
            flex-direction: column;
          }
          img {
            width: 100%;
          }
        }
      </style>

      <div class="modal hidden">
        <div class="modal-content">
          <div class="title-section">
            <h2>${this.podcast.title}</h2>
            <button id="closeBtn">&times;</button>
          </div>

          <div class="banner">
            <img src="${this.podcast.image}" />
            <div>
              <h3>Description</h3>
              <p>${this.podcast.description}</p>

              <h3>Genres</h3>
              <div>${genreNames.map((g) => `<span class="tag">${g}</span>`).join("")}</div>

              <p>${DateUtils.format(this.podcast.updated)}</p>
            </div>
          </div>

          <h3>Seasons</h3>
          <ul>
            ${seasonData
              .map(
                (s, i) =>
                  `<li class="season-item"><strong>Season ${i + 1}: ${s.title}</strong> — ${s.episodes} episodes</li>`
              )
              .join("")}
          </ul>
        </div>
      </div>
    `;

    this.shadowRoot
      .getElementById("closeBtn")
      .addEventListener("click", () => this.close());
  }
}

// Register element
customElements.define("podcast-modal", PodcastModal);
