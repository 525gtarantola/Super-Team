// Dog breed data
const teamMembers = [
    { 
        name: 'Beagle',
        scientificName: 'Canis lupus familiaris',
        origin: 'United Kingdom',
        characteristics: ['Friendly', 'Curious', 'Merry'],
        temperament: 'Even Tempered',
        coatType: 'Short hair', 
        lifeSpan: '12-15 years', 
    },
    {
        name: 'Poodle',
        scientificName: 'Canis lupus familiaris',
        origin: 'Germany/France',
        characteristics: ['Intelligent', 'Active', 'Alert'],
        temperament: 'Active',
        coatType: 'Curly', 
        lifeSpan: '12-15 years',  
    },
    {
        name: 'Dalmatian',
        scientificName: 'Canis lupus familiaris',
        origin: 'Croatia',
        characteristics: ['Energetic', 'Playful', 'Loyal'],
        temperament: 'Outgoing',
        coatType: 'Short hair', 
        lifeSpan: '10-13 years', 
    },
    {
        name: 'German Shepherd',
        scientificName: 'Canis lupus familiaris',
        origin: 'Germany',
        characteristics: ['Confident', 'Courageous', 'Smart'],
        temperament: 'Confident',
        coatType: 'Double coat', 
        lifeSpan: '9-13 years', 
    },
    {
        name: 'Golden Retriever',
        scientificName: 'Canis lupus familiaris',
        origin: 'Scotland',
        characteristics: ['Friendly', 'Intelligent', 'Devoted'],
        temperament: 'Reliable',
        coatType: 'Long hair', 
        lifeSpan: '10-12 years', 
    },
    {
        name: 'Great Dane',
        scientificName: 'Canis lupus familiaris',
        origin: 'Germany',
        characteristics: ['Friendly', 'Patient', 'Dependable'],
        temperament: 'Gentle',
        coatType: 'Short hair', 
        lifeSpan: '7-10 years', 
    },
    {
        name: 'Siberian Husky',
        scientificName: 'Canis lupus familiaris',
        origin: 'Siberia',
        characteristics: ['Outgoing', 'Friendly', 'Alert'],
        temperament: 'Friendly',
        coatType: 'Double coat', 
        lifeSpan: '12-15 years', 
    },
    {
        name: 'Basset Hound',
        scientificName: 'Canis lupus familiaris',
        origin: 'France',
        characteristics: ['Charming', 'Patient', 'Low-key'],
        temperament: 'Affectionate',
        coatType: 'Short hair', 
        lifeSpan: '12-13 years',  
    },
    {
        name: 'Rottweiler',
        scientificName: 'Canis lupus familiaris',
        origin: 'Germany',
        characteristics: ['Confident', 'Fearless', 'Good-natured'],
        temperament: 'Calm',
        coatType: 'Short hair', 
        lifeSpan: '8-10 years', 
    },

    {
        name: 'Border Collie',
        scientificName: 'Canis lupus familiaris',
        origin: 'Scotland',
        characteristics: ['Intelligent', 'Agile', 'Instinctive'],
        temperament: 'Energetic',
        coatType: 'Double coat', 
        lifeSpan: '12-15 years', 
    },

    {
        name: 'Placeholder',
    }
];

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCard');

    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');

        let backgroundColor;
        switch (member.name.toLowerCase()) {
            case 'beagle':
                backgroundColor = '#03BCD3';
                break;
            case 'poodle':
                backgroundColor = '#008394';
                break;
            case 'dalmatian':
                backgroundColor = '#03BCD3';
                break;
            case 'german shepherd':
                backgroundColor = '#008394';
                break;
            case 'golden retriever':
                backgroundColor = '#ACE9F0';
                break;
            case 'great dane':
                backgroundColor = '#008394';
                break;
            case 'siberian husky':
                backgroundColor = '#ECF9FB';
                break;
            case 'basset hound':
                backgroundColor = '#03BCD3';
                break;
            case 'rottweiler':
                backgroundColor = '#008394';
                break;
                case 'border collie':
                backgroundColor = '#ACE9F0';
                break;
            default:
                backgroundColor = 'white';
        }
        card.style.backgroundColor = backgroundColor;

        // Create a list of characteristics with <li> tags
        const characteristicsList = member.characteristics
            .map(characteristic => `<li>${characteristic}</li>`).join('');

        card.innerHTML = `
            <div class="card">
                <div class="card-header">
                    ${member.name}
                </div>
                <div class="card-body" style="background-color:${backgroundColor};">
                    <p><strong>Scientific Name:</strong> ${member.scientificName}</p>
                    <p><strong>Origin:</strong> ${member.origin}</p>
                    <p><strong>Temperament:</strong> ${member.temperament}</p>
                    <p><strong>Coat Type:</strong> ${member.coatType}</p>
                    <ul><strong>Characteristics:</strong>${characteristicsList}</ul>
                    <p><strong>Lifespan:</strong> ${member.lifeSpan}</p>
                </div>
            </div>
        `;

        teamCardsContainer.appendChild(card);
    });
}

window.onload = generateTeamCards;
