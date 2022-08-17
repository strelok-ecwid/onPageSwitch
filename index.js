Ecwid.OnAPILoaded.add(function() {
    console.log("Ecwid storefront JS API has loaded - 1.0");
});
Ecwid.OnPageSwitch.add(function(page) {
    if (page.type === "PRODUCT") {
        console.log(page.type)
        window.location.href = "index.html?type=product&id=" + page.productId
        return false
    } else if (page.type === "CATEGORY") {
        console.log(page.type)
        window.location.href = "index.html?type=category&id=" + page.categoryId
        return false
    }
})