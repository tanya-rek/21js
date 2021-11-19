let submitButton = document.getElementById('submitBtn');

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    fetch('https://httpbin.org/post',
    {
        method: 'POST',
        body: new FormData(formCat)
    })
    .then(response => response.json())
    .then(cat => {
        console.log(cat);
    })
    .catch(error => console.log(error));
})