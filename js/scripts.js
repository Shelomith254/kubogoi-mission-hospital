document.addEventListener("DOMContentLoaded", () => {
  const chatbotBtn = document.getElementById("chatbotBtn");
  const chatBox = document.getElementById("chatBox");
  const closeChat = document.getElementById("closeChat");

  if (chatbotBtn && chatBox && closeChat) {
    chatbotBtn.addEventListener("click", () => {
      chatBox.style.display = "block";
    });

    closeChat.addEventListener("click", () => {
      chatBox.style.display = "none";
    });
  } else {
    console.warn("Chatbot elements not found in DOM.");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".principle-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const icon = header.querySelector(".toggle-btn");

      if (body.style.display === "block") {
        body.style.display = "none";
        icon.textContent = "+";
      } else {
        body.style.display = "block";
        icon.textContent = "−";
      }
    });
  });
});
