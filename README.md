# 🧱 Dev Stack Builder

Dev Stack Builder is a simple web app for developers to explore technologies and build their own tech stack.

## 🚀 Tech Stack Used

- React.js (Vite)
- TypeScript
- Tailwind CSS & DaisyUI
- React-Toastify
- JSON Data

## ✨ Main Features

1. **Tech Grid:** Show tech items with icon, rating, category and badge.
2. **Add to Stack:** Add items to custom stack and prevent duplicate items.
3. **Remove Items:** Delete single item or clear full stack with toast alert.

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX is a mix of HTML and JavaScript. We use it in React because writing HTML code directly inside JavaScript functions makes building UI very easy and simple.

### 2. What is the difference between props and state?
**Answer:** 
- **Props:** Data sent from parent to child component. It is read-only and cannot be changed by child.
- **State:** Internal data inside a component. When state changes, component re-renders to show update on UI.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** `useState` helps to store dynamic data in React. In my project I used `useState` in `App.tsx` for keeping technology list, selected stack items, and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` runs code when component loads on screen. I used it for fetching `technologies.json` data once when the app starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the unique `key` prop to identify which items in a list have been changed, added, or removed. It helps React update only the specific changed DOM elements efficiently instead of re-rendering the entire list from scratch.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Answer:** Conditional rendering means showing different UI based on condition. In `StackSidebar.tsx`, if `stack.length === 0` it shows "Your stack is empty", otherwise it shows the added tech list.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:** 
- **Parent to Child:** Parent passes data using `props`.
- **Child to Parent:** Parent passes a function to child as prop. When child calls that function with data, parent receives it.