/**
 * Ui Hidden Url btn
 * @param {*} url 
 */
function arrowFunction(url) {


    //Project Urls
    var coffeeURL = "includes/assets/projects//coffee/index.html";
    var HeroesOfTheScript = "includes/assets/projects/HeroesOfTheScript/index.html";
    var ColmarAcademy = "includes/assets/projects/ColmarAcademy/index.html";
    var WDA = "";


    switch (url) {

        case "coffee":
            url = coffeeURL;
            break;

        case "HeroesOfTheScript":
            url = HeroesOfTheScript;
            break;

        case "ColmarAcademy":
            url = ColmarAcademy;
            break;

        case "WDA":
            url = WDA;
            break;

        default:
            url = url;
            console.log("relative URL: " + url);
    }

    window.open(url, '_blank');
}