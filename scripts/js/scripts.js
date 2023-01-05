const searchForm = document.querySelector(".header__form"),
	searchButton = document.querySelector(".toggle__search");
searchButton.onclick = function () {
	searchForm.classList.toggle("header__form--active"),
		searchButton.classList.toggle("toggle__search--active");
};

const menuLayout = document.querySelector(".header__nav"),
	menuButton = document.querySelector(".toggle__menu");
menuButton.onclick = function () {
	menuButton.classList.toggle("toggle__menu--active"),
		menuLayout.classList.toggle("header__nav--active");
};

var ddNavMenu = $("ul.nav");
ddNavMenu.find("li.m-nav__has-submenu a.m-nav__link").each(function () {
	$(this).next().length > 0 && $(this).parent("li.m-nav__has-submenu");
}),
	ddNavMenu
		.find("li.m-nav__has-submenu a.m-nav__link")
		.on("click", function (e) {
			e.preventDefault(),
				$(this)
					.parent("li.m-nav__has-submenu")
					.children("ul.submenu")
					.stop(!0, !0)
					.slideToggle(350);
		});
