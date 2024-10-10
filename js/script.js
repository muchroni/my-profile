 const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            createStars();
        });

        function createStars() {
            const starsContainer = document.getElementById('stars');
            starsContainer.innerHTML = '';
            
            if (body.classList.contains('dark-mode')) {
                for (let i = 0; i < 100; i++) {
                    const star = document.createElement('div');
                    star.className = 'star';
                    star.style.left = `${Math.random() * 100}%`;
                    star.style.top = `${Math.random() * 100}%`;
                    star.style.width = `${Math.random() * 3}px`;
                    star.style.height = star.style.width;
                    
                    // Make only some stars twinkle
                    if (Math.random() > 0.7) {
                        star.classList.add('twinkle');
                    }
                    
                    starsContainer.appendChild(star);
                }
            }
        }

        function createShootingStar() {
            if (body.classList.contains('dark-mode')) {
                const starsContainer = document.getElementById('stars');
                const star = document.createElement('div');
                star.className = 'shooting-star';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                starsContainer.appendChild(star);

                setTimeout(() => {
                    star.remove();
                }, 1000);
            }
        }

        setInterval(createShootingStar, 3000);