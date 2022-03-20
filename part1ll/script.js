var likes = 3;
var likecount = document.querySelector(".likecounter");
console.log(likecount)

function add1() {
    likes++;
    likecount.innerText = likes + " Like(s)"
}