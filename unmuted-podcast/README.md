🎙️ UNMUTED Podcast App

A modular, scalable podcast web application built using Vanilla JavaScript and Modern Web Components.

UNMUTED is a podcast discovery platform focused on powerful conversations around identity, justice, healing, and lived experiences.

🚀 Project Overview

This project demonstrates:

Modular JavaScript architecture

Custom Elements (Web Components)

Shadow DOM encapsulation

Event-driven component communication

Clean separation of concerns

Maintainable and scalable frontend design

The application renders podcast previews in a responsive grid layout. Each preview is implemented as a reusable Web Component. When clicked, a modal Web Component displays detailed podcast information.

🧱 Architecture

The application follows a modular, component-based architecture:

src/
│
├── components/
│   ├── PodcastCard.js      → Custom Web Component (preview card)
│   ├── PodcastModal.js     → Custom Web Component (modal)
│
├── utils/
│   ├── DateUtils.js        → Date formatting utility
│   ├── GenreService.js     → Genre resolution service
│
├── views/
│   └── createGrid.js       → Grid rendering logic
│
├── data.js                 → Application data layer
└── index.js                → Application controller (entry point)

🧩 Web Components Implementation
1️⃣ <podcast-card>

Extends HTMLElement

Uses Shadow DOM for encapsulation

Receives podcast data via property

Dispatches a CustomEvent when clicked

Fully reusable and stateless

2️⃣ <podcast-modal>

Extends HTMLElement

Uses Shadow DOM

Receives podcast data via property

Dynamically renders podcast details

Manages open/close behavior internally

🔁 Event-Driven Architecture

Components communicate using Custom Events.

Flow:

PodcastCard click
   ↓
Dispatch "open-modal" event
   ↓
index.js listens for event
   ↓
PodcastModal receives podcast data
   ↓
Modal renders and opens


This ensures:

Loose coupling

Scalability

Maintainability

Clear separation of responsibilities

🎨 UI/UX Design Features

Responsive CSS Grid layout

Dark theme inspired by modern streaming platforms

Hover interactions for podcast cards

Encapsulated modal with scrollable content

Mobile-responsive layout adjustments

Human-readable date formatting

🛠️ Design Principles Applied
✅ Single Responsibility Principle (SRP)

Each module handles one concern:

Utilities handle formatting and data mapping

Components handle UI rendering

index.js handles orchestration

✅ Open/Closed Principle (OCP)

Components are extensible without modifying existing logic.

✅ Encapsulation

Shadow DOM ensures:

Styles do not leak

Component logic remains isolated

No global CSS interference

📦 Technologies Used

HTML5

CSS3 (Grid, Flexbox, Responsive Design)

ES6 Modules

Custom Elements API

Shadow DOM

Git & GitHub for version control

🧠 Learning Outcomes

This project demonstrates:

Building reusable UI components without frameworks

Implementing Web Components using Custom Elements

Managing state via property-driven components

Using event-driven communication patterns

Writing maintainable, documented JavaScript

🔮 Future Improvements

Genre filtering and sorting

Attribute-based component configuration

Accessibility improvements (ARIA roles)

Animations and micro-interactions

Backend integration for dynamic content

React wrapper for portfolio extension

👩🏽‍💻 Author

Developed as part of a modular JavaScript assignment demonstrating modern frontend architecture principles.