const podcastGrid = document.getElementById('podcastGrid');
const genreFilter = document.getElementById('genreFilter');
const sortFilter = document.getElementById('sortFilter');
const searchInput = document.getElementById('searchInput');

const modal = document.getElementById('podcastModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalCover = document.getElementById('modalCover');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalGenres = document.getElementById('modalGenres');
const modalSeasons = document.getElementById('modalSeasons');

// Populate genre filter
const allGenres = [...new Set(podcasts.flatMap(p => p.genres))];
allGenres.forEach(g => {
  const opt = document.createElement('option');
  opt.value = g;
  opt.textContent = g;
  genreFilter.appendChild(opt);
});

// Render podcasts
function renderPodcasts() {
  podcastGrid.innerHTML = '';
  let filtered = podcasts.filter(p => 
    (genreFilter.value === 'all' || p.genres.includes(genreFilter.value)) &&
    p.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  if (sortFilter.value === 'recent') {
    filtered.sort((a,b)=> new Date(b.updated) - new Date(a.updated));
  } else if (sortFilter.value === 'seasons') {
    filtered.sort((a,b)=> b.seasons - a.seasons);
  } else if (sortFilter.value === 'title') {
    filtered.sort((a,b)=> a.title.localeCompare(b.title));
  }

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'podcast-card';
    card.innerHTML = `
      <img src="${p.cover}" alt="${p.title} cover">
      <div class="card-info">
        <h3>${p.title}</h3>
        <p>${p.genres.join(', ')}</p>
      </div>
    `;
    card.addEventListener('click', ()=> openModal(p));
    podcastGrid.appendChild(card);
  });
}

// Modal functions
function openModal(podcast) {
  modalCover.src = podcast.cover;
  modalTitle.textContent = podcast.title;
  modalDescription.textContent = podcast.description;
  modalGenres.textContent = podcast.genres.join(', ');
  modalSeasons.textContent = `Seasons: ${podcast.seasons}`;
  modal.hidden = false;
  modalBackdrop.hidden = false;
  modal.focus();
}

function closeModal() {
  modal.hidden = true;
  modalBackdrop.hidden = true;
}

// Event listeners
genreFilter.addEventListener('change', renderPodcasts);
sortFilter.addEventListener('change', renderPodcasts);
searchInput.addEventListener('input', renderPodcasts);
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Initial render
renderPodcasts();
