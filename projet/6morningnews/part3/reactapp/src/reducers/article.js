export default function (wishlist = [], action) {
  if (action.type === "addArticle") {
    var wishlistCopy = [...wishlist];
    wishlistCopy.push(action.articleLiked);
    return wishlistCopy;
  } else {
    return wishlist;
  }
}