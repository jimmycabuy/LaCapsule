
var cookie = document.getElementsByClassName("cookie");
for(var i = 0 ; i < cookie.length ; i++){
    cookie[i].addEventListener("click", function(){
        if (this.src.indexOf('cookie-1') != -1) {
            this.src = "/cookie-2.jpg"
        } else {
            this.remove()
        }
    })
}





// for (var i = 0; i < document.getElementsByClassName("cookie").length; i++) {
//     document.getElementsByClassName("cookie")[i].addEventListener("click",
//         function () {
//             if (this.src = "/cookie-1.jpg") {
//                 this.src = "/cookie-2.jpg"
//             } else if (this.src = "/cookie-2.jpg") {
//                 this.parentNode.remove()
//             }

//         })
// }