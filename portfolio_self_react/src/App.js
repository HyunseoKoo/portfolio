import { ThemeProvider } from 'styled-components';
import MainHeader from './Components/Layout/header';
import GlobalStyles from './Styles/global';
import { theme } from './Styles/theme';
import Home from './Components/home';
import MainAbout from './Components/about';
import MainSkills from './Components/skills';
import MainProjects from './Components/projects';
import MainArchive from './Components/archive';
import MainFooter from './Components/Layout/footer';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainHeader />
        <Home />
        <MainAbout />
        <MainSkills />
        <MainProjects />
        <MainArchive />
        <MainFooter />
      </ThemeProvider>
    </div>
  );
}

export default App;
