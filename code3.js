const commentList = document.querySelector("#commentList");
const commentInput = document.querySelector("#comment");
const commentButton = document.querySelector("#postComment");

function setup(commentButton, commentInput, commentList) {
  commentButton.addEventListener("click", () => {
    const commentText = commentInput.value;
    postComment(commentText, commentList);
    commentInput.value = "";
  });
}

function postComment(comment, commentList) {
  if (!comment) return;
  let newCommentElement = document.createElement("li");
  newCommentElement.innerHTML = comment;
  commentList.append(newCommentElement);
}

setup(commentButton, commentInput, commentList);
