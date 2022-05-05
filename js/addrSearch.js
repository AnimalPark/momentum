const addr = document.querySelector("div#addr input");
const printString = document.querySelector("div#addr span");


addr.addEventListener("keyup", typingString);


function typingString(){
    printString.innerText = addr.value;

    const argc = 'test';
    const string = `https://jsonplaceholder.typicode.com/posts?${argc}`;
    fetch(string, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",


        jhlk;lj'ljk
    },
    body: JSON.stringify({
        title: "Test",
        body: "I am testing!",
        userId: 1,
    }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

