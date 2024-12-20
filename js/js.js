function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("categories").onclick = function() {
    var categoriesSubmenu = document.getElementById("categories-submenu");
    var menuSubmenu = document.getElementById("menu-submenu");
    if (menuSubmenu.style.display === "block") {
        closeMenu(menuSubmenu);
    }
    toggleMenu(categoriesSubmenu);
};

document.getElementById("menu").onclick = function() {
    var categoriesSubmenu = document.getElementById("categories-submenu");
    var menuSubmenu = document.getElementById("menu-submenu");
    if (categoriesSubmenu.style.display === "block") {
        closeMenu(categoriesSubmenu);
    }
    toggleMenu(menuSubmenu);
};

function toggleMenu(submenu) {
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";
        submenu.style.maxHeight = submenu.scrollHeight + "px";
    } else {
        closeMenu(submenu);
    }
}

function closeMenu(submenu) {
    submenu.style.maxHeight = "0";
    submenu.addEventListener('transitionend', function() {
        submenu.style.display = "none";
    }, { once: true });
}


const contents = [
    "Action",
    "Adventure",
    "Casusl",
    "Horror",
    "Indie",
    "Racing"
];

document.querySelectorAll('.img-items').forEach((div, index) => {
    div.style.setProperty('--content', `"${contents[index]}"`);
});

document.getElementById("read-more").onclick = function() {
    var extraText = document.getElementById("extra-text");

    if (extraText.classList.contains("hidden")) {
        extraText.classList.remove("hidden");
        this.textContent = "Read Less";
    } else {
        extraText.classList.add("hidden");
        this.textContent = "Read More";
    }
};

document.querySelector('.toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Toggle the eye icon
    this.textContent = type === 'password' ? '👁️' : '🙈';
});


