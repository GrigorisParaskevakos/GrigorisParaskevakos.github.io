/**
 * mp3 player Obj
 * Before refactoring
 */
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
//             document.getElementById("muse").pause();
//         }

//     };
// };

/**
 * mp3 player Obj
 * After refactoring to
 * ES2015 class
 */
class player {
    constructor() {
 
        this.musicPlayer = {

            play: function (melody) {

                switch (melody) {

                    case "muse":
                        document.getElementById("muse").play();
                        document.getElementById("muse").load();
                        document.getElementById("muse").volume = 1.000000;
                        setTimeout(
                            function () {
                                document.getElementById("muse").play();
                            }, 1);
                        break;
                    case "ocean":
                        document.getElementById("ocean").play();
                        document.getElementById("ocean").load();
                        document.getElementById("ocean").volume = 1.000000;
                        setTimeout(
                            function () {
                                document.getElementById("ocean").play();
                            }, 1);
                        break;
                    default:
                        console.log("No melody for playback...");
                }

            },
            pause: function () {
                document.getElementById("muse").pause();
                //todo
            }
        };
    }
}
/**
 * initiate mp3 player obj
 */
let mp3Player = new player();