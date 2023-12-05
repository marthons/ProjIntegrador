const footerContainer = document.getElementById("home-footer"); // Alterei o ID

const footerNav = document.createElement("nav"); // Nome diferente para o elemento nav

const footerMenuItems = [
    { label: "Facebook", link: "https://www.facebook.com" },
    { label: "Twitter", link: "https://twitter.com" },
    { label: "Instagram", link: "https://www.instagram.com" },
    { label: "Sobre Nós", link: "./sobre.html" },
];

const footerMenuList = document.createElement("ul"); // Nome diferente para a lista

footerMenuItems.forEach(item => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.link;
    link.textContent = item.label;
    listItem.appendChild(link);
    footerMenuList.appendChild(listItem);
});

const footerImageLogoLink = document.createElement("a");
footerImageLogoLink.href = "../Home/home.html";

const footerImageLogo = document.createElement("span");
footerImageLogo.id = "logo-site"; // ID diferente
footerImageLogo.innerHTML = "IMBD";

footerImageLogoLink.appendChild(footerImageLogo);

const footerPersonLink = document.createElement("a");
footerPersonLink.classList.add('material-icons');
footerPersonLink.classList.add('profile-icon');
footerPersonLink.textContent = 'account_circle';
footerPersonLink.href = "../login.html";

const footerDivMenuProfile = document.createElement("div");
footerDivMenuProfile.id = "div-menu-profile-footer"; // ID diferente

footerContainer.appendChild(footerNav);
footerNav.appendChild(footerImageLogoLink);
footerDivMenuProfile.appendChild(footerMenuList);
footerDivMenuProfile.appendChild(footerPersonLink);
footerNav.appendChild(footerDivMenuProfile);
