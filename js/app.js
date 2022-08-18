console.log("CV Screener");

let data = [
    {
        name: "Abhishek Ranjan",
        age: "23",
        city: "Patna",
        language: "JavaScript",
        framework: "React.js",
        image: "https://randomuser.me/api/portraits/men/58.jpg"
    },
    {
        name: "Rashi Ranjan",
        age: "21",
        city: "Mumbai",
        language: "C++",
        framework: "OpenCV",
        image: "https://randomuser.me/api/portraits/women/85.jpg"

    },
    {
        name: "Ramesh",
        age: "33",
        city: "Kerla",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/86.jpg"

    },
    {
        name: "Natasha",
        age: "43",
        city: "Bangalore",
        language: "JavaScript",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/women/95.jpg"

    },
    {
        name: "Ram Raj",
        age: "33",
        city: "Ranchi",
        language: "Dart",
        framework: "Flutter",
        image: "https://randomuser.me/api/portraits/men/55.jpg"

    },
];


// creating iterator

function cvIterate(obj) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < obj.length ? {
                value: obj[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    }
}

let cvResult = cvIterate(data);
let image = document.getElementById("image");
let profile = document.getElementById("profile");
nextCandidate(); //called function so that when we open the page we can se the first candidate
let next = document.getElementById("next");
next.addEventListener("click", nextCandidate);



function nextCandidate() {
    let candidate = cvResult.next();
    if(candidate.done!= true){
    image.innerHTML = `<img src=${candidate.value.image}>`;
    profile.innerHTML = `<ul class="list-group">
 <li class="list-group-item">${candidate.value.name}</li>
 <li class="list-group-item">Age is ${candidate.value.age}</li>
 <li class="list-group-item">Lives in ${candidate.value.city}</li>
 <li class="list-group-item">knows ${candidate.value.language}</li>
 <li class="list-group-item">Worked on ${candidate.value.framework} framework</li>
</ul>`
    }else{
        alert("Candidate list has ended.");
        window.location.reload();
    }

}