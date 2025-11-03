/* app.js — wired to your provided data.js (genres, podcasts, seasons) */

/* Elements */
const podcastGrid = document.getElementById('podcastGrid');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const sortFilter = document.getElementById('sortFilter');

const modal = document.getElementById('podcastModal');
const backdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalCover = document.getElementById('modalCover');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalGenres = document.getElementById('modalGenres');
const modalSeasons = document.getElementById('modalSeasons');
const modalUpdated = document.getElementById('modalUpdated');

/* Safety checks: data.js must define podcasts & genres */
if (!window.podcasts || !window.genres) {
  podcastGrid.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:#8b6b73">data.js not loaded or is missing <code>podcasts</code> / <code>genres</code>.</p>';
  throw new Error('data.js missing podcasts or genres');
}

/* Populate genre filter from genres array */
(function populateGenres(){
  // keep "All" already present, add each genre
  genres.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g.id;
    opt.textContent = g.name;
    genreFilter.appendChild(opt);
  });
})();

/* Utility: get genre names by id array */
function genreNamesFromIds(ids = []) {
  return ids.map(id => {
    const g = genres.find(x => x.id === id);
    return g ? g.name : 'Unknown';
  });
}

/* Utility: find seasons details by podcast id (works with multiple formats) */
function getSeasonsForPodcast(podcast) {
  // seasons array may contain { podcastId, season } entries (your final data.js)
  // OR it might contain more detailed seasonDetails objects (older version). We gracefully handle both.
  if (!Array.isArray(window.seasons)) return null;

  // first try to find by podcast.id matching podcastId
  const map = seasons.find(s => s.podcastId === podcast.id || s.id === podcast.id || s.id === Number(podcast.id));
  if (map) {
    // if map.seasonDetails exists (detailed), return that
    if (Array.isArray(map.seasonDetails)) return { type: 'details', data: map.seasonDetails };
    // else if there's just a count
    if (map.season !== undefined) return { type: 'count', data: map.season };
    if (map.seasonCount !== undefined) return { type: 'count', data: map.seasonCount };
  }

  // fallback to podcast.seasons property
  if (podcast.seasons !== undefined) return { type: 'count', data: podcast.seasons };

  return null;
}

/* Shuffle helper to scatter cards each load */
function shuffled(arr) {
  return arr.slice().sort(()=> Math.random() - 0.5);
}

/* Optionally replace last podcast image with your favorite (keeps it). Update URL if you want different image */
const favoriteImage = "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=1200&q=80";

/* Render function — accepts a list (already filtered & sorted) */
function renderPodcasts(list) {
  podcastGrid.innerHTML = '';

  if (!list.length) {
    podcastGrid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#8b6b73">No podcasts found. Try another search or filter.</p>`;
    return;
  }

  list.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'podcast-card';
    // scatter rotation variable used by CSS
    card.style.setProperty('--i', String((i % 5) - 2)); // values -2..2

    // highlight last card (special)
    if (i === list.length - 1) {
      card.classList.add('podcast-card--highlight');
    }

    // safe image field detection (some versions use "image" others "cover")
    const imgSrc = p.image || p.cover || '';
    const showImage = (i === list.length - 1) ? (favoriteImage || imgSrc) : imgSrc;

    const genreBadges = genreNamesFromIds(p.genres || []).map(n => `<span class="genre-badge">${n}</span>`).join(' ');

    card.innerHTML = `
      <img src="${showImage}" alt="${p.title} cover" loading="lazy" decoding="async">
      <div class="podcast-info">
        <h3 class="podcast-title">${p.title}</h3>
        <p class="podcast-description">${p.description || ''}</p>
        <div class="badge-container">${genreBadges}</div>
        <div class="podcast-meta">
          <span>${p.seasons ? p.seasons + (p.seasons === 1 ? ' season' : ' seasons') : '—'}</span>
          <span>${p.updated ? new Date(p.updated).toLocaleDateString() : ''}</span>
        </div>
      </div>
    `;

    // open modal on click
    card.addEventListener('click', () => openModal(p));
    podcastGrid.appendChild(card);
  });
}

/* Modal open/close */
function openModal(p) {
  modalCover.src = p.image || p.cover || '';
  modalTitle.textContent = p.title;
  modalDescription.textContent = p.description || '';
  modalGenres.innerHTML = genreNamesFromIds(p.genres || []).map(n => `<span class="genre-badge">${n}</span>`).join(' ');

  // seasons
  modalSeasons.innerHTML = '';
  const seasonsInfo = getSeasonsForPodcast(p);
  if (!seasonsInfo) {
    modalSeasons.innerHTML = `<li>Seasons: ${p.seasons || 'Unknown'}</li>`;
  } else if (seasonsInfo.type === 'count') {
    modalSeasons.innerHTML = `<li>Total Seasons: ${seasonsInfo.data}</li>`;
  } else if (seasonsInfo.type === 'details') {
    // show each season title & episodes if available
    seasonsInfo.data.forEach(sd => {
      const epText = sd.episodes !== undefined ? ` — ${sd.episodes} ep` : '';
      const li = document.createElement('li');
      li.textContent = `${sd.title}${epText}`;
      modalSeasons.appendChild(li);
    });
  }

  modalUpdated.textContent = p.updated ? `Updated: ${new Date(p.updated).toLocaleDateString()}` : '';

  // show modal
  backdrop.hidden = false;
  modal.hidden = false;
  backdrop.style.display = 'block';
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
  modal.focus();
}

function closeModal() {
  backdrop.hidden = true;
  modal.hidden = true;
  backdrop.style.display = 'none';
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

/* Filtering + sorting logic */
function filterSortAndRender() {
  let list = shuffled(podcasts); // scatter base list each render for that 'scattered' look

  const q = (searchInput.value || '').trim().toLowerCase();
  const genreVal = genreFilter.value;
  const sortVal = sortFilter.value;

  // Search across title & description
  if (q) {
    list = list.filter(p => {
      return (p.title && p.title.toLowerCase().includes(q)) ||
             (p.description && p.description.toLowerCase().includes(q));
    });
  }

  // Genre filter (genreVal is 'all' or numeric string)
  if (genreVal && genreVal !== 'all') {
    const gid = Number(genreVal);
    list = list.filter(p => Array.isArray(p.genres) && p.genres.includes(gid));
  }

  // Sort
  if (sortVal === 'recent') {
    list.sort((a,b)=> new Date(b.updated || 0) - new Date(a.updated || 0));
  } else if (sortVal === 'seasons') {
    // Use seasons count from seasons array if available else podcast.seasons
    function getCount(p) {
      const s = getSeasonsForPodcast(p);
      if (s && s.type === 'count') return s.data;
      if (s && s.type === 'details') return s.data.length;
      return p.seasons || 0;
    }
    list.sort((a,b)=> getCount(b) - getCount(a));
  } else if (sortVal === 'title') {
    list.sort((a,b)=> (a.title || '').localeCompare(b.title || ''));
  }

  renderPodcasts(list);
}

/* Event listeners */
searchInput.addEventListener('input', () => filterSortAndRender());
genreFilter.addEventListener('change', () => filterSortAndRender());
sortFilter.addEventListener('change', () => filterSortAndRender());
modalClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

/* Replace last podcast image with favoriteImage (optional) — safe-guard */
if (favoriteImage && podcasts.length) {
  const last = podcasts.length - 1;
  if (podcasts[last]) podcasts[last].image = favoriteImage;
}

/* Initial render */
filterSortAndRender();
