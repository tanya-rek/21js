let onSearch = () => {
    let topicGiphy = document.getElementById('topicSearch').value;
    let url = 'https://api.giphy.com/v1/gifs/search?api_key=miihWTyvz8fx7BSFLGmFlzm7RONFHRbG&limit=5&q=' + topicGiphy;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                    document.getElementById('giphy1').src = data.data[0].images.original.url;
                    document.getElementById('giphy2').src = data.data[1].images.original.url;
                    document.getElementById('giphy3').src = data.data[2].images.original.url;
                    document.getElementById('giphy4').src = data.data[3].images.original.url;
                    document.getElementById('giphy5').src = data.data[4].images.original.url;
            })
            .catch(err => console.log(err));
}