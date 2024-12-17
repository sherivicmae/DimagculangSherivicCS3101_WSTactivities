# 🌟 Web Systems Laboratory Activities

Welcome to my Web Systems Laboratory repository! Here, you'll find my journey through creating dynamic and responsive web projects using HTML, CSS, and JavaScript. Each lab activity builds upon foundational knowledge of web development to create practical applications.

---

## 📋 Table of Contents
- [Lab 1: Class Schedule](#lab-1-class-schedule)
- [Lab 2: Personalized Vision Board](#lab-2-personalized-vision-board)
- [Lab 3: Word and Sentence Counter](#lab-3-word-and-sentence-counter)
- [Lab 4: Responsive Web Design](#lab-4-responsive-web-design)

---

## 🗓️ Lab 1: Class Schedule

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
- 📖 **Class Codes and Descriptions**: (e.g., IT 321 - Human-Computer Interaction).
- 🎨 **Styled Table**: Includes borders and header colors for better readability.

## 🎨 Lab 2: Personalized Vision Board

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

---

## 🗓️ Lab 3: Word and Sentence Counter

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

---
