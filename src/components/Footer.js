import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo.png" alt="bubble logo" />
        <Flex>
          <ul>
            <li>Contact us</li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2021 Bubble. All rights reserved</p>
        <p>
          Coded by {""}
          <a
            href="https://www.lunasmithart.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luna Smith
          </a>
          , open source on{" "}
          <a
            href="https://github.com/Lu-Smith/styled-components"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </Container>
    </StyledFooter>
  );
}
