import github_icon from "../styles/github2.png";

const Footer = () => {
  return (
    <footer>
      <p>Copyright © 2023 rishawraj </p>

      {/* <span className="github-icon"> */}

      <a href="https://github.com/rishawraj" target="_blank">
        <img height="30px" width="30px" src={github_icon} alt="github-icon" />
      </a>
      {/* </span> */}
    </footer>
  );
};

export { Footer };
