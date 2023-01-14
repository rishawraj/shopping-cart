import github_icon from "../styles/github2.png";

const Footer = () => {
  return (
    <footer data-testid="footer">
      <p>Copyright © 2023 rishawraj </p>
      <a href="https://github.com/rishawraj" target="_blank">
        <img height="30px" width="30px" src={github_icon} alt="github-icon" />
      </a>
    </footer>
  );
};

export { Footer };
