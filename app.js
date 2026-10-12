document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.getElementById('code-input');
    const codeOutput = document.getElementById('code-output');
    const languageSelect = document.getElementById('language-select');
    const bgColorInput = document.getElementById('bg-color');
    const colorHex = document.getElementById('color-hex');
    const exportContainer = document.getElementById('export-container');
    const exportBtn = document.getElementById('export-btn');

    const grammarMap = {
        'javascript': 'javascript',
        'python': 'python',
        'php': 'php',
        'sql': 'sql',
        'html': 'markup', 
        'css': 'css'
    };

    const sampleSnippets = {
        'javascript': `const generateImage = () => {\n  console.log("Syntax highlighting is now perfect!");\n};\n\ngenerateImage();`,
        'python': `def generate_image():\n    print("Syntax highlighting is now perfect!")\n\ngenerate_image()`,
        'php': `<?php\n\nfunction generateImage() {\n    echo "Syntax highlighting is now perfect!";\n}\n\ngenerateImage();`,
        'sql': `SELECT id, name, status\nFROM developer_tools\nWHERE status = 'perfect'\nORDER BY id DESC;`,
        'html': `<div class="code-snap">\n  <h1>Beautiful Code Images</h1>\n  <p>Syntax highlighting is perfect!</p>\n</div>`,
        'css': `.code-snap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #8b5cf6;\n  border-radius: 8px;\n}`
    };

    const updateCode = () => {
        const rawCode = codeInput.value;
        const language = languageSelect.value;
        const prismLanguage = grammarMap[language];
        
        codeOutput.className = '';
        codeOutput.classList.add(`language-${prismLanguage}`);
        
        const escapedCode = rawCode
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

        codeOutput.innerHTML = escapedCode;
        Prism.highlightElement(codeOutput);
    };

    const updateBackground = () => {
        const color = bgColorInput.value;
        exportContainer.style.backgroundColor = color;
        colorHex.textContent = color;
    };

    const exportImage = async () => {
        const originalBtnText = exportBtn.innerHTML;
        exportBtn.innerHTML = 'Generating...';
        exportBtn.disabled = true;

        try {
            await new Promise(resolve => setTimeout(resolve, 100));

            const canvas = await html2canvas(exportContainer, {
                scale: 3, 
                backgroundColor: null,
                logging: false,
                useCORS: true,
                allowTaint: true
            });

            const link = document.createElement('a');
            link.download = `codesnap-${new Date().getTime()}.png`;
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();
        } catch (error) {
            console.error('Error generating image:', error);
            alert('Failed to export image. Please try again.');
        } finally {
            exportBtn.innerHTML = originalBtnText;
            exportBtn.disabled = false;
        }
    };

    codeInput.addEventListener('input', updateCode);
    
    languageSelect.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        codeInput.value = sampleSnippets[selectedLanguage];
        updateCode();
    });

    bgColorInput.addEventListener('input', updateBackground);
    exportBtn.addEventListener('click', exportImage);

    // Initialize with default sample code
    codeInput.value = sampleSnippets[languageSelect.value];
    updateCode();
});
