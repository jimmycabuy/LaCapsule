export default function(pseudo = "", action){
    if (action.type === "addName"){
        return action.pseudo;
    } else {
        return pseudo;
    }
}