const teamMembers = [
  {
    name: "Lionel Messi",
    position: "Forward",
    skills: ["Dribbling", "Shooting", "Passing"],
    strengths: "Ball Control",
    weaknesses: "Heading Ability",
    biography: "blah blah blah",
  },

  {
    name: "Lionel Messi Jr.",
    position: "Defender",
    skills: ["Dribbling", "Shooting", "Passing"],
    strengths: "Ball Control",
    weaknesses: "Heading Ability",
    biography: "blah blah blah",
  },
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

//Create a list of skills with <li> tags
const skillslist = member.skills.map (skill => `<li> ${skill} </li>`).join('')

    card.innerHTML = `
        <div class = "card"> 
            <div class = "card-header">${member.name}</div>
            <div class = "card-body"> 
                <p><strong>Position:</strong> ${member.position}</p>
                <p><strong>Skills:</strong>
                    <ul>
                         ${skillslist}
                    </ul>
                </p>
            </div>
        </div> 
        `;
    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards();
