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
        const newTag = document.createElement('div');
        const featuredTag = document.createElement('div');
        const jobTileTitle = document.createElement('h1');
        const jobDetails = document.createElement('div');
        const jobDetailsSpan = document.createElement('span');
        jobDetailsSpan.innerHTML = `${element.postedAt} &nbsp; &nbsp; · &nbsp; &nbsp; ${element.contract} &nbsp; &nbsp; · &nbsp; &nbsp; ${element.location}`;
        const jobTags = document.createElement('div');
        const tags = document.createElement('div');
        // tags.innerHTML = element.role;

        jobTile.classList.add("job-tile");
        companyLogo.classList.add('company-logo');
        companyImg.src = element.logo;
        jobDescription.classList.add('job-description');
        jobType.classList.add('job-type');
        jobHeaderTags.classList.add('job-header-tags');
        companyName.classList.add('company-name');
        companyName.innerText = element.company;
        newTag.classList.add('new-tag');
        newTag.innerHTML = "NEW!";
        featuredTag.classList.add('featured-tag');
        featuredTag.innerHTML = "FEATURED";
        jobTileTitle.innerHTML = element.position;
        jobDetails.classList.add('job-details');
        jobTags.classList.add('job-tags');
        tags.classList.add('frontend-tag');

        companyLogo.append(companyImg);
        jobHeaderTags.append(companyName);
        jobHeaderTags.append(newTag);
        jobHeaderTags.append(featuredTag);
        jobDetails.append(jobDetailsSpan);
        jobTags.append(tags);
        jobDetails.append(jobTags);
        jobType.append(jobHeaderTags);
        jobType.append(jobTileTitle);
        jobType.append(jobDetails);
        jobDescription.append(jobType);
        jobTile.append(companyLogo);
        jobTile.append(jobDescription);
        jobListing.appendChild(jobTile);
    });
});