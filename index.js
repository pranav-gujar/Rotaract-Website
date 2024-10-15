//typing effect
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.animated-text');
    let text = textElement.textContent;
    let newText = '';
    let index = 0;
  
    function typeText() {
        if (index < text.length) {
            newText += text[index];
            textElement.textContent = newText;
            index++;
            setTimeout(typeText, 100);
        }
    }
  
    textElement.textContent = '';
    typeText();
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.animated-text');
    let text = textElement.textContent;
    let newText = '';
    let index = 0;
  
    function typeText() {
        if (index < text.length) {
            newText += text[index];
            textElement.textContent = newText;
            index++;
            setTimeout(typeText, 100);
        }
    }
  
    textElement.textContent = '';
    typeText();
  });