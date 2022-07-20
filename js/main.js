(() => {
    document.querySelector("#contact-form").addEventListener("submit", () => {
        event.preventDefault();
        console.log(`
          Name: ${event.target.elements.name.value}
          Email: ${event.target.elements.email.value}
          Subject: ${event.target.elements.subject.value}
          Message: ${event.target.elements.message.value}
        `);
    });
})();
