# CodeSnap 📸

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

**CodeSnap** is a free, open-source browser utility designed to transform raw source code into beautiful, shareable images. Perfect for social media posts, developer documentation, presentations, and tutorials.

🌍 **Live Demo:** [View CodeSnap Here](https://iqbalzams.github.io/CodeSnap/) *(Update this link once hosted!)*

## ✨ Features

- **Real-Time Rendering:** Type or paste your code and see the visual output instantly.
- **Accurate Syntax Highlighting:** Powered by Prism.js, supporting JavaScript, Python, PHP, SQL, HTML, and CSS.
- **Customizable Aesthetics:** Change the background color to match your brand. Includes a beautiful macOS-style window frame.
- **High-Resolution Export:** Captures the DOM at 3x scale using HTML5 Canvas for crisp, blur-free text.
- **100% Client-Side:** Privacy-first. No server calls are made; your proprietary code never leaves your browser.
- **SEO Optimized:** Built with semantic HTML and rich Schema.org JSON-LD structured data.

## 🚀 Quick Start (Local Development)

Since CodeSnap is a purely client-side Single Page Application (SPA), no build tools or package managers are required.

- **Clone the repository:** 
  ```bash
  git clone [https://github.com/your-github-username/codesnap.git](https://github.com/your-github-username/codesnap.git)

 ## 🚀 Getting Started

### Run Locally

1. **Navigate to the project directory:**

   ```bash
   cd codesnap
   ```

2. **Open in your browser:**

   Double-click the `index.html` file to open it in your browser, or use an extension such as [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to serve the project locally.

## 🛠️ Built With

- [**Prism.js**](https://prismjs.com/) — Lightweight, robust, and elegant syntax highlighting.
- [**html2canvas**](https://html2canvas.hertzen.com/) — Captures screenshots of HTML elements directly in the browser using JavaScript.

## 🤝 Contributing

Contributions, bug reports, issues, and feature requests are welcome! If you'd like to add support for a new programming language, follow these steps:

1. **Add the language:** Add a new option to the `<select>` dropdown in `index.html`.
2. **Map the grammar:** Update the `grammarMap` object in `app.js` with the corresponding Prism.js grammar.
3. **Add a code snippet:** Add a sample code snippet to the `sampleSnippets` object in `app.js`.
4. **Include the language script:** Add the appropriate Prism.js language component script tag at the bottom of `index.html`.

Please ensure your changes are tested before submitting a pull request.

## 📜 License

This project is distributed under the [MIT License](LICENSE). See the `LICENSE` file for details.

---

**Developed with ❤️ by Muhammad Iqbal at [AABI Tech](https://aabitech.com)**
