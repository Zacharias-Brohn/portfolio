const projects = [
    { 
        name: "Experimental Physics Study", 
        link: "https://github.com/Zacharias-Brohn/F0004T",
        image: "assets/194288.png",
        description: "A study on experimental physics."
    },
    { 
        name: "School Projects", 
        link: "https://github.com/Zacharias-Brohn/d0009e",
        image: "assets/194288.png",
        description: "Various school projects."
    },
    { 
        name: "LWBar", 
        link: "https://github.com/Zacharias-Brohn/LWBar",
        image: "assets/194288.png",
        description: "A lightweight statusbar written in rust."
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const ul = document.getElementById("projects-list");
    projects.forEach(project => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.name;

        const div = document.createElement("div");

        const a = document.createElement("a");
        a.textContent = project.name;
        a.href = project.link;

        const p = document.createElement("p");
        p.textContent = project.description;

        div.appendChild(a);
        div.appendChild(p);
        li.appendChild(img);
        li.appendChild(div);
        ul.appendChild(li);
    });
});

