import { Container } from "components";
import css from "./FallbackUI.module.css";

/**
 * Default info message in case of error or other fail behavior.
 * @returns {JSX.Element} Rendered fallback info component.
 */
const FallbackUI = () => {
  return (
    <Container>
      <h1 className={css["error-title"]}>Oooops! Something Went Wrong</h1>
      <p>We're sorry, but it looks like something went wrong. Our team is working to fix the issue.</p>
      <h2 className={css["error-sutitle"]}><strong>What can you do?</strong></h2>
      <ul className={css.solutions}>
          <li>Try refreshing the page.</li>
          <li>If the problem persists, please come back later.</li>
          <li>If this error continues to appear, please consider&nbsp;
            <a 
              className={css["contact-link"]} 
              href="https://github.com/oleksandr-romashko"
              title="Developer GitHub page"
              target="_blank"
              rel="noopener noreferrer">
              contacting us
            </a>
            .
          </li>
      </ul>
      <p>Thank you for your patience!</p>
    </Container>
  );
};

export default FallbackUI;