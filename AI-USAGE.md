# AI Usage

This file documents how our group used AI during the development of **One Day or Day One?**. We used Claude and ChatGPT as supporting tools for development, debugging, reviewing, and understanding specific HTML and CSS problems. We reviewed the suggestions and decided which changes were appropriate for our project instead of automatically using everything AI suggested.

---

# Section 1 — How We Used AI

### 2026-09-20 — Repo and Hosting Setup

* **Tool:** Claude
* **What we asked for:** How to set up a GitHub repository and turn on GitHub Pages.
* **What it gave back:** A checklist of steps to follow, including creating the repository, enabling GitHub Pages, and adding collaborators.
* **What we kept, what we changed, and why:** We did the actual setup ourselves through GitHub's dashboard. We used Claude mainly as a step-by-step guide because we were still unfamiliar with some of the GitHub settings.
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/eb0daf92707091008ce72269f82bbdd1d849c29b

### 2026-09-20 — Documentation Structure

* **Tool:** Claude
* **What we asked for:** Help figuring out what sections our README needed.
* **What it gave back:** A suggested structure and outline based on the class requirements.
* **What we kept, what we changed, and why:** We used the suggested structure as a guide, but filled in the actual project information and details ourselves.
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/2c36e158f4c895b174480d5751c56e172926a332

### 2026-10-01 — Finishing the Home Page

* **Tool:** Claude
* **What we asked for:** Help fixing some CSS on the Home page and making the page work better on mobile.
* **What it gave back:** An updated `index.html` and a rewritten `style.css` that included CSS variables and responsive changes.
* **What we kept, what we changed, and why:** We did not use the whole suggested version. We kept our existing HTML and simplified the CSS to fit our project. We also changed some values ourselves to match our design.
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/4ec5bfe13c66882d9b5db98b1a87b632f10bafe9

### 2026-10-01 — Simplifying the CSS

* **Tool:** Claude
* **What we asked for:** A fixed version of `style.css` that would fit our Home page.
* **What it gave back:** A version of the styles rewritten using plain hex color codes and pixel values.
* **What we kept, what we changed, and why:** We kept most of our original CSS and only changed some values that needed adjustment for our actual homepage layout.
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/26906f17f5e4602c180969f831bc1235d446583a

### 2026-10-02 — Recommended Products Page Review

* **Tool:** ChatGPT
* **What we asked for:** To review our `recommended.html` page and check the HTML structure, product cards, external links, and navigation for possible errors.
* **What it gave back:** Suggestions for improving the structure and explanations of elements such as `target="_blank"`, `rel="noopener noreferrer"`, and the organization of the product links.
* **What we kept, what we changed, and why:** We kept most of our original HTML and links. We only applied changes that were relevant to our page and kept the existing card structure because it already matched the rest of the website.
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/40cc382fc827a328bdb00457304e3406c33cbc51

### 2026-10-02 — Mobile Layout for Recommended Products

* **Tool:** ChatGPT
* **What we asked for:** To help check the Recommended Products page on smaller screens and make sure the product cards, buttons, and spacing work properly on mobile.
* **What it gave back:** Suggestions for responsive CSS changes involving the card layout, button sizing, spacing, and mobile screen widths.
* **What we kept, what we changed, and why:** We kept the original design and applied only the CSS changes that helped the page fit better on mobile. We adjusted some of the suggested values ourselves so they matched the existing website design.
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/40cc382fc827a328bdb00457304e3406c33cbc51

---

# Section 2 — Where the AI Got It Wrong

### CSS Was More Complicated Than Needed

* **Tool:** Claude
* **What AI gave us:** AI suggested a rewritten CSS version that used CSS variables and made broader changes to the stylesheet.
* **What was wrong or unsuitable:** The suggested version was more complicated than what we needed for our project. It also changed parts of our existing CSS that were already working.
* **What we did instead:** We kept most of our original CSS and simplified the suggested changes by using the existing structure, plain color values, and pixel values that we could understand and adjust ourselves.
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/26906f17f5e4602c180969f831bc1235d446583a

### AI Rewrote More of the Home Page Than Necessary

* **Tool:** Claude
* **What AI gave us:** AI provided an updated version of the Home page and stylesheet while helping us fix the layout and make it more responsive.
* **What was wrong or unsuitable:** Some of the suggested changes would have replaced parts of our existing implementation even though those parts were already working. Using the whole response would also have made it harder for us to explain which parts were actually ours.
* **What we did instead:** We kept our existing HTML structure and only used the responsive and CSS changes that were relevant to the problems we were trying to solve. We adjusted the values ourselves to fit our design.
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/4ec5bfe13c66882d9b5db98b1a87b632f10bafe9

### AI Suggestions Did Not All Match Our Existing Design

* **Tool:** ChatGPT
* **What AI gave us:** During the review of our Recommended Products page and its mobile layout, AI suggested several structural and CSS changes for the cards, buttons, spacing, and links.
* **What was wrong or unsuitable:** Not every suggested change was necessary because some of our existing HTML and design already worked correctly. Applying all of the suggestions would have changed the appearance of the page more than we wanted.
* **What we did instead:** We kept our existing card structure and applied only the changes that were relevant to the mobile layout and functionality. We also adjusted some suggested values ourselves to match the rest of the website.
* **Commit:** 

---

# Section 3 — Who Wrote What

## https://github.com/PotchiMavs - Homepage & Javascript

### Code I wrote myself

* **File:** `index.html`
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/4ec5bfe13c66882d9b5db98b1a87b632f10bafe9
* **What it does:** I worked on the Home page structure and content. I organized the main sections of the website and made sure the navigation connected the home page with the other pages.

### Another part I wrote myself

* **File:** `style.css`
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/26906f17f5e4602c180969f831bc1235d446583a
* **What it does:** I worked on the styling and layout of the website. I adjusted colors, spacing, sizing, and other CSS values so the design matched our home page.

### AI-assisted code I understand

* **File:** `style.css`
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/26906f17f5e4602c180969f831bc1235d446583a
* **What AI helped with:** Claude helped suggest CSS changes and a cleaner version of the stylesheet.
* **What I understand:** I understand how the CSS selectors apply styles to the HTML elements, how properties such as `padding`, `margin`, `font-size`, `width`, and `display` affect the layout, and why I changed some of the suggested values instead of copying the whole response.

---

## https://github.com/erichmusngi10 — Supplements & Equipment

### Code I wrote myself

* **File:** `supplements.html`
* **Commit:** 
* **What it does:** I create and organized the Supplements & Equipment page. The page contains separate sections for basic supplements and gym equipment, with cards containing descriptions and additional information.

### Another part I wrote myself

* **File:** `supplements.html`
* **Commit:** 
* **What it does:** I work on the expandable `<details>` and `<summary>` elements. These allow users to click "more details" and view additional information without needing a separate page.

### AI-assisted code I understand

* **File:** `supplements.html` / `style.css`
* **Commit:** 
* **What AI helped with:** ChatGPT helped review the HTML structure and check how the page could work better on smaller screens.
* **What I understand:** I understands how the html is organized into sections and cards and how elements such as `<details>` and `<summary>` work. And also understands how responsive CSS can change the card layout and spacing on smaller screens.

---

## https://github.com/felicitydelacruz — Recommended Products

### Code I wrote myself

* **File:** `recommended.html`
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/40cc382fc827a328bdb00457304e3406c33cbc51
* **What it does:** I created and organized the Recommended Products page. It contains recommended supplements and equipment, each displayed using a card with a description and a "buy here" link.

### Another part I wrote myself

* **File:** `recommended.html`
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/40cc382fc827a328bdb00457304e3406c33cbc51
* **What it does:** I added and organized the external product links and "buy here" buttons. The links use `target="_blank"` so the external page opens in a new tab.

### AI-assisted code I understand

* **File:** `recommended.html` / `style.css`
* **Commit:** https://github.com/PotchiMavs/one-day-or-day-one/commit/40cc382fc827a328bdb00457304e3406c33cbc51
* **What AI helped with:** ChatGPT helped review the product page structure, external links, and mobile layout.
* **What I understand:** Understands how the product cards are structured in HTML, how `<a>` elements create links, and how `target="_blank"` opens a link in a new tab. And also understands the purpose of `rel="noopener noreferrer"` and the responsive CSS changes used to improve the page on smaller screens.
