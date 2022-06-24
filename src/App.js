import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: `#ebfbff`,
    body: `#fff`,
    footer: `#003333`,
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Container>
          <h1>Hello</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
