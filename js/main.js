document.addEventListener('DOMContentLoaded', () => {
    const lazyBlocks = document.querySelectorAll('.projects-block');
    const lazyJobs = document.querySelectorAll('.job');

    const handleScroll = () => {
        lazyBlocks.forEach(block => {
            const blockTop = block.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (blockTop < windowHeight - 100) {
                block.classList.add('visible');
            }
        });
        lazyJobs.forEach(job => {
            const jobTop = job.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (jobTop < windowHeight - 100) {
                job.classList.add('visible');
            }
        });
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
});


document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.skills-item');
    const detail = document.querySelector('.skill-detail');
    const detailImage = detail.querySelector('.skill-image');
    const detailTitle = detail.querySelector('.skill-title');
    const detailDescription = detail.querySelector('.skill-description');

    const radius = 300;
    const angleStep = (2 * Math.PI) / items.length;

    items.forEach((item, index) => {
        const angle = index * angleStep;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        item.style.transform = `translate(${x}px, ${y}px) translateZ(0)`;

        const randomSize = '0';
        // const borderRadius = Math.random() * 50 + 10 + 'px';
        const borderRadius = '50px';

        item.style.setProperty('--random-size', randomSize);
        item.style.setProperty('--border-radius', borderRadius);

        item.addEventListener('mouseenter', () => {
            startPulse(item, x, y);
        });

        item.addEventListener('mouseleave', () => {
            stopPulse(item);
        });

        item.addEventListener('click', () => {
            if (Number(detail.style.width) !== 0 && Number(detail.style.height) !== 0) {
                detail.style.width = '0';
                detail.style.height = '0';
                detail.style.padding = '0';

                setTimeout(() => {
                    showSkillDescription(item, detail, detailImage, detailTitle, detailDescription);
                }, 500);
            } else {
                showSkillDescription(item, detail, detailImage, detailTitle, detailDescription);
            }

        });
    });

    // detail.addEventListener('click', () => {
    //     detail.style.width = '0';
    //     detail.style.height = '0';
    // });
});

function showSkillDescription(item, detail, detailImage, detailTitle, detailDescription) {
    const title = item.getAttribute('data-title');
    const description = item.getAttribute('data-description');
    const imgSrc = item.querySelector('img').getAttribute('src');

    detailImage.src = imgSrc;
    detailTitle.textContent = title;
    detailDescription.textContent = description;

    detail.style.width = '400px';
    detail.style.height = '200px';
    detail.style.padding = '20px';
}

function startPulse(element, x, y) {
    let scale = 1;
    let growing = true;
    const maxScale = 1.5;
    const minScale = 1;
    const duration = 500;
    const interval = 10;

    if (element.animationFrameId) {
        cancelAnimationFrame(element.animationFrameId);
    }

    function pulse() {
        if (growing) {
            scale += (maxScale - minScale) / (duration / 2 / interval);
            if (scale >= maxScale) growing = false;
        } else {
            scale -= (maxScale - minScale) / (duration / 2 / interval);
            if (scale <= minScale) growing = true;
        }
        element.style.transform = `translate(${x}px, ${y}px) translateZ(0) scale(${scale})`;
        element.animationFrameId = requestAnimationFrame(pulse);
    }

    pulse();
}

function stopPulse(element) {
    if (element.animationFrameId) {
        cancelAnimationFrame(element.animationFrameId);
        element.animationFrameId = null;
    }
    element.style.transform = element.style.transform.replace(/scale\(\d+(\.\d+)?\)/, '');
}

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;

    window.location.href = mailtoLink;

    const notification = document.getElementById('notification');
    notification.style.display = 'block';
});

document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('emailForm').reset();
    document.getElementById('notification').style.display = 'none';
});

