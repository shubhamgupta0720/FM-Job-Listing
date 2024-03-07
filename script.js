const jobListing = document.getElementById('jobListing');

fetch('data.json').then(response => {
    response.json().then(
        data => {
            console.log(data);
        }
    )
})