export default function (wishlist = [], action) {
  if (action.type === "addArticle") {
    var wishlistCopy = [...wishlist];

    var status = false;
    for (var i = 0; i < wishlistCopy.length; i++) {
      if (action.articleLiked.title === wishlistCopy[i].title) {
        status = true;
      }
    }
    if (!status) {
      wishlistCopy.push(action.articleLiked);
    }
    return wishlistCopy;
  } else if (action.type === "removeArticle") {
    var wishlistCopy2 = [...wishlist];

    var position = null;
    for (var j = 0; j < wishlistCopy2.length; j++) {
      if (action.articleRemoved.title === wishlistCopy2[j].title) {
        position = j;
      }
    }
    wishlistCopy2.splice(position, 1);
    return wishlistCopy2;
  } 
  else if(action.type === "importArticles"){
    var wishlistCopy3 = [...wishlist];
    wishlistCopy3.push(action.articles)
    return wishlistCopy3
  }
  else {
    return wishlist;
  }
}