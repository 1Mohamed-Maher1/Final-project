const menu = document.querySelector("#menu");

// استماع للضغط على الزر الرئيسي للقائمة
menu.addEventListener("click", (event) => {
    if (event.target.id === "menu") {
        menu.innerHTML = `
            <div class="none navigation-burger">
                <img id="close" src="img/Icon/close.svg" alt="close" class="close">
                <div class="navigation-1">
                    <a class="links__link" href="#about">About</a>
                    <a class="links__link" href="#features">Features</a>
                    <a class="links__link" href="#pricing">Pricing</a>
                    <a class="links__link" href="#testimonials">Testimonials</a>
                    <a class="links__link" href="#help">Help</a>
                </div>
                <div class="sign-1">
                    <a class="sign__in" href="#">Sign in</a>
                    <a class="sign__up" href="#">Sign Up</a>
                </div>
            </div>
        `;
    }
});

// استماع للضغط على زر الإغلاق أو أي رابط في القائمة
menu.addEventListener("click", (event) => {
    if (event.target.id === "close" || event.target.classList.contains("links__link") || event.target.classList.contains("sign__in") || event.target.classList.contains("sign__up")) {
        menu.innerHTML = ` 
        <label id="menu" class="burger-menu">
          <div class="burger-menu__bar"></div>
          <div class="burger-menu__bar"></div>
          <div class="burger-menu__bar"></div>
        </label>`;
    }
});
