document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Continuous Typing Effect for hero section
    const heroText = document.querySelector('.hero p');
    const originalText = heroText.textContent;
    
    function continuousTypeWriter(text, element, speed = 50) {
        function typeText() {
            element.textContent = ''; 
            let i = 0;
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                  
                    setTimeout(() => {
                        typeText();
                    }, 2000);
                }
            }
            type();
        }
        typeText();
    }
    
    continuousTypeWriter(originalText, heroText);

    // Skill items hover effect
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Random color generator for social buttons on hover
    const socialButtons = document.querySelectorAll('.social-btn');
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.backgroundColor = getRandomColor();
        });
        
        button.addEventListener('mouseleave', function() {
            // Revert to original colors based on class
            if (this.classList.contains('facebook')) this.style.backgroundColor = '#3b5998';
            if (this.classList.contains('instagram')) this.style.backgroundColor = '#e4405f';
            if (this.classList.contains('github')) this.style.backgroundColor = '#333';
        });
    });

    // Continuous Progress Bar Animation
    const progressBars = document.querySelectorAll('.progress-bar');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            
         
            bar.style.width = '0%';
            
         
            setTimeout(() => {
                bar.style.width = `${progress}%`;
                bar.style.transition = 'width 1.5s ease-in-out';
                
             
                setTimeout(() => {
                    bar.style.width = '0%';
                }, 2000); 
            }, 100);
        });
        
     
        setTimeout(animateProgressBars, 4000);
    }
    
    // Start the continuous progress bar animation
    animateProgressBars();

   
    console.log("Hey there! Looks like you're checking out the source code. 👀✨ ~ serii");

    // New Timeline Animation
    const timelineItems = document.querySelectorAll('.timeline-content');
    const markers = document.querySelectorAll('.timeline-marker');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = `translateY(${index % 2 === 0 ? '15px' : '-15px'})`;
        observer.observe(item);
    });
    
    markers.forEach(marker => {
        marker.addEventListener('mouseenter', () => {
            marker.style.transform = 'scale(1.2) rotate(360deg)';
        });
        
        marker.addEventListener('mouseleave', () => {
            marker.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});