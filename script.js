document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    
    if (name === '' || email === '' || message === '') {
        document.getElementById('formMessage').textContent = 'Please fill in all fields.';
        document.getElementById('formMessage').style.color = 'red';
        return;
    }

    
    document.getElementById('formMessage').textContent = 'Thank you for your message!';
    document.getElementById('formMessage').style.color = 'green';

    
    document.getElementById('contactForm').reset();
});
