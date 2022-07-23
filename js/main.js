(() => {
    document.querySelector('#contact-form').addEventListener('submit', () => {
        event.preventDefault();
        console.log(`
          Name: ${event.target.elements.name.value}
          Email: ${event.target.elements.email.value}
          Subject: ${event.target.elements.subject.value}
          Message: ${event.target.elements.message.value}
        `);
    });

    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        const modal = modals[i];
        document.getElementById(`modalButton-${i}`).onclick = function() {
            modal.style.display = 'block';
        };
        document.getElementById(`modalCloseIcon-${i}`).onclick = function() {
            modal.style.display = 'none';
        };
        document.getElementById(`modalCloseButton-${i}`).onclick = function() {
            modal.style.display = 'none';
        };
    }
    window.onclick = function(event) {
        if (event.target.className === 'modal') {
            event.target.style.display = 'none';
        }
    };
})();
