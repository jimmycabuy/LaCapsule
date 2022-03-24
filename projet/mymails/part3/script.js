var messagesCount = document.getElementsByClassName("card").length;
document.getElementById("nombre").textContent = messagesCount;

for (var i = 0; i < document.getElementsByClassName("trash").length; i++) {
    document.getElementsByClassName("trash")[i].addEventListener("click",
        function () {
            console.log("click détecté");
            this.parentNode.remove();
            messagesCount = document.getElementsByClassName("card").length;
            document.getElementById("nombre").textContent = messagesCount;
        }
    )
}

document.getElementById("bouton").addEventListener("click",
    function () {
        console.log("click bouton détecté");

        var newCard = document.createElement("div");
        newCard.className = "card";
        document.getElementById("allpage").appendChild(newCard);

        var newAvatar = document.createElement("img");
        newAvatar.className = "avatar";
        newAvatar.src = "/assets/jimmy.jpg";
        newCard.appendChild(newAvatar);

        var newPerson = document.createElement("div");
        newPerson.className = "person";
        newCard.appendChild(newPerson);

        var newName = document.createElement("h6");
        newName.textContent = "Jimmy Cabuy";
        newName.className = "name";
        newPerson.appendChild(newName);

        var newP = document.createElement("p");
        newP.textContent = document.getElementById("barre").value;
        newPerson.appendChild(newP);

        var newTrash = document.createElement("img");
        newTrash.className = "trash";
        newTrash.src = "/assets/trash.png";
        newCard.appendChild(newTrash);

        document.getElementById("barre").value = "";

        var messagesCount = document.getElementsByClassName("card").length;
        document.getElementById("nombre").textContent = messagesCount;

        for (var i = 0; i < document.getElementsByClassName("trash").length; i++) {
            document.getElementsByClassName("trash")[i].addEventListener("click",
                function () {
                    console.log("click détecté");
                    this.parentNode.remove();
                    messagesCount = document.getElementsByClassName("card").length;
                    document.getElementById("nombre").textContent = messagesCount;
                }
            )
        }
    }
)