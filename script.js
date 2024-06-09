document.querySelector("button").addEventListener("click",result);

async function result(){
    try {
        var test = document.getElementById("text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${test}`);
        var res = await data.json();
        console.log(res[0]);
        displaySearchResults(res);

    } catch (error) {
        console.log(error);
    }
}

    const showImage = createImage('card-img-top', '', '');
    const showName = createParagraph('card-text');
    const showGenre = createParagraph('card-text');
    const showPremier = createParagraph('card-text');
    const showRating = createParagraph('card-text');
    const showRuntime = createParagraph('card-text');
    const showSchedule = createParagraph('card-text');
    const showOfficialSite = createParagraph('card-text');
    const showNetwork = createParagraph('card-text');
    const showSummary = createParagraph('card-text');
    
    const cardBodyDiv = createDiv('card-body');
    
    const cardDiv = createDiv('card');
    cardDiv.style.width = '18rem';
    const colDiv = createDiv('col-lg-4 col-sm-6');

    const rowDiv = document.querySelectorAll('.row')[1];
    const container = document.querySelector('.container');

function displaySearchResults(response) {
    let displayData = response[0];

    
    showImage.setAttribute('src', displayData.show.image['original']);

    
    showName.innerHTML = displayData.show.name;
    showName.style.fontWeight = "bold";
    showName.style.fontSize = "18px"

    
    showGenre.innerHTML = `<b>Genre</b> : ${displayData.show.genres ? displayData.show.genres : 'NA'}`

    
    showPremier.innerHTML = `<b>Premiered</b> : ${displayData.show.premiered ? displayData.show.premiered : 'NA'}`

    
    showRating.innerHTML = `<b>Rating</b> : ${displayData.show.rating['average'] ? displayData.show.rating['average'] : 'NA'}`

    
    showRuntime.innerHTML = `<b>Runtime</b> : ${displayData.show.averageRuntime ? displayData.show.averageRuntime : 'NA'}`

    
    showSchedule.innerHTML = `<b>Schedule</b> : ${(displayData.show.schedule) ? (displayData.show.schedule.days, displayData.show.schedule.time) : 'NA'}`

    
    showOfficialSite.innerHTML = `<b>Official Site</b> : ${displayData.show.officialSite ? displayData.show.officialSite : 'NA'}`

    
    showNetwork.innerHTML = `<b>Network</b> : ${displayData.show.network ? displayData.show.network.name : 'NA'}`

    
    showSummary.innerHTML = `<b>Summary</b> : ${displayData.show.summary ? displayData.show.summary : 'NA'}`

    cardBodyDiv.append(showName, showGenre, showPremier, showRating, showRuntime, showSchedule, showOfficialSite, showNetwork, showSummary);
    cardDiv.append(showImage, cardBodyDiv);
    colDiv.append(cardDiv);
    rowDiv.append(colDiv);
    container.append(rowDiv);
    document.body.append(container);
}

function createParagraph(className) {
    const para = document.createElement('p');
    para.className = className;
    return para;
}
function createDiv(className) {
    const div = document.createElement('div');
    div.className = className;
    return div;
}
function createImage(className, srcAttr, altAttr) {
    const img = document.createElement('img');
    img.setAttribute('src', srcAttr);
    img.setAttribute('alt', altAttr);
    return img;
}
