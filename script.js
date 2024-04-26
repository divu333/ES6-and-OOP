// Get references to HTML elements
const clubList = document.getElementById('club-list');
const searchInput = document.getElementById('search');
const clubDetailsContainer = document.getElementById('main');

// Attach an input event listener for the search input
searchInput.addEventListener('input', handleSearchInput);

// Initialize football club data and display all clubs
let clubData = footballClubs;
displayClubs(footballClubs);


// Display football clubs in the club list
function displayClubs(clubs) {
    // Generate HTML for club cards and set it in the clubList element
    const clubCardsHTML = clubs.map(createClubCardHTML).join('');
    clubList.innerHTML = clubCardsHTML;
}

// Create HTML for a football club card
function createClubCardHTML(club) {
    return `
        <div class="club-card" onclick="handleClubClick(this);"><!-- Add onclick event -->
            <h2>${club.name}</h2>
            <img src="${club.image}" alt="${club.name} Image" style="width:100%; height:20vh;">
            <p><b>League: </b>${club.league}</p>
            <p><b>City: </b>${club.city}</p>
            <button onclick="viewClubPlayers('${club.name}'); event.stopPropagation();" style="width:100%;">View Players</button>
        </div>
    `;
}

// Handle clicking on a football club card
function handleClubClick(element) {
    // Write your code here for task1
    const clickedClubcard = element;
    if (clickedClubcard) {
        displayClubDetails();

    }

    // Display football club details
    function displayClubDetails(club) {
        // Write your code here for task2
        const clickedClubName = clickedClubcard.querySelector('h2').textContent;
        const selectedClub = footballClubs.find(club => club.name === clickedClubName)
        const clubDetailsContainerHtml = `
        <button onClick="window.location.reload()"> Back </button>
        <h2> ${selectedClub.name}</h2>
        <img src="${selectedClub.image}" alt="${selectedClub.name} Image" >
        <p><b>League: </b>${selectedClub.league}</p>
        <p><b>City: </b>${selectedClub.city}</p>
        <p><b>stadium: </b> ${selectedClub.stadium}</p>
        <button onclick="viewClubPlayers('${selectedClub.name}'); event.stopPropagation();" >View Players</button>
        <p><b>Description: </b> ${selectedClub.description}</p>
   
        `;
        clubDetailsContainer.innerHTML = clubDetailsContainerHtml;
    }

}

// Function to view club players
function viewClubPlayers(clubName) {
    console.log('view player');
    // // Write your code here for task3
    const club = footballClubs.find(club => club.name === clubName);
    const players = club.players;

    const playerHtmlArray = players.map(player =>

        `
        <p>${club.name}  Players </p>
        <p><b>Name: </b>${player.name}</p>
        <p><b>Position: </b>${player.position}</p>
        <p><b>Goals: </b>${player.goals}</p>
        <p><b>Assists: </b>${player.assists}</p>
        <hr>

        `);


    const playerContainerHtml = playerHtmlArray.join('');

    clubDetailsContainer.innerHTML = `
    <button onClick="window.location.reload()"> Back </button>
    ${playerContainerHtml}
`;
}

// Handle search input and filter clubs
function handleSearchInput() {
    // Write your code here for task4
    console.log('handlesearch inout');
    const searchTerm = searchInput.value.toLowerCase();
    const matchClub = footballClubs.filter(club => {
        const clubData = `${club.name} ${club.league} ${club.city} `.toLowerCase();
        return clubData.includes(searchTerm);
    });
    displayClubs(matchClub);
}