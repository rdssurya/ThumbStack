let skillSetA = [
  ["React.js", "75%"],
  ["JavaScript", "85%"],
  ["Node.js", "60%"],
  ["Express.js", "60%"],
  ["MongoDB", "50%"],
];
let skillSetB = [
  ["HTML", "75%"],
  ["CSS", "70%"],
  ["REST API", "60%"],
  ["Bootstrap", "75%"],
  ["Material UI", "75%"],
];

let skillSetADiv = document.getElementById("skills-children-a");
let skillSetBDiv = document.getElementById("skills-children-b");

function appendingSkills(arr, divElement) {
  for (let [skillName, rating] of arr) {
    let div = document.createElement("div");
    div.classList.add("skill");
    div.innerHTML = `
        <label style="width: 30%;">${skillName}</label>
        <div style="width: 70%;" class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${rating}"></div>
        </div>
        `;
    divElement.append(div);
  }
}

appendingSkills(skillSetA, skillSetADiv);
appendingSkills(skillSetB, skillSetBDiv);

function handleSubmit(e) {
  e.preventDefault();
  const senderDetails = {
    Name: e.target.elements[0].value,
    Email: e.target.elements[1].value,
    Message: e.target.elements[2].value,
  };
  localStorage.setItem("Sender Details", JSON.stringify(senderDetails));
  alert("Information shared successfully");
  location.reload();
}
