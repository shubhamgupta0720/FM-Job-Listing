const jobListing = document.getElementById('jobListing');

async function getJSONData(){
    const jsonData = await fetch('data.json');
    return jsonData.json();
}

getJSONData().then(data => {
    data.forEach(element => {
        const jobTile = document.createElement('div');
        const companyLogo = document.createElement('div');
        const companyImg = document.createElement('img');
        const jobDescription = document.createElement('div');
        const jobType = document.createElement('div');
        const jobHeaderTags = document.createElement('div');
        const companyName = document.createElement('p');
        const newTage = document.createElement('div');
        const featuredTag = document.createElement('div');
        const jobTileTitle = document.createElement('h1');
        const jobDetails = document.createElement('div');
        // create span
        const jobTags = document.createElement('div');

        jobTile.classList.add("job-tile");
        companyLogo.classList.add('company-logo');
        companyImg.src = element.logo;
        jobDescription.classList.add('job-description');
        jobType.classList.add('job-type');
        jobHeaderTags.classList.add('job-header-tags')

        companyLogo.append(companyImg);
        jobTile.append(companyLogo);
        jobListing.appendChild(jobTile);
    });
});