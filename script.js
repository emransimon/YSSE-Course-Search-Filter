"use strict";

/* ==============================================================================
   1. Course Dataset
   15 structured sample courses across 5 categories and 3 difficulty levels.
   ============================================================================== */
const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    category: "Web Development",
    description: "Learn the foundational pillars of the web: semantic HTML5, modern CSS3 styling, and responsive layout techniques from scratch.",
    level: "Beginner",
    duration: "4 Weeks",
    keywords: ["html", "css", "web", "frontend", "beginner", "responsive", "internet"],
    visual: "🌐",
    featured: true
  },
  {
    id: 2,
    title: "Advanced Web Design",
    category: "Web Development",
    description: "Master advanced CSS Grid layouts, Flexbox architectures, CSS animations, modern typography, and complex responsive design patterns.",
    level: "Advanced",
    duration: "6 Weeks",
    keywords: ["css", "grid", "responsive", "ui", "animation", "flexbox", "web", "design"],
    visual: "🎨",
    featured: false
  },
  {
    id: 3,
    title: "Frontend Development",
    category: "Web Development",
    description: "Build interactive, dynamic user interfaces using modern JavaScript, DOM manipulation, asynchronous programming, and REST APIs.",
    level: "Intermediate",
    duration: "8 Weeks",
    keywords: ["javascript", "dom", "ui", "web", "frontend", "api", "es6", "interactivity"],
    visual: "⚡",
    featured: true
  },
  {
    id: 4,
    title: "Python Programming Foundations",
    category: "Programming",
    description: "Kickstart your coding journey with Python. Learn core programming logic, variables, loops, control structures, and basic algorithms.",
    level: "Beginner",
    duration: "5 Weeks",
    keywords: ["python", "syntax", "algorithms", "coding", "beginner", "scripting", "logic"],
    visual: "🐍",
    featured: true
  },
  {
    id: 5,
    title: "Object-Oriented Programming with Java",
    category: "Programming",
    description: "Deep dive into OOP principles: encapsulation, inheritance, polymorphism, and abstraction with robust Java enterprise practices.",
    level: "Intermediate",
    duration: "7 Weeks",
    keywords: ["java", "oop", "backend", "classes", "inheritance", "software", "programming"],
    visual: "☕",
    featured: false
  },
  {
    id: 6,
    title: "Algorithms & Data Structures in C++",
    category: "Programming",
    description: "Tackle competitive programming and technical interviews by mastering trees, graphs, sorting algorithms, and dynamic programming.",
    level: "Advanced",
    duration: "10 Weeks",
    keywords: ["c++", "algorithms", "data structures", "performance", "trees", "graphs", "interview"],
    visual: "⚙️",
    featured: false
  },
  {
    id: 7,
    title: "Graphic Design Essentials",
    category: "Graphic Design",
    description: "Understand the core visual grammar: color theory, layout composition, typography rules, and vector illustration principles.",
    level: "Beginner",
    duration: "4 Weeks",
    keywords: ["graphic design", "photoshop", "illustrator", "typography", "layout", "visual", "colors"],
    visual: "✏️",
    featured: false
  },
  {
    id: 8,
    title: "UI/UX Design & Prototyping in Figma",
    category: "Graphic Design",
    description: "Design intuitive user experiences and polished digital interfaces. Conduct user research, build wireframes, and create interactive Figma prototypes.",
    level: "Intermediate",
    duration: "6 Weeks",
    keywords: ["figma", "ui", "ux", "wireframe", "prototype", "design", "user experience"],
    visual: "📱",
    featured: true
  },
  {
    id: 9,
    title: "Brand Identity & Visual Strategy",
    category: "Graphic Design",
    description: "Create memorable brand identities, scalable design systems, style guides, and comprehensive visual communication assets for brands.",
    level: "Advanced",
    duration: "6 Weeks",
    keywords: ["branding", "identity", "logo", "design system", "visual", "creative direction"],
    visual: "🎯",
    featured: false
  },
  {
    id: 10,
    title: "Digital Marketing Fundamentals",
    category: "Digital Marketing",
    description: "Explore the modern marketing landscape including search engine optimization (SEO), social media strategy, email campaigns, and content marketing.",
    level: "Beginner",
    duration: "4 Weeks",
    keywords: ["seo", "social media", "marketing", "content", "digital", "branding", "growth"],
    visual: "📣",
    featured: false
  },
  {
    id: 11,
    title: "SEO Mastery & Content Strategy",
    category: "Digital Marketing",
    description: "Drive organic search traffic with on-page SEO, technical audits, competitive keyword research, backlink building, and high-impact copywriting.",
    level: "Intermediate",
    duration: "6 Weeks",
    keywords: ["seo", "google", "keywords", "content marketing", "copywriting", "organic search"],
    visual: "🔍",
    featured: true
  },
  {
    id: 12,
    title: "Performance Marketing & Analytics",
    category: "Digital Marketing",
    description: "Scale business revenue with paid search, Facebook and Google ads, conversion rate optimization (CRO), and Google Analytics 4 dashboards.",
    level: "Advanced",
    duration: "8 Weeks",
    keywords: ["ppc", "google ads", "meta ads", "analytics", "cro", "roi", "performance marketing"],
    visual: "📈",
    featured: false
  },
  {
    id: 13,
    title: "Data Science Fundamentals",
    category: "Data Science",
    description: "Uncover insights from raw data using exploratory data analysis, statistical methods, Python libraries (Pandas & NumPy), and basic charts.",
    level: "Beginner",
    duration: "6 Weeks",
    keywords: ["data science", "python", "statistics", "pandas", "numpy", "data analysis", "beginner"],
    visual: "📊",
    featured: true
  },
  {
    id: 14,
    title: "Machine Learning & Predictive Modeling",
    category: "Data Science",
    description: "Build supervised and unsupervised machine learning models with Scikit-Learn: linear regression, decision trees, random forests, and clustering.",
    level: "Intermediate",
    duration: "8 Weeks",
    keywords: ["machine learning", "ml", "python", "scikit-learn", "regression", "classification", "data"],
    visual: "🤖",
    featured: false
  },
  {
    id: 15,
    title: "Deep Learning & Neural Networks",
    category: "Data Science",
    description: "Design and train deep convolutional and recurrent neural networks for computer vision and NLP using PyTorch and TensorFlow.",
    level: "Advanced",
    duration: "10 Weeks",
    keywords: ["deep learning", "ai", "neural networks", "pytorch", "tensorflow", "nlp", "computer vision"],
    visual: "🧠",
    featured: false
  }
];

/* ==============================================================================
   2. DOM Element Selection
   ============================================================================== */
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const categorySelect = document.getElementById("categorySelect");
const levelSelect = document.getElementById("levelSelect");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");
const resultsCount = document.getElementById("resultsCount");
const coursesGrid = document.getElementById("coursesGrid");
const noResultsState = document.getElementById("noResultsState");
const noResultsResetBtn = document.getElementById("noResultsResetBtn");
const activeFiltersBadgeArea = document.getElementById("activeFiltersBadgeArea");

// Interactive Enhancement Elements
const savedFilterViewBtn = document.getElementById("savedFilterViewBtn");
const savedCount = document.getElementById("savedCount");
const courseModal = document.getElementById("courseModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const toastNotification = document.getElementById("toastNotification");
const toastMessage = document.getElementById("toastMessage");

/* State for interactive bookmarks and saved filter view */
const savedCourseIds = new Set();
let showOnlySaved = false;

/* ==============================================================================
   3. Helper Functions for Theme Class Mapping
   ============================================================================== */

/**
 * Returns the CSS class for category badges and thumbnail themes.
 * @param {string} category
 * @returns {string} CSS class
 */
function getCategoryClass(category) {
  switch (category) {
    case "Web Development":
      return "cat-web";
    case "Programming":
      return "cat-prog";
    case "Graphic Design":
      return "cat-design";
    case "Digital Marketing":
      return "cat-marketing";
    case "Data Science":
      return "cat-data";
    default:
      return "cat-data";
  }
}

/**
 * Returns the CSS class for difficulty level badges.
 * @param {string} level
 * @returns {string} CSS class
 */
function getLevelClass(level) {
  switch (level) {
    case "Beginner":
      return "level-beginner";
    case "Intermediate":
      return "level-intermediate";
    case "Advanced":
      return "level-advanced";
    default:
      return "level-beginner";
  }
}

/* ==============================================================================
   4. Thumbnail Builder Function
   Safe dynamic creation of course thumbnail placeholder element.
   ============================================================================== */

/**
 * Builds the visual thumbnail container element for a course card.
 * @param {Object} course - Course object
 * @returns {HTMLElement} Created thumbnail container element
 */
function getCourseThumbnail(course) {
  const thumbnailContainer = document.createElement("div");
  thumbnailContainer.className = `course-thumbnail ${getCategoryClass(course.category)}`;

  // Subtle geometric background texture overlay
  const patternOverlay = document.createElement("div");
  patternOverlay.className = "thumbnail-pattern";
  patternOverlay.setAttribute("aria-hidden", "true");
  thumbnailContainer.appendChild(patternOverlay);

  // Center visual badge containing emoji/symbol
  const visualBadge = document.createElement("div");
  visualBadge.className = "visual-badge";
  visualBadge.textContent = course.visual;
  visualBadge.setAttribute("aria-hidden", "true");
  thumbnailContainer.appendChild(visualBadge);

  // Featured badge if applicable
  if (course.featured) {
    const featuredBadge = document.createElement("span");
    featuredBadge.className = "featured-badge";
    featuredBadge.textContent = "★ Featured";
    thumbnailContainer.appendChild(featuredBadge);
  }

  // Interactive card bookmark button
  const bookmarkBtn = document.createElement("button");
  bookmarkBtn.type = "button";
  bookmarkBtn.className = `card-bookmark-btn ${savedCourseIds.has(course.id) ? "saved" : ""}`;
  bookmarkBtn.setAttribute("aria-label", savedCourseIds.has(course.id) ? "Remove from saved courses" : "Save course");
  bookmarkBtn.setAttribute("title", savedCourseIds.has(course.id) ? "Saved" : "Save Course");
  bookmarkBtn.textContent = savedCourseIds.has(course.id) ? "★" : "☆";

  bookmarkBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent opening the modal
    toggleSaveCourse(course.id);
  });

  thumbnailContainer.appendChild(bookmarkBtn);
  return thumbnailContainer;
}

/* ==============================================================================
   5. Dynamic Card Creation
   Constructs card nodes cleanly using document.createElement and textContent.
   ============================================================================== */

/**
 * Creates and returns an article element representing a single course card.
 * @param {Object} course - The course object
 * @returns {HTMLElement} The course card element
 */
function createCourseCard(course) {
  const card = document.createElement("article");
  card.className = "course-card";
  card.setAttribute("data-course-id", String(course.id));
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `View details for ${course.title}`);

  // 1. Thumbnail
  const thumbnailEl = getCourseThumbnail(course);
  card.appendChild(thumbnailEl);

  // 2. Card Content Wrapper
  const contentWrapper = document.createElement("div");
  contentWrapper.className = "course-content";

  // 2a. Meta Bar: Category and Difficulty Badges
  const metaBar = document.createElement("div");
  metaBar.className = "course-meta-top";

  const categoryBadge = document.createElement("span");
  categoryBadge.className = `category-badge ${getCategoryClass(course.category)}`;
  categoryBadge.textContent = course.category;

  const levelBadge = document.createElement("span");
  levelBadge.className = `level-badge ${getLevelClass(course.level)}`;
  levelBadge.textContent = course.level;

  metaBar.appendChild(categoryBadge);
  metaBar.appendChild(levelBadge);
  contentWrapper.appendChild(metaBar);

  // 2b. Course Title (h3 for semantic hierarchy)
  const title = document.createElement("h3");
  title.className = "course-title";
  title.textContent = course.title;
  contentWrapper.appendChild(title);

  // 2c. Course Description
  const description = document.createElement("p");
  description.className = "course-description";
  description.textContent = course.description;
  contentWrapper.appendChild(description);

  // 2d. Course Footer: Duration & Link Label
  const footer = document.createElement("div");
  footer.className = "course-footer";

  const durationSpan = document.createElement("span");
  durationSpan.className = "course-duration";

  const clockIcon = document.createElement("span");
  clockIcon.className = "duration-icon";
  clockIcon.textContent = "⏱️";
  clockIcon.setAttribute("aria-hidden", "true");

  const durationText = document.createTextNode(` ${course.duration}`);
  durationSpan.appendChild(clockIcon);
  durationSpan.appendChild(durationText);

  const actionLabel = document.createElement("span");
  actionLabel.className = "course-action-label";
  actionLabel.textContent = "View Course →";

  footer.appendChild(durationSpan);
  footer.appendChild(actionLabel);
  contentWrapper.appendChild(footer);

  card.appendChild(contentWrapper);

  // Interactive Click to open Course Quick Details Modal
  card.addEventListener("click", function () {
    openCourseModal(course);
  });

  // Accessible Keyboard Support (Enter / Space opens modal)
  card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCourseModal(course);
    }
  });

  return card;
}

/* ==============================================================================
   6. Display Courses Function
   ============================================================================== */

/**
 * Renders the provided list of courses dynamically into the course grid.
 * @param {Array} courseList - Array of course objects
 */
function displayCourses(courseList) {
  // Clear previous rendered cards
  coursesGrid.innerHTML = "";

  if (courseList.length === 0) {
    coursesGrid.classList.add("hidden");
    noResultsState.classList.remove("hidden");
  } else {
    noResultsState.classList.add("hidden");
    coursesGrid.classList.remove("hidden");

    // Use DocumentFragment for batched DOM insertion
    const fragment = document.createDocumentFragment();
    courseList.forEach(function (course) {
      const cardElement = createCourseCard(course);
      fragment.appendChild(cardElement);
    });

    coursesGrid.appendChild(fragment);
  }
}

/* ==============================================================================
   7. Update Results Counter Function
   ============================================================================== */

/**
 * Updates result count text and screen reader announcements.
 * @param {number} count - Matching course count
 */
function updateResultsCount(count) {
  const totalCourses = courses.length;

  if (showOnlySaved) {
    resultsCount.innerHTML = `Showing <span class="results-count-number">${count}</span> saved course${count === 1 ? "" : "s"}`;
  } else if (count === totalCourses) {
    resultsCount.innerHTML = `Showing all <span class="results-count-number">${totalCourses}</span> courses`;
  } else if (count === 1) {
    resultsCount.innerHTML = `Showing <span class="results-count-number">1</span> course (filtered from ${totalCourses})`;
  } else {
    resultsCount.innerHTML = `Showing <span class="results-count-number">${count}</span> courses (filtered from ${totalCourses})`;
  }

  renderActiveFilterChips();
}

/**
 * Renders active filter summary chips.
 */
function renderActiveFilterChips() {
  if (!activeFiltersBadgeArea) return;

  activeFiltersBadgeArea.innerHTML = "";
  const searchTerm = searchInput.value.trim();
  const selectedCategory = categorySelect.value;
  const selectedLevel = levelSelect.value;

  const hasSearch = searchTerm !== "";
  const hasCategory = selectedCategory !== "all" && selectedCategory !== "";
  const hasLevel = selectedLevel !== "all" && selectedLevel !== "";

  if (!hasSearch && !hasCategory && !hasLevel && !showOnlySaved) {
    activeFiltersBadgeArea.classList.add("hidden");
    return;
  }

  activeFiltersBadgeArea.classList.remove("hidden");

  if (showOnlySaved) {
    const chip = document.createElement("span");
    chip.className = "active-filter-chip";
    chip.textContent = "Filter: Bookmarked Only";
    activeFiltersBadgeArea.appendChild(chip);
  }

  if (hasSearch) {
    const chip = document.createElement("span");
    chip.className = "active-filter-chip";
    chip.textContent = `Search: "${searchTerm}"`;
    activeFiltersBadgeArea.appendChild(chip);
  }

  if (hasCategory) {
    const chip = document.createElement("span");
    chip.className = "active-filter-chip";
    chip.textContent = `Category: ${selectedCategory}`;
    activeFiltersBadgeArea.appendChild(chip);
  }

  if (hasLevel) {
    const chip = document.createElement("span");
    chip.className = "active-filter-chip";
    chip.textContent = `Level: ${selectedLevel}`;
    activeFiltersBadgeArea.appendChild(chip);
  }
}

/* ==============================================================================
   8. Filter Courses Function (Unified AND Pipeline)
   ============================================================================== */

/**
 * Reads all active controls simultaneously and executes Boolean AND filtering.
 */
function filterCourses() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCategory = categorySelect.value;
  const selectedLevel = levelSelect.value;

  // Toggle inline search clear button
  if (clearSearchBtn) {
    if (searchInput.value.length > 0) {
      clearSearchBtn.classList.remove("hidden");
    } else {
      clearSearchBtn.classList.add("hidden");
    }
  }

  // Synchronize category pill button states with dropdown
  syncCategoryPills(selectedCategory);

  // Multi-condition AND filtering pipeline
  const filteredCourses = courses.filter(function (course) {
    // Condition 0: Saved Courses View
    if (showOnlySaved && !savedCourseIds.has(course.id)) {
      return false;
    }

    // Condition 1: Live Keyword Search
    let matchesSearch = true;
    if (query !== "") {
      const titleMatch = course.title.toLowerCase().includes(query);
      const descMatch = course.description.toLowerCase().includes(query);
      const keywordMatch = course.keywords.some(function (kw) {
        return kw.toLowerCase().includes(query);
      });
      matchesSearch = titleMatch || descMatch || keywordMatch;
    }

    // Condition 2: Category Filter
    let matchesCategory = true;
    if (selectedCategory !== "all" && selectedCategory !== "") {
      matchesCategory = course.category === selectedCategory;
    }

    // Condition 3: Difficulty Filter
    let matchesLevel = true;
    if (selectedLevel !== "all" && selectedLevel !== "") {
      matchesLevel = course.level === selectedLevel;
    }

    return matchesSearch && matchesCategory && matchesLevel;
  });

  displayCourses(filteredCourses);
  updateResultsCount(filteredCourses.length);
}

/* ==============================================================================
   9. Clear Filters Function
   ============================================================================== */

/**
 * Resets search input and dropdowns, then restores the entire course catalogue.
 */
function clearFilters() {
  searchInput.value = "";
  categorySelect.value = "all";
  levelSelect.value = "all";
  showOnlySaved = false;

  if (clearSearchBtn) {
    clearSearchBtn.classList.add("hidden");
  }

  syncCategoryPills("all");
  filterCourses();
  searchInput.focus();

  showToast("All filters have been reset.");
}

/* ==============================================================================
   10. Interactive Enhancements: Pills, Modal, Bookmarks & Toast
   ============================================================================== */

/**
 * Synchronizes the visual active state of quick category pills.
 * @param {string} currentCategory
 */
function syncCategoryPills(currentCategory) {
  if (typeof document.querySelectorAll !== "function") return;
  const pills = document.querySelectorAll(".category-pill");
  pills.forEach(function (pill) {
    const cat = pill.getAttribute("data-category");
    if (cat === currentCategory || (currentCategory === "" && cat === "all")) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
}

/**
 * Toggles course bookmark status.
 * @param {number} courseId
 */
function toggleSaveCourse(courseId) {
  if (savedCourseIds.has(courseId)) {
    savedCourseIds.delete(courseId);
    showToast("Course removed from saved bookmarks.");
  } else {
    savedCourseIds.add(courseId);
    showToast("Course saved to your bookmarks! ★");
  }

  // Update header counter
  if (savedCount) {
    savedCount.textContent = String(savedCourseIds.size);
  }

  // Re-render currently displayed courses to update bookmark icons
  filterCourses();
}

/**
 * Opens Course Quick Preview Modal.
 * @param {Object} course
 */
function openCourseModal(course) {
  if (!courseModal) return;

  const modalVisualIcon = document.getElementById("modalVisualIcon");
  const modalCategoryBadge = document.getElementById("modalCategoryBadge");
  const modalLevelBadge = document.getElementById("modalLevelBadge");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalDuration = document.getElementById("modalDuration");
  const modalKeywordsList = document.getElementById("modalKeywordsList");
  const modalBookmarkBtn = document.getElementById("modalBookmarkBtn");
  const modalEnrollBtn = document.getElementById("modalEnrollBtn");

  if (modalVisualIcon) modalVisualIcon.textContent = course.visual;
  if (modalCategoryBadge) {
    modalCategoryBadge.textContent = course.category;
    modalCategoryBadge.className = `category-badge ${getCategoryClass(course.category)}`;
  }
  if (modalLevelBadge) {
    modalLevelBadge.textContent = course.level;
    modalLevelBadge.className = `level-badge ${getLevelClass(course.level)}`;
  }
  if (modalTitle) modalTitle.textContent = course.title;
  if (modalDescription) modalDescription.textContent = course.description;
  if (modalDuration) modalDuration.textContent = course.duration;

  if (modalKeywordsList) {
    modalKeywordsList.innerHTML = "";
    course.keywords.forEach(function (kw) {
      const tag = document.createElement("span");
      tag.className = "modal-tag";
      tag.textContent = `#${kw}`;
      modalKeywordsList.appendChild(tag);
    });
  }

  if (modalBookmarkBtn) {
    const isSaved = savedCourseIds.has(course.id);
    modalBookmarkBtn.innerHTML = `<span class="bookmark-star">${isSaved ? "★" : "☆"}</span> <span>${isSaved ? "Saved" : "Save Course"}</span>`;
    modalBookmarkBtn.onclick = function () {
      toggleSaveCourse(course.id);
      const nowSaved = savedCourseIds.has(course.id);
      modalBookmarkBtn.innerHTML = `<span class="bookmark-star">${nowSaved ? "★" : "☆"}</span> <span>${nowSaved ? "Saved" : "Save Course"}</span>`;
    };
  }

  if (modalEnrollBtn) {
    modalEnrollBtn.onclick = function () {
      closeCourseModal();
      showToast(`Welcome! Enrolled in "${course.title}". Start your learning journey.`);
    };
  }

  courseModal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent body scroll behind modal
}

/**
 * Closes Course Quick Preview Modal.
 */
function closeCourseModal() {
  if (!courseModal) return;
  courseModal.classList.add("hidden");
  document.body.style.overflow = "";
}

/**
 * Displays a lightweight toast notification.
 * @param {string} msg
 */
function showToast(msg) {
  if (!toastNotification || !toastMessage) return;
  toastMessage.textContent = msg;
  toastNotification.classList.remove("hidden");

  // Clear existing timer if any
  if (window._toastTimeout) clearTimeout(window._toastTimeout);

  window._toastTimeout = setTimeout(function () {
    toastNotification.classList.add("hidden");
  }, 2800);
}

/* ==============================================================================
   11. Event Listeners Setup
   ============================================================================== */
function setupEventListeners() {
  // Live search input
  searchInput.addEventListener("input", filterCourses);

  // Category and level dropdown changes
  categorySelect.addEventListener("change", filterCourses);
  levelSelect.addEventListener("change", filterCourses);

  // Clear filters button
  clearFiltersBtn.addEventListener("click", clearFilters);

  // Clear search input button
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", function () {
      searchInput.value = "";
      clearSearchBtn.classList.add("hidden");
      filterCourses();
      searchInput.focus();
    });
  }

  // Reset button inside friendly empty state
  if (noResultsResetBtn) {
    noResultsResetBtn.addEventListener("click", clearFilters);
  }

  // Quick category pills bar
  if (typeof document.querySelectorAll === "function") {
    const pills = document.querySelectorAll(".category-pill");
    pills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        const selectedCat = pill.getAttribute("data-category");
        categorySelect.value = selectedCat;
        filterCourses();
      });
    });

    // Quick keyword suggestion chips
    const keywordChips = document.querySelectorAll(".keyword-chip");
    keywordChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        const term = chip.getAttribute("data-term");
        searchInput.value = term;
        filterCourses();
        searchInput.focus();
      });
    });

    // Footer Learning Track Quick Filter Links
    const footerTrackLinks = document.querySelectorAll(".footer-track-filter");
    footerTrackLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const trackCat = link.getAttribute("data-category");
        categorySelect.value = trackCat;
        filterCourses();
        const controlsPanel = document.querySelector(".controls-panel");
        if (controlsPanel && typeof controlsPanel.scrollIntoView === "function") {
          controlsPanel.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Quick category pills bar
  if (typeof document.querySelectorAll === "function") {
    const pills = document.querySelectorAll(".category-pill");
    pills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        const selectedCat = pill.getAttribute("data-category");
        categorySelect.value = selectedCat;
        filterCourses();
      });
    });

    // Quick keyword suggestion chips
    const keywordChips = document.querySelectorAll(".keyword-chip");
    keywordChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        const term = chip.getAttribute("data-term");
        searchInput.value = term;
        filterCourses();
        searchInput.focus();
      });
    });

    // Footer Learning Track Quick Filter Links
    const footerTrackLinks = document.querySelectorAll(".footer-track-filter");
    footerTrackLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const trackCat = link.getAttribute("data-category");
        categorySelect.value = trackCat;
        filterCourses();
        const controlsPanel = document.querySelector(".controls-panel");
        if (controlsPanel && typeof controlsPanel.scrollIntoView === "function") {
          controlsPanel.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Saved Courses Header Toggle
  if (savedFilterViewBtn) {
    savedFilterViewBtn.addEventListener("click", function () {
      showOnlySaved = !showOnlySaved;
      if (showOnlySaved && savedCourseIds.size === 0) {
        showToast("No courses bookmarked yet! Click the star on any card to save it.");
      }
      filterCourses();
    });
  }

  // Modal Close Events
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeCourseModal);
  }

  if (courseModal) {
    courseModal.addEventListener("click", function (event) {
      if (event.target === courseModal) {
        closeCourseModal();
      }
    });
  }

  if (typeof document.addEventListener === "function") {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && courseModal && !courseModal.classList.contains("hidden")) {
        closeCourseModal();
      }
    });
  }
}

/* ==============================================================================
   12. Application Initialization
   ============================================================================== */
function init() {
  setupEventListeners();
  displayCourses(courses);
  updateResultsCount(courses.length);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
