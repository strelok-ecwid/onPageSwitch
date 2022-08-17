Ecwid.OnAPILoaded.add(function() {
    console.log("Ecwid storefront JS API has loaded");
});
Ecwid.OnPageSwitch.add(function(page) {
    console.log(page.type)
})