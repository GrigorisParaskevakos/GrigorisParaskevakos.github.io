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
        //let x = $("#muse"); 
        this.musicPlayer = {
            play: function () {
                document.getElementById("muse").play();
                document.getElementById("muse").load();
                document.getElementById("muse").volume = 1.000000;
                setTimeout(
                    function () {
                        document.getElementById("muse").play();
                    }, 1);
            },

            pause: function () {
                document.getElementById("muse").pause();
            }
        };
    }
}
/**
 * initiate mp3 player obj
 */
let mp3Player = new player();