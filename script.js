document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
    const navMenu = document.querySelector(".nav-menu")
  
    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active")
        const spans = mobileMenuBtn.querySelectorAll("span")
  
        if (navMenu.classList.contains("active")) {
          spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
          spans[1].style.opacity = "0"
          spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)"
        } else {
          spans[0].style.transform = "none"
          spans[1].style.opacity = "1"
          spans[2].style.transform = "none"
        }
      })
    }
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
  
          // Close mobile menu if open
          if (navMenu && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active")
            const spans = mobileMenuBtn.querySelectorAll("span")
            spans[0].style.transform = "none"
            spans[1].style.opacity = "1"
            spans[2].style.transform = "none"
          }
        }
      })
    })
  
    // Testimonial Slider
    const testimonials = document.querySelectorAll(".testimonial")
    const dots = document.querySelectorAll(".dot")
    const prevBtn = document.querySelector(".prev-btn")
    const nextBtn = document.querySelector(".next-btn")
    let currentSlide = 0
  
    function showSlide(index) {
      testimonials.forEach((testimonial) => testimonial.classList.remove("active"))
      dots.forEach((dot) => dot.classList.remove("active"))
  
      testimonials[index].classList.add("active")
      dots[index].classList.add("active")
      currentSlide = index
    }
  
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length
        showSlide(currentSlide)
      })
  
      nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % testimonials.length
        showSlide(currentSlide)
      })
    }
  
    if (dots.length > 0) {
      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          showSlide(index)
        })
      })
    }
  
    // Language Switcher (simplified for demo)
    const languageButtons = document.querySelectorAll(".language-buttons button")
  
    if (languageButtons.length > 0) {
      languageButtons.forEach((button) => {
        button.addEventListener("click", function () {
          languageButtons.forEach((btn) => btn.classList.remove("active"))
          this.classList.add("active")
  
          // In a real implementation, this would change the language of the content
          // For this demo, we're just toggling the active state
          const lang = this.getAttribute("data-lang")
          console.log(`Language changed to: ${lang}`)
          // Here you would implement actual language switching functionality
        })
      })
    }
  
    // Form Submission
    const inquiryForm = document.getElementById("inquiry-form")
    const formSuccess = document.getElementById("form-success")
  
    if (inquiryForm && formSuccess) {
      inquiryForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // In a real implementation, you would send the form data to a server
        // For this demo, we'll just show the success message
        inquiryForm.style.display = "none"
        formSuccess.classList.remove("hidden")
  
        // Reset form after submission (for demo purposes)
        setTimeout(() => {
          inquiryForm.reset()
          inquiryForm.style.display = "block"
          formSuccess.classList.add("hidden")
        }, 5000)
      })
    }
  
    // Newsletter Form
    const newsletterForm = document.getElementById("newsletter-form")
  
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // In a real implementation, you would send the email to a server
        // For this demo, we'll just show an alert
        alert("Thank you for subscribing to our newsletter!")
        newsletterForm.reset()
      })
    }
  })
  
  