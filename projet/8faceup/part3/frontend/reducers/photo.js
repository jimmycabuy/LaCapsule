export default function(photo = [], action){
    if (action.type === "addPhoto"){
        let photoCopy = [...photo]
        photoCopy.unshift(action.photo)
        return photoCopy;

    } else if (action.type === "removePhoto"){
        let photoCopy2 = [...photo]
        var position = null;
        for(var i = 0 ; i < photoCopy2.length; i++){
            if(action.photo.resultCloudinary.url === photoCopy2[i].resultCloudinary.url){
                position = i;
            }
        }
        photoCopy2.splice(position, 1);
        return photoCopy2;

    } else {
        return photo;
    }
}