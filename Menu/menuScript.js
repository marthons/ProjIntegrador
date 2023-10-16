const menuContainer = document.getElementById("home-header");

const menuNav = document.createElement("nav");

const menuItems = [
    { label: "Atores", link: "./atores-vida-obra.html" },
    { label: "Comentarios", link: "./comentarios-filmes-series.html" },
    { label: "Destaques de Hoje", link: "./destaquesDeHoje.html" },
    { label: "Sair", link: "./login.html" },
];

const menuList = document.createElement("ul");

menuItems.forEach(item => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.link;
    link.textContent = item.label;
    listItem.appendChild(link);
    menuList.appendChild(listItem);
});

const imageLogoLink = document.createElement("a");
imageLogoLink.href = "./home.html"

const imageLogo = document.createElement("span")
imageLogo.id = "logo-site"
imageLogo.innerHTML= "IMBD"

imageLogoLink.appendChild(imageLogo);


const personLink = document.createElement("a");
personLink.classList.add('material-icons');
personLink.classList.add('profile-icon')
personLink.textContent = 'account_circle'
personLink.href = "../login.html"

const divMenuProfile = document.createElement("div");
divMenuProfile.id = "div-menu-profile"

menuContainer.appendChild(menuNav);
menuNav.appendChild(imageLogoLink)
divMenuProfile.appendChild(menuList)
divMenuProfile.appendChild(personLink)
menuNav.appendChild(divMenuProfile)

