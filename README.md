# 🌐 Web Systems and Technologies Laboratory Activities

Welcome to my Web Systems and Technologies Laboratory repository! Here, you'll find my journey through creating dynamic and responsive web projects using HTML, CSS, and JavaScript. Each lab activity builds upon foundational knowledge of web development to create practical applications.

---

## 📒 Table of Contents
- [Lab 1: Class Schedule](#lab-1-class-schedule)
- [Lab 2: Personalized Vision Board](#lab-2-personalized-vision-board)
- [Lab 3: Word and Sentence Counter](#lab-3-word-and-sentence-counter)
- [Lab 4: Responsive Web Design](#lab-4-responsive-web-design)
- [Tools & Technologies Used](#-tools--technologies-used)
- [How to Use](#-how-to-use)
- [Author](#-author)
- [Acknowledgment](#-acknowledgment)

---

## 🗓️<a id="lab-1-class-schedule"></a> Lab 1: Class Schedule

### Overview
In this lab, I created a class schedule using **HTML only**. It displays weekly classes in a structured table format, highlighting class codes, descriptions, and timings. The project demonstrates the use of semantic tags, styling, and table attributes.

---

### 📌 Important Tags Used
- `<table>`: Creates the class schedule layout.
- `<tr>`: Defines each row of the table.
- `<td>` and `<th>`: Represents table cells and headers.
- `<style>`: Includes CSS styling directly in the HTML document.
- `<footer>`: Adds additional information about the class schedule at the bottom.
- `@import`: Imports fonts from Google Fonts for a visually appealing design.

---

### 👁️ Preview
The schedule includes:
- 🕒 **Timings**: (e.g., 8:00 AM - 10:00 AM).
- 📖 **Class Codes and Descriptions**: (e.g., IT 314 - Web Systems and Technologies).
- 🎨 **Styled Table**: Includes borders and header colors for better readability.

### 📸 Output
![Class Schedule](Laboratory%20Activities/Laboratory%20Activity%201%20-%2006-08-2024/html-tables-output.png)
*Simple Class Schedule*

## 🎨<a id="lab-2-personalized-vision-board"> Lab 2: Personalized Vision Board

### Overview
In this lab, I created a personalized vision board to display and organize various images, goals, and inspirations. The board is designed using **HTML** for structure and **CSS** for styling, with Flexbox used for creating a responsive and flexible layout.

---

### 📌 Relevant HTML Tags
- `<div>`: To structure and group different sections of the vision board.
- `<img>`: To display images representing goals and inspirations.
- `<h1>`, `<h2>`, `<p>`: For headings and descriptive text.
- `<footer>`: To include additional information at the bottom of the vision board.

---

### 📌 Relevant CSS Properties (Flexbox)
- `display: flex;`: To create a flexible layout structure.
- `flex-direction`: To specify the direction of the flex items (row or column).
- `justify-content`: To align items horizontally (e.g., center, space-between, flex-start).
- `align-items`: To align items vertically within the container.
- `flex-wrap`: To allow items to wrap onto multiple lines.
- `gap`: To add spacing between rows or columns.

---

### 👁️ Preview
The vision board includes:
- Inspirational **images** displayed using the `<img>` tag.
- **Headings** and **descriptive text** to provide context to each image.
- A **flexible layout** that adapts to different screen sizes.

### 📸 Output
![Vision Board](Laboratory%20Activities/Laboratory%20Activity%202%20-%20(04-10-24)/visionboard-output.png)
*My Vision Board*

---

## ✏️ <a id="lab-3-word-and-sentence-counter"></a> Lab 3: Word and Sentence Counter

### Overview
In this lab, I created a simple web application to count the number of words and sentences in a given input text. The application is designed using **HTML** for the structure and **CSS** for styling. **JavaScript** is used to handle the functionality of counting words and sentences in real-time as the user types in the input field.

---

### 📌 Relevant HTML Tags
- **`<input>`**: Captures the user input for text to be analyzed.
- **`<p>`**: Displays the word and sentence counts.

---

### 📌 Relevant JavaScript Functions

1. **`trim()`**  
   Removes leading and trailing whitespace from the input text to ensure that extra spaces do not interfere with the word and sentence counts.

2. **`split()`**  
   Splits the input text into words and sentences:
   - **For words**: The text is split into an array of words using spaces as the delimiter.
   - **For sentences**: The text is split based on sentence-ending punctuation marks like `.`, `!`, and `?`.

3. **`filter()`**  
   Filters out any empty strings that may result from multiple spaces or incorrect punctuation marks, ensuring accurate word and sentence counts.

4. **`addEventListener()`**  
   Adds an event listener to the text input field to detect any changes in the input and update the word and sentence counts dynamically.

---

### 👁️ Preview
This application provides:
- A **real-time word count** that updates as the user types.
- A **real-time sentence count** that updates as the user types.
- A responsive and user-friendly layout that works across different screen sizes.

### 📸 Output
![Word Counter Interface](Laboratory%20Activities/Laboratory%20Activity%203%20-%2019-11-24/word-sentence-ctr-output(image%20file).png)
*Word and Sentence Counter Application Interface*

### 🎥 Demo Video
![Word Counter Interface](Laboratory%20Activities/Laboratory%20Activity%203%20-%2019-11-24/word-sentence-ctr-output(gif%20file).gif)

*Watch the demo video to see the counter in action!*

---
## 📱<a id="lab-4-responsive-web-design"></a> Lab 4: Responsive Web Design

### Overview
In this lab, I created an interactive webpage featuring smooth animations, progress bars, continuous typing effects, and a dynamic timeline. The webpage is designed to be fully responsive, adapting to different screen sizes using **HTML**, **CSS**, and **JavaScript**.

---
### 📌 Relevant HTML Tags
- `<nav>`: Used for the navigation bar with links to different sections of the page.
- `<ul>`, `<li>`: Defines the unordered list of navigation links.
- `<section>`: Each section represents different content areas like skills, progress, and timeline.
- `<h1>`, `<p>`: Headings and paragraphs for content display.
- `<div>`: A container element used for various content sections (e.g., skill items, progress bars).
---
### 📌 Relevant CSS Properties and Techniques for Responsiveness:
- `@media`: Media queries used for adapting the layout based on screen size. For instance:
  - `@media (max-width: 768px)`: Adjusts layout when the screen width is 768px or less.
  - `@media (max-width: 480px)`: Further tweaks the layout for screens that are 480px or smaller.
  
- **Flexbox**: `display: flex;` and `justify-content: center;` used in the navigation bar and layout for aligning elements.
- **Percent-based Width**: Ensures elements like sections are responsive and adjust according to the screen size, e.g., `width: 100%;` or `padding: 10%`.
- **`transform`**: Used for animations like scaling elements on hover (e.g., `.skill-item:hover`).
---
### 📌 JavaScript Functions for Interactivity:
- `addEventListener()`: Adds interactivity by listening for events such as clicks and mouse enters for hover effects.
- `setTimeout()`: Used to create delays in animations or actions, such as the continuous typing effect and progress bar animation.
- `scrollIntoView()`: Smooth scrolling to different sections when navigation links are clicked.
- `IntersectionObserver`: Detects when elements come into view, triggering animations like timeline content fading in.
---
### 👁️ Preview of Responsiveness:
- **Navigation**: The navigation bar becomes vertical and centered on smaller screens, ensuring that links are still accessible without overlapping.
- **Skill Items**: The skill items are displayed in a row on larger screens and stack vertically on smaller screens, with appropriate spacing between them.
- **Hero Section**: The text size adjusts based on the screen width to ensure the hero section remains readable on all devices.
- **Progress Bars**: Adjust their height and animation speed for smaller screens to ensure they fit within the screen properly.
- **Timeline**: The content fades in as you scroll, with markers scaling and rotating when hovered.


### 📸 Output
![Personal Page](/Laboratory%20Activities/Laboratory%20Activity%204%20-%2029-11-24/personal-page-output%20(image%20file).png)
*My Personal Page*


### 🎥 Demo Video

![Personal Page](/Laboratory%20Activities/Laboratory%20Activity%204%20-%2029-11-24/personal-page-output%20(video%20file).gif)

*Showing Interactivity in my Personal Page*


---
### Additional Features for Interactivity:
- **Hover Effects**: Skills and social media buttons change visually when hovered over, thanks to CSS `transform` and `background-color` properties.
- **Continuous Typing Effect**: The text in the hero section types out continuously in a loop, utilizing JavaScript to manipulate the inner text of an element.
---

## 🛠️ Tools & Technologies Used
- **HTML5**: To structure web content effectively.
- **CSS3**: For styling, layouts, and responsiveness.
- **JavaScript**: To add interactivity and dynamic functionality.
- **Google Fonts**: To enhance typography and visual appeal.
---

## 🚀 How to Use

1. **Clone this repository**:
   ```bash
   git clone https://github.com/your-username/web-systems-labs.git
---

## 👩‍💻 Author
- **Sherivic Dimagculang, A 3rd year Computer Science student**  
- **First Semester, AY 2024-2025**  
- Aspiring web developer exploring the endless possibilities of technology.💻✨💖

---

## 🎓 Acknowledgment
I would like to express my heartfelt gratitude to my adviser, **Ma'am Fatima Marie Agdon**, for her invaluable guidance and support throughout this journey. Your mentorship has been instrumental in developing my skills and confidence in web development.🌸🌟💕

---

## 🧡 Thank You!
Thank you for taking the time to explore my lab activities! I hope you find them informative and inspiring. Your feedback and suggestions are always welcome. 😊

> "Coding is the language of the future, and I'm just getting started!"

---
This README provides an overview of each lab activity and showcases the skills learned through hands-on projects. Enjoy exploring the labs!
