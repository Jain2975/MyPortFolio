import "./Projects.css";

const projects = [
  {
    title: "Know Your Algorithms",
    description:
      "A website with clean and simple UI to manage and revise algorithm notes. Algorithm title, category,short description and Use Cases are added to . It includes the functionality to create and delete an algorithm. Provided with search filter . The Saved algorithms  are shown in a Line with just the Algorithm Title with a dropdown which when clicked shows all the entered data.",
    tech: "React, Express, CSS",
    video: "/videos/KnowYourAlgos.mp4",
    github: "https://github.com/Jain2975/KnowYourAlgos",
    live: "https://know-your-algos.vercel.app",
  },
  {
    title: "Book Notes",
    description:
      "Book Notes website is made to show some good recommended or high quality books which are good recommendations from various genres like romance,adventure,etc.. With the added functionality for users to add or recommend a book recommendation through the form. The data shown in this is mostly stored in the postgresSQL database.",
    tech: "EJS, Express, CSS, PostgreSQL",
    video: "/videos/BookNotes.mp4",
    github: "https://github.com/Jain2975/Book-Notes-Project",
    live: "",
  },
  {
    title: "Simon Game",
    description:
      "A fun game of colors and memory. Website for playing Simon Game Using DOM Manipulation for when  button of a specific color is clicked the button turns a little slightly grey while also making a sound. Each different for different color.",
    tech: "HTML, JavaScript, CSS",
    video: "/videos/SimonGame.mp4",
    github: "https://github.com/Jain2975/Simon-Game",
    live: "https://jain2975.github.io/Simon-Game",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">A Few Of My Projects</h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <p>
                <strong>Tech:</strong> {proj.tech}
              </p>
              <div className="project-links">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer">
                    Deployed At
                  </a>
                )}
              </div>
            </div>
            {proj.video && (
              <video
                className="project-video"
                src={proj.video}
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
