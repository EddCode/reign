import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/globals";
import theme from "../../styles/theme";

const Init = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Init;
