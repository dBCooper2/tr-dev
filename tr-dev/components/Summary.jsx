import styles from "../styles/Summary.module.css";

const Summary = () => {
  return (
    <div>
      <div>
        <h1>Trevor Rowland</h1>
        <h2>Business Intelligence, Data Analytics</h2>
        <h3>
          Studying the Intersection of Business, Programming and Mathematics
        </h3>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/trevor-rowland711/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <img
              src="https://raw.githubusercontent.com/dBCooper2/social-icons/master/SVG/Black/LinkedIN_black.svg"
              alt="LinkedIn Profile"
            />
            Linkedin
          </button>
        </a>
        <a
          href="https://github.com/dBCooper2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <img
              src="https://raw.githubusercontent.com/dBCooper2/social-icons/master/SVG/Black/Github_black.svg"
              alt="GitHub Profile"
            />
            Github
          </button>
        </a>
        <a
          href="/documents/trevor-rowland-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <img src="/icons/resume.svg" alt="Resume" />
            Resume
          </button>
        </a>
        <a href="/contact" target="_blank" rel="noopener noreferrer">
          <button>
            <img src="/icons/contact.svg" alt="Contact" />
            Contact
          </button>
        </a>
      </div>
    </div>
  );
};

export default Summary;
