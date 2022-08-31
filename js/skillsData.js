const aboutSkills = document.querySelector(".about-skills");

async function display() {
  const res = await fetch("../js/skills.json");
  const data = await res.json();

  for (let skill of data) {
    aboutSkills.innerHTML += `
    <div class="skillBox">
      <img src=${skill.image} alt=${skill.altTitle} class="skillIcon" title=${skill.altTitle}>
      <p>${skill.name}</p>
    </div>
    `;
  }
}
display();
