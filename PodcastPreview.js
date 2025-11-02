// 📦 Custom Web Component for Podcast Preview
export class PodcastPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create component structure
    const wrapper = document.createElement('div');
    wrapper.classList.add('podcast-card');

    wrapper.innerHTML = `
      <img class="cover" />
      <div class="info">
        <h3 class="title"></h3>
        <p class="genres"></p>
        <small class="seasons"></small>
        <small class="updated"></small>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .podcast-card {
        background: #fff;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        transition: transform 0.3s, box-shadow 0.3s;
        cursor: pointer;
      }

      .podcast-card:hover {
        transform: scale(1.03);
        box-shadow: 0 6px 20px rgba(255, 111, 145, 0.3);
      }

      img.cover {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .info {
        padding: 1rem;
      }

      .title {
        color: #ff6f91;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
      }

      .genres {
        font-size: 0.9rem;
        color: #555;
      }

      .seasons, .updated {
        display: block;
        font-size: 0.8rem;
        color: #999;
        margin-top: 0.3rem;
      }
    `;

    this.shadowRoot.append(style, wrapper);

    // Event listener for custom event
    wrapper.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('podcast-click', {
        detail: { title: this.getAttribute('title') },
        bubbles: true,
        composed: true
      }));
    });
  }

  static get observedAttributes() {
    return ['title', 'image', 'genres', 'seasons', 'updated'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const wrapper = this.shadowRoot.querySelector('.podcast-card');
    if (!wrapper) return;

    switch (name) {
      case 'title':
        this.shadowRoot.querySelector('.title').textContent = newValue;
        break;
      case 'image':
        this.shadowRoot.querySelector('.cover').src = newValue;
        break;
      case 'genres':
        this.shadowRoot.querySelector('.genres').textContent = newValue;
        break;
      case 'seasons':
        this.shadowRoot.querySelector('.seasons').textContent = `Seasons: ${newValue}`;
        break;
      case 'updated':
        this.shadowRoot.querySelector('.updated').textContent = `Last Updated: ${newValue}`;
        break;
    }
  }
}

// Register element
customElements.define('podcast-preview', PodcastPreview);
