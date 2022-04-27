export default function(count = 0, action) {
    if(action.type == 'ajouter') {
        return count + 1;
    } else {
        return count;
    }
  }