export default function(photo = [], action){
    if (action.type === "addURL"){
        let photoCopy = [...photo]
        photoCopy.unshift(action.photo)
        return photoCopy;
    } else {
        return photo;
    }
}