// var neilcount = 9;
// var nicholecount = 12;
// var jimcount = 9;

// var neillikes = document.querySelector(".neillikecounter");

// function add1neil(){
//     neilcount++
//     neillikes.innerText = neilcount + " Like(s)"
// }

// var nicholelikes = document.querySelector(".nicholelikecounter")

// function add1nichole(){
//     nicholecount++
//     nicholelikes.innerText = nicholecount + " Like(s)"
// }
// var jimlikes = document.querySelector(".jimlikecounter")

// function add1jim(){ 
//     jimcount++
//     jimlikes.innerText = jimcount + " Like(s)"
// }


// index     0  1   2
var likes = [9, 12, 9];
var counters = [
    document.querySelector(".neillikecounter"),
    document.querySelector(".nicholelikecounter"),
    document.querySelector(".jimlikecounter")
];

function add1(id) {
    likes[id]++;
    counters[id].innerHTML = likes[id] + " like(s)";
}