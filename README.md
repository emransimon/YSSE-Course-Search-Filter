# YSSE Course Search & Filter System — Stage of Innovation Edition

A modern, responsive course catalogue built for the **YSSE IT Department (Web Development & CMS Wing)**, styled using the official visual identity and theme inspired by **[YSSE Global](https://ysseglobal.org/)** (*Youth School for Social Entrepreneurs — Stage of Innovation*).

Built with **vanilla HTML5, CSS3, and JavaScript (ES6+)** with **zero external libraries or build dependencies**.

---

## 🎨 Brand Design Tokens & Identity

The interface implements YSSE's green identity:

| Token Name | Value | Purpose |
| :--- | :--- | :--- |
| **Primary Green** | `#126B4B` | Brand identity, primary buttons, logo badge, hero accents |
| **Accent Green** | `#35B985` | Hover indicators, live badges, glowing status dots |
| **Soft Green** | `#E8FCF4` | Interactive pill backgrounds, tags, hover highlights |
| **Page Background** | `#F5F8F6` | Clean, low-glare canvas |
| **Heading Color** | `#182C20` | High-contrast typography for readability |
| **Muted Text** | `#89949E` | Secondary metadata and labels |
| **Border Color** | `#DCEBE3` | Subtle, accessible container separators |
| **Display Font** | `Space Grotesk` | Modern geometric headings & statistics |
| **Body Font** | `Plus Jakarta Sans` | Clean legibility for descriptions and labels |

---

## ✨ Features & Micro-Interactions

1. **Unified Multi-Criteria Filtering Engine (Boolean AND)**:
   - Live partial keyword search (titles, keywords, and descriptions).
   - Category filter dropdown.
   - Difficulty level dropdown.
   - All three operate simultaneously without overwriting one another.
2. **Interactive Quick Category Pill Tabs**:
   - Single-click track filtering (`All Tracks`, `Web Development`, `Programming`, `Graphic Design`, `Digital Marketing`, `Data Science`).
   - Automatically synchronized with the category dropdown.
3. **Quick Search Keyword Chips**:
   - Clickable suggestion chips (`Python`, `Web`, `Figma`, `SEO`, `Machine Learning`) that pre-fill the search box and trigger instant filtering.
4. **Interactive Course Quick-Preview Modal**:
   - Clicking any course card or `"View Course →"` triggers a modal detailing course duration, certification, curriculum tags (`#python`, `#pandas`), and an action button.
   - Keyboard accessible (`Esc` key closes, `Enter` opens).
5. **Interactive Course Bookmarks**:
   - Star any course directly from its card or modal.
   - Live bookmark counter in the navigation bar (`Saved (X)`).
   - Click the header button to toggle a filtered view of bookmarked courses.
6. **Toast Notifications**:
   - Non-intrusive feedback when saving courses, clearing filters, or enrolling.
7. **Dynamic Counter & Active Filters Area**:
   - Real-time count of displayed courses with `aria-live="polite"` support.
   - Visual chips for currently active filters.
8. **Friendly Empty State**:
   - Informative zero-results container with an illustration and one-click reset button.
9. **Fully Responsive Grid Layout**:
   - **Desktop (1440px+)**: 4 cards per row.
   - **Laptop (1024px – 1359px)**: 3 cards per row.
   - **Tablet (768px)**: 2 cards per row.
   - **Mobile (390px)**: 1 card per row, zero horizontal overflow.

---

## 📁 File Structure

```text
Week5_Course_Search_Filter/
├── index.html        # Semantic HTML structure, modal & accessible forms
├── style.css         # YSSE Stage of Innovation design system & tokens
├── script.js         # Course data (15 records), filtering pipeline & interactions
└── README.md         # Comprehensive documentation & setup instructions
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
Double-click `index.html` in Windows Explorer or right-click `index.html` &rarr; choose **Open With** &rarr; your favorite browser (Chrome, Edge, Firefox).

### Option 2: Python HTTP Server
```powershell
python -m http.server 8000
```
Navigate to `http://localhost:8000` in your web browser.

---

## 🧪 JavaScript Concepts Demonstrated

- **Immutability & Variables**: `const` for DOM selections and datasets, `let` for conditional flags.
- **Array Methods**: `filter()`, `forEach()`, `some()`, `map()`, `includes()`.
- **String Handling**: `trim()`, `toLowerCase()`, `includes()`.
- **DOM Methods**: `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()`, `document.createElement()`, `document.createDocumentFragment()`.
- **XSS Prevention**: Safe text node population using `textContent`.
- **Event Delegation**: Handling `input`, `change`, `click`, and keyboard `Escape` events.
