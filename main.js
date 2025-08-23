// // // ===== Modal (Higher Studies Exams) =====
// document.addEventListener("DOMContentLoaded", () => {
//   const examBtn = document.querySelector("#higher-studies .btn"); // first "See plans"
//   const modal = document.getElementById("exam-modal");
//   const closeBtn = modal.querySelector(".close-btn");

//   if (examBtn) {
//     examBtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       modal.style.display = "block";
//     });
//   }

//   if (closeBtn) {
//     closeBtn.addEventListener("click", () => {
//       modal.style.display = "none";
//     });
//   }

//   window.addEventListener("click", (e) => {
//     if (e.target === modal) {
//       modal.style.display = "none";
//     }
//   });

//   // ===== Contact Form =====
//   const contactForm = document.querySelector("#contact form");
//   if (contactForm) {
//     contactForm.addEventListener("submit", (e) => {
//       e.preventDefault();

//       const name = document.getElementById("cname").value.trim();
//       const email = document.getElementById("cemail").value.trim();
//       const type = document.getElementById("ctype").value;
//       const message = document.getElementById("cmessage").value.trim();

//       if (!name || !email || !message) {
//         alert("Please fill all required fields.");
//         return;
//       }

//       // Demo: Just show confirmation
//       alert(`✅ Thank you, ${name}! Your message has been sent.`);
//       contactForm.reset();
//     });
//   }

//   // ===== Smooth Scroll for nav =====
//   document.querySelectorAll("a[href^='#']").forEach((link) => {
//     link.addEventListener("click", function (e) {
//       const target = document.querySelector(this.getAttribute("href"));
//       if (target) {
//         e.preventDefault();
//         target.scrollIntoView({ behavior: "smooth" });
//       }
//     });
//   });
// });
// Function to show a temporary message box
// new sectiom----------------------------------------------------------------------------------------
// function showMessage(message, type = "success") {
//   const messageBox = document.getElementById("message-box");
//   messageBox.textContent = message;
//   messageBox.className = "message-box show";
//   if (type === "error") {
//     messageBox.style.backgroundColor = "#dc3545";
//   } else {
//     messageBox.style.backgroundColor = "#28a745";
//   }
//   setTimeout(() => {
//     messageBox.classList.remove("show");
//   }, 3000);
// }

// // Add a listener to the Quick Apply form
// document.addEventListener("DOMContentLoaded", () => {
//   const quickApplyForm = document.querySelector("#apply");
//   if (quickApplyForm) {
//     quickApplyForm.addEventListener("submit", (event) => {
//       event.preventDefault();

//       // Get form data
//       const name = quickApplyForm.querySelector("#name").value;
//       const email = quickApplyForm.querySelector("#email").value;
//       const branch = quickApplyForm.querySelector("#branch").value;
//       const year = quickApplyForm.querySelector("#year").value;
//       const resume = quickApplyForm.querySelector("#resume").value;

//       // Log the data to the console (in a real app, you would send this to a server)
//       console.log("Quick Apply Form Submitted:", {
//         name,
//         email,
//         branch,
//         year,
//         resume,
//       });

//       showMessage("Application submitted successfully!");
//       quickApplyForm.reset();
//     });
//   }

//   // Add a listener to the Contact form
//   const contactForm = document.querySelector("#contact form");
//   if (contactForm) {
//     contactForm.addEventListener("submit", (event) => {
//       event.preventDefault();

//       // Get form data
//       const cname = contactForm.querySelector("#cname").value;
//       const cemail = contactForm.querySelector("#cemail").value;
//       const ctype = contactForm.querySelector("#ctype").value;
//       const cmessage = contactForm.querySelector("#cmessage").value;

//       // Log the data to the console (in a real app, you would send this to a server)
//       console.log("Contact Form Submitted:", {
//         cname,
//         cemail,
//         ctype,
//         cmessage,
//       });

//       showMessage("Message sent successfully!");
//       contactForm.reset();
//     });
//   }

//   // Modal functionality for "See plans" button
//   const openModalBtn = document.getElementById("open-exam-modal");
//   const modal = document.getElementById("exam-modal");
//   const closeBtn = document.querySelector("#exam-modal .close-btn");

//   if (openModalBtn && modal && closeBtn) {
//     openModalBtn.addEventListener("click", (event) => {
//       event.preventDefault();
//       modal.style.display = "block";
//     });

//     closeBtn.addEventListener("click", () => {
//       modal.style.display = "none";
//     });

//     window.addEventListener("click", (event) => {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//     });
//   }
// });
// -------------------------------------------------------------------------------------------------
// ===== Functionalities for TPO Portal =====
document.addEventListener("DOMContentLoaded", () => {
  // ===== Modal (Higher Studies Exams) =====
  const examBtn = document.querySelector("#higher-studies .btn"); // "See plans"
  const modal = document.getElementById("exam-modal");
  const closeBtn = modal?.querySelector(".close-btn");

  if (examBtn && modal) {
    examBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // ===== Contact Form =====
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("cname").value.trim();
      const email = document.getElementById("cemail").value.trim();
      const type = document.getElementById("ctype").value;
      const message = document.getElementById("cmessage").value.trim();

      if (!name || !email || !message) {
        alert("⚠️ Please fill all required fields.");
        return;
      }

      alert(`✅ Thank you, ${name}! Your message has been sent.`);
      contactForm.reset();
    });
  }

  // ===== Smooth Scroll for nav =====
  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ===== Events Buttons =====
  document.querySelectorAll("#events .btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      alert(
        `📌 You have successfully registered for: ${
          btn.closest("article").querySelector("h3").innerText
        }`
      );
    });
  });
});
