


const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('scroll');
           return;// if we added the class, exit the function
        }
            // We're not intersecting, so remove the class!
        entry.target.classList.remove('scroll')
    })
});

observer.observe(document.querySelector('.container'));
observer.observe(document.querySelector('.container-2'));
observer.observe(document.querySelector('.container-3'));
observer.observe(document.querySelector('.rainfall'));
observer.observe(document.querySelector('.rainfall-2'));

const observer2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('sunrise');
           return;// if we added the class, exit the function
        }
            // We're not intersecting, so remove the class!
        entry.target.classList.remove('sunrise')
    })
});



observer2.observe(document.querySelector('.the-sun'));





