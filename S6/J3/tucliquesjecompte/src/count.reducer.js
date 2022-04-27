export default function(count = 0, action) {
    if(action.type === 'decrease') {
        return count - 1;
    }
    else if(action.type === 'reset') {
        return count = 0;
    }
    else if(action.type === 'increase') {
        return count + 1;
    } else {
        return count;
    }
  }