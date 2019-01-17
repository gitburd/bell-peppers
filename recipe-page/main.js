var likes = localStorage.getItem("likes_counter", likes)


function like() {
    likes +=1; 
  document.getElementById("likes_counter").innerHTML= likes;
}

