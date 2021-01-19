// /**
//  * audio
//  */
// var player = function () {

//     //let x = $("#muse");            
//     this.musicPlayer = {

//         play: function () {
//             document.getElementById("muse").play();
//             document.getElementById("muse").load();
//             document.getElementById("muse").volume = 1.000000;
//             setTimeout(
//                 function () {
//                     document.getElementById("muse").play();
//                 }, 1);
//         },

//         pause: function () {
//             x.pause();
//         }

//     };
// };

// let mp3Player = new player();

/**
 * Ui Hidden Url btn
 */
function arrowFunction(url) {


    //Project Urls
    var coffeeURL = "includes/assets/projects//coffee/index.html";
    var HeroesOfTheScript = "includes/assets/projects/HeroesOfTheScript/index.html";
    var ColmarAcademy = "../ColmarAcademy/index.html";
    var WDA = "https://grigorisparaskevakos.github.io/WDA/";


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