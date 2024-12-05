const projects = [
    { name: "Experimental Physics Study", link: "https://github.com/Zacharias-Brohn/F0004T" },
    { name: "School Projects", link: "https://github.com/Zacharias-Brohn/d0009e" },
];

document.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector("ul");
    projects.forEach(project => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = project.name;
        a.href = project.link;
        li.appendChild(a);
        ul.appendChild(li);
    });
});

