document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var pageChangeBtn = document.getElementById("pageChangeBtn");

    // Add a click event listener to the button
    pageChangeBtn.addEventListener("click", function() {
        // Delay the page change by 5 seconds (5000 milliseconds)
        setTimeout(function() {
            // Redirect to the next page after 5 seconds
            window.location.href = "nextpage.html";
        }, 5000); // 5000 milliseconds = 5 seconds
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var surveyBtn = document.getElementById("surveyBtn");

    // Add a click event listener to the button
    surveyBtn.addEventListener("click", function() {
        // Redirect to survey.html
        window.location.href = "./pages/survey.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the button element
  var actualSurvey = document.getElementById("actualSurvey");

  // Add a click event listener to the button
  actualSurvey.addEventListener("click", function() {
      // Redirect to survey.html
      window.location.href = "./survey.html";
  });
});

//pop-up code
// document.addEventListener("DOMContentLoaded", function() {
//     // Get all anchor tags in the document
//     const links = document.querySelectorAll("a");

//     // Attach a click event listener to each anchor tag
//     links.forEach(function(link) {
//         link.addEventListener("click", function(event) {
//             // Prevent the default behavior of the anchor tag (navigation)
//             event.preventDefault();

//             // Get the target URL from the href attribute
//             const targetUrl = this.getAttribute("href");

//             // Show a confirmation dialog
//             const isConfirmed = window.confirm("Are you sure you want to proceed?");

//             // If the user confirms, navigate to the target URL
//             if (isConfirmed) {
//                 window.location.href = targetUrl;
//             }
//         });
//     });
// });

//pop-up & delay code
document.addEventListener("DOMContentLoaded", function() {
    // Get all anchor tags in the document
    const links = document.querySelectorAll("a");

    // Attach a click event listener to each anchor tag
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Prevent the default behavior of the anchor tag (navigation)
            event.preventDefault();

            // Get the target URL from the href attribute
            const targetUrl = this.getAttribute("href");

            // Show a confirmation dialog
            const isConfirmed = window.confirm("Are you sure you want to proceed?");

            // If the user confirms, navigate to the target URL
            if (isConfirmed) {
                // Wait for 5 seconds before navigating to the target URL
                setTimeout(function() {
                    window.location.href = targetUrl;
                }, 5000); // 5000 milliseconds = 5 seconds
            }
        });
    });
});


//buffering delay code
// document.addEventListener("DOMContentLoaded", function() {
//     // Get all anchor tags in the document
//     const links = document.querySelectorAll("a");

//     // Attach a click event listener to each anchor tag
//     links.forEach(function(link) {
//         link.addEventListener("click", function(event) {
//             // Prevent the default behavior of the anchor tag (navigation)
//             event.preventDefault();

//             // Get the target URL from the href attribute
//             const targetUrl = this.getAttribute("href");

//             // Wait for 5 seconds before navigating to the target URL
//             setTimeout(function() {
//                 window.location.href = targetUrl;
//             }, 5000); // 5000 milliseconds = 5 seconds
//         });
//     });
// });

//slideshow javascript
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide initially
    showSlide(currentSlide);

    // Function to show a specific slide
    function showSlide(slideIndex) {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
        currentSlide = slideIndex;
    }

    // Function to show the next slide
    function showNextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to show the previous slide
    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Automatically switch to the next slide every 5 seconds
    const intervalId = setInterval(showNextSlide, 5000);

    // Event listener for left arrow click
    document.querySelector(".arrow-left").addEventListener("click", function() {
        clearInterval(intervalId); // Stop auto-rotation
        showPrevSlide();
    });

    // Event listener for right arrow click
    document.querySelector(".arrow-right").addEventListener("click", function() {
        clearInterval(intervalId); // Stop auto-rotation
        showNextSlide();
    });
});