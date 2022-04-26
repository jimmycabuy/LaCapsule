var messagesCount = document.getElementsByClassName("card").length;
document.getElementById("nombre").textContent = messagesCount;

for (var i = 0; i < document.getElementsByClassName("trash").length; i++) {
    document.getElementsByClassName("trash")[i].addEventListener("click",
        function () {
            console.log("click détecté");
        }
    )
}


for (var i = 0; i < document.getElementsByClassName("trash").length; i++) {
    document.getElementsByClassName("trash")[i].addEventListener("click",
        function () {
            this.parentNode.remove();
            messagesCount = document.getElementsByClassName("card").length;
            document.getElementById("nombre").textContent = messagesCount;
        }
    )
}