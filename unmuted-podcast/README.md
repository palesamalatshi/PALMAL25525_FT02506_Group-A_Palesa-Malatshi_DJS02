# 🎧 MyPodcastApp — DJS02 Vanilla JS Project

## 📖 Project Overview
**MyPodcastApp** is a modern, responsive podcast discovery web application built with **Vanilla JavaScript, HTML, and CSS**.  
It allows users to browse, search, filter, and sort through various podcasts — each with detailed descriptions, genres, and number of seasons.  
The app features a soft feminine glassmorphism theme to create a soothing, elegant user experience.

---

## 🧠 Learning Outcomes & Skills Demonstrated
This project demonstrates:
- **DOM Manipulation**: Dynamic creation of podcast cards and modal elements using JavaScript.
- **Data Handling**: Integration of separate `data.js` for structured podcast, genre, and season data.
- **Event Handling**: Interactive filtering, searching, and sorting functions with real-time updates.
- **UI/UX Design**: Responsive and accessible layout with a clean, aesthetic design.
- **JavaScript Logic**: Implementation of reusable functions for filtering and modal management.
- **Code Organization**: Separation of concerns (HTML, CSS, and JS) with well-commented code.

---

## 🎨 Design Inspiration
The app uses a **soft glass pink aesthetic** inspired by feminine design — balancing **minimalism** and **elegance**:
- Gradient pastel background  
- Translucent floating podcast cards with hover animation  
- Smooth shadows and rounded corners  
- Playful yet professional typography

---

## ⚙️ Features Implemented
✅ **Display Podcast Previews**  
- Dynamically loads podcasts from the `data.js` file.  
- Each card includes a title, image, short description, genre badges, and number of seasons.  

✅ **Search Functionality**  
- Users can search podcasts by title in real time.

✅ **Genre Filter**  
- Filters podcasts by category (e.g., Wellness, True Crime, Business).  

✅ **Sort Options**  
- Sorts podcasts by most recent, most seasons, or alphabetically.  

✅ **Modal Display**  
- Clicking a podcast opens a detailed modal with:
  - Large cover image  
  - Description  
  - Genre tags  
  - Season count  

✅ **Responsive Design**  
- Grid automatically adapts from 4 columns → 2 → 1 based on screen size.  

✅ **Scattered Layout**  
- Cards load with slight randomized rotation to create a playful, scrapbook-like layout.

✅ **Randomized Order**
- Podcasts shuffle on each reload for variety and a dynamic feel.

---

## 🧩 File Structure
📂 MyPodcastApp
│
├── index.html # Main HTML file
├── style.css # Main CSS file (Glass pink theme)
├── data.js # Podcast + genres + seasons data
└── app.js # JS logic for interactivity and filtering


---

## 🔍 How It Works
1. `data.js` provides arrays of podcasts and genres.  
2. `index.html` loads all structure and includes `<script src="data.js"></script>` before `app.js`.  
3. `app.js`:
   - Reads podcast data
   - Renders them as cards
   - Attaches event listeners for search, filter, and modal functions  
4. CSS gives the app its modern, glassy, feminine interface.

---

## 🧾 Rubric Alignment — DJS02
| Criteria | Description | Achieved |
|-----------|--------------|-----------|
| **P3.1** | Landing Page displays podcast previews dynamically | ✅ |
| **P3.2** | Podcasts are interactive, displaying detailed modal info | ✅ |
| **P3.3** | User can search and filter by genre | ✅ |
| **P3.4** | Podcasts can be sorted (recent, seasons, alphabetical) | ✅ |
| **P3.5** | Application is responsive and visually consistent | ✅ |
| **P3.6** | Data is loaded and used dynamically from external file | ✅ |

---

## 🧍🏽‍♀️ Developer
**Name:** Palesa Malatshi  
**Module:** DJS02 — Abstraction with Vanilla JavaScript  
**Institution:** [Your Institution Name Here]  
**Year:** 2025  

> “Building elegant experiences through creativity and clean code.”

---

## 💫 Future Improvements
- Add “favorite podcast” bookmarking system using localStorage.  
- Include pagination or “Load More” feature.  
- Fetch podcast data from a live API instead of a local JS file.  

---

## 🖼️ Preview
![Screenshot of MyPodcastApp UI](#)  
*(Add your screenshot here before submission!)*

---

## 🧩 Technologies Used
- **HTML5**
- **CSS3 (Glassmorphism + Responsive Grid)**
- **Vanilla JavaScript (ES6+)**
