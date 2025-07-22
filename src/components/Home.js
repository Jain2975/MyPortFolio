import "./Home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Home() {
  return (
    <div className="home-container">
      <div className="profile-section">
        <div className="profile-picture">
          <span className="animated-name">AJ</span>
        </div>
        <div className="contact">
          <a href="https://github.com/Jain2975" target="_blank">
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/aarush-jain-171083286"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:aarush2975@email.com">
            <EmailIcon />
          </a>
        </div>
      </div>

      <div className="about-section">
        <h2>About Me</h2>
        <p>
          Hey there! I'm Aarush Jain, a passionate developer who loves solving
          problems and building things. I enjoy making web applications and
          solving problems.
        </p>

        <p>
          I'm currently learning Web3 (BlockChain specifically) .Apart from
          coding, I enjoy playing games like TableTennis,Badminton. I also enjoy
          playing piano and drawing.
        </p>
        <p>
          I also actively participate in CodeForces Contest. Currently NewBie
          (Rating: 946)
        </p>
        <p>
          I’m open to internship opportunities, collaborations, and hackathons!
        </p>
        <h2> Tech Stack</h2>
        <ul className="skills-line">
          <li>
            <strong>Languages:</strong>
            <div className="skills-line">
              <img src="/icon/C.jpg" alt="C" />
              <img src="/icon/C++.jpg" alt="C++" />
              <img src="/icon/java.jpg" alt="Java" />
              <img src="/icon/js.jpg" alt="JavaScript" />
            </div>
          </li>
          <li>
            <strong>Frameworks & Libraries:</strong>
            <div className="skills-line">
              <img src="/icon/react.jpg" alt="React" />
              <img src="/icon/nodejs.jpg" alt="Node.js" />
              <img src="/icon/expressjs.jpg" alt="Express.js" />
            </div>
          </li>
          <li>
            <strong>Databases:</strong>
            <div className="skills-line">
              <img src="/icon/postgresql.jpg" alt="PostgreSQL" />
              <img src="/icon/mongodb.jpg" alt="MongoDB" />
            </div>
          </li>
          <li>
            <strong>Problem Solving:</strong>
            <div className="skills-line">
              <img src="/icon/dsa.jpg" alt="DSA" />
              <img src="/icon/cp.jpg" alt="CP" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
