import { podcasts, genres } from './data.js';

const podcastContainer = document.getElementById('podcastContainer');
const searchInput = document.getElementById('searchInput');
const genreSelect = document.getElementById('genreSelect');

// Populate genre dropdown
genres.forEach(g => {
  const option = document.createElement('option');
  option.value = g.id;
  option.textContent = g.title;
  genreSelect.appendChild(option);
});

// Render podcasts dynamically
function renderPodcasts(list) {
  podcastContainer.innerHTML = '';
  if (list.length === 0) {
    podcastContainer.innerHTML = '<p style="text-align:center;color:#e3a7b1;">No podcasts found</p>';
    return;
  }

  list.forEach(podcast => {
    const card = document.createElement('div');
    card.classList.add('podcast-card');
    card.innerHTML = `
      <img src="${podcast.image}" alt="${podcast.title}">
      <div class="podcast-info">
        <h3>${podcast.title}</h3>
        <p>${podcast.description.substring(0, 100)}...</p>
        <small>Seasons: ${podcast.seasons}</small>
      </div>
    `;
    podcastContainer.appendChild(card);
  });
}

// Filter logic
function filterPodcasts() {
  const searchTerm = searchInput.value.toLowerCase();
  const genreValue = genreSelect.value;

  let filtered = podcasts.filter(p => 
    p.title.toLowerCase().includes(searchTerm) || 
    p.description.toLowerCase().includes(searchTerm)
  );

  if (genreValue !== 'all') {
    filtered = filtered.filter(p => p.genres.includes(parseInt(genreValue)));
  }

  renderPodcasts(filtered);
}

// Event listeners
searchInput.addEventListener('input', filterPodcasts);
genreSelect.addEventListener('change', filterPodcasts);

// Initial render
renderPodcasts(podcasts);