var contacts = ["john", "vanessa", "FRANCK"]

for (var i = 0 ; i < contacts.length; i++) {
    var prenom = contacts[i][0].toUpperCase()
    for (var j=1; j < contacts[i].length; j++){
        prenom += contacts[i][j].toLowerCase()
    }
    contacts[i]= prenom;
}
console.log(contacts);