export default function(list = [], action){
    if (action.type === "addPOI"){
        let listCopy = [...list]
        listCopy.push(action.list)
        return listCopy;

    } else if (action.type === "deletePOI"){
        let listCopy2 = [...list]
        var position = null;
        for (var i = 0; i < listCopy2.length; i++) {
            if (action.list.title === listCopy2[i].title && action.list.description === listCopy2[i].description ) {
              position = i;
            }
          }
          listCopy2.splice(position, 1);
          return listCopy2;

    } else {
        return list;
    }
}