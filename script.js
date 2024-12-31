function toggleMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburger = document.querySelector('.hamburger');
    
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburger = document.querySelector('.hamburger');
    
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');
    }
  });
  
  function navigateToEvent(eventId) {
    // Create a mapping between eventId and event page URL
    const eventPages = {
        event1: "events/paperpresentation.html", // Technical Paper Presentation
        event2: "events/projectexpo.html", // Project Expo
        event3: "events/circuitdebugging.html", // Circuit Debugging
        event4: "events/codedebug.html", // Code Debug
        event5: "events/techquiz.html", // Tech Quiz
        event6: "events/iotworkshop.html", // IoT Workshop
        event7: "events/ideathon.html", // Ideathon
        event8: "events/techtalks.html", // Tech Talks
        event9: "events/roboticschallenge.html", // Robotics Challenge
    };
  
    // Get the corresponding page URL for the event
    const eventPage = eventPages[eventId];
  
    // If a valid event page is found, navigate to it
    if (eventPage) {
        window.location.href = eventPage;
    } else {
        console.error("Event page not found for", eventId);
    }
  }
  
  // Example event details page (event-details.html)
  document.addEventListener('DOMContentLoaded', function() {
    // Get the event ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event');
    
    if (eventId) {
        // You can fetch event details from an API or use a static object
        const eventDetails = getEventDetails(eventId);
        updateEventPage(eventDetails);
    }
  });
  

  
  function updateEventPage(details) {
    // Update the DOM with event details
    document.getElementById('event-title').textContent = details.title;
    document.getElementById('event-description').textContent = details.description;
    document.getElementById('event-datetime').textContent = `${details.date} at ${details.time}`;
    document.getElementById('event-venue').textContent = details.venue;
    
    const rulesList = document.getElementById('event-rules');
    details.rules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        rulesList.appendChild(li);
    });
  }
  

// Function to create team member cards
function createTeamCards() {
  const teamGrid = document.getElementById('teamGrid');
  
  teamMembers.forEach(member => {
      const card = document.createElement('div');
      card.className = 'team-card';
      
      card.innerHTML = `
          <div class="team-card-shadow"></div>
          <div class="team-card-content">
              <div class="image-container">
                  <img src="${member.image}" alt="${member.name}">
              </div>
              <h3 class="member-name">${member.name}</h3>
              <div class="member-role">${member.role}</div>
              <p class="member-department">${member.department}</p>
              <p class="member-specialization">Specialization: ${member.specialization}</p>
          </div>
      `;
      
      teamGrid.appendChild(card);
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  createTeamCards();
});

const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.classList.contains('show');

      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(item => {
        item.classList.remove('show');
      });
      document.querySelectorAll('.faq-question').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle the clicked question
      if (!isOpen) {
        answer.classList.add('show');
        question.classList.add('active');
      } else {
        question.classList.remove('active');
      }
    });
  });