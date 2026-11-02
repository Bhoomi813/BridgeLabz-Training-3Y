function changeTheme(theme) {

    document.body.setAttribute("class", theme);

    document.body.setAttribute("data-theme", theme);

    console.log("Current Theme:", theme);
}