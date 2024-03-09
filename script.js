const jobListing = document.getElementById('jobListing');
const jobTagFilter = document.getElementById('jobTagFilter');

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
        
        
        const jobTileTitle = document.createElement('h1');
        const jobDetails = document.createElement('div');
        const jobDetailsSpan = document.createElement('span');
        jobDetailsSpan.innerHTML = `${element.postedAt} &nbsp; &nbsp; · &nbsp; &nbsp; ${element.contract} &nbsp; &nbsp; · &nbsp; &nbsp; ${element.location}`;
        const jobTags = document.createElement('div');
        const role = document.createElement('div');
        role.innerHTML = element.role;
        role.value = element.role;
        const level = document.createElement('div');
        level.innerHTML = element.level;
        level.value = element.level;

        jobTile.classList.add("job-tile");
        companyLogo.classList.add('company-logo');
        companyImg.src = element.logo;
        jobDescription.classList.add('job-description');
        jobType.classList.add('job-type');
        jobHeaderTags.classList.add('job-header-tags');
        companyName.classList.add('company-name');
        companyName.innerText = element.company;
        
        
        jobTileTitle.innerHTML = element.position;
        jobDetails.classList.add('job-details');
        jobTags.classList.add('job-tags');
        role.classList.add('frontend-tag');
        level.classList.add('frontend-tag');

        companyLogo.append(companyImg);
        jobHeaderTags.append(companyName);
        if(element.new){
            const newTag = document.createElement('div');
            newTag.classList.add('new-tag');
            newTag.innerHTML = "NEW!";
            jobHeaderTags.append(newTag);
        }
        if(element.featured){
            const featuredTag = document.createElement('div');
            featuredTag.classList.add('featured-tag');
            featuredTag.innerHTML = "FEATURED";
            jobHeaderTags.append(featuredTag);
        }
        
        jobDetails.append(jobDetailsSpan);
        jobTags.append(role);
        jobTags.append(level);
        const lang = element.languages.length;
        if(lang < 3){
            element.languages.forEach(language => {
                const languageTag = document.createElement('div');
                languageTag.classList.add('frontend-tag');
                languageTag.innerHTML = language;
                languageTag.value = language;
                jobTags.append(languageTag);
            })
            element.tools.forEach(tool => {
                const toolTag = document.createElement('div');
                toolTag.classList.add('frontend-tag');
                toolTag.innerHTML = tool;
                toolTag.value = tool;
                jobTags.append(toolTag);
            })
        }
        else{
            element.languages.forEach(language => {
                const languageTag = document.createElement('div');
                languageTag.classList.add('frontend-tag');
                languageTag.innerHTML = language;
                languageTag.value = language;
                jobTags.append(languageTag);
            })
        }
        
        const frontEndTag = document.querySelectorAll(".frontend-tag");

        frontEndTag.forEach(tag => {
            tag.addEventListener('click', () => {
                console.log(tag.value);
                console.log("here");
            })
        })
        jobType.append(jobHeaderTags);
        jobType.append(jobTileTitle);
        jobType.append(jobDetails);
        jobDescription.append(jobType);
        jobTile.append(companyLogo);
        jobTile.append(jobDescription);
        jobListing.appendChild(jobTile);
        jobDescription.append(jobTags);
    });
});
