import React from 'react';

import { AboutContainer, AboutTexts, AboutLinks } from '../styles/AboutStyles';

export const About = () => {
  return (
    <AboutContainer>
      <AboutTexts>
        Hello there, I'm Mélanie, I'm in professional retraining to become
        web-developer. In a former life I was Communication an PR executive for
        5 years.
      </AboutTexts>
      <AboutTexts>
        This app is an example of what I can do. I use React and hooks for
        front-end. <br />
        For the back-end, I used Node and Axios.
      </AboutTexts>

      <AboutTexts>
        The REST API I use is{' '}
        <AboutLinks
          title="Link to Final Fantasy XIV API"
          href="https://xivapi.com/"
        >
          https://xivapi.com/
        </AboutLinks>
      </AboutTexts>
      <AboutTexts>
        The project is on{' '}
        <AboutLinks
          title="link to github"
          href="https://github.com/Melcaro/ffxiv-api-app"
        >
          Github
        </AboutLinks>
        . You can check my{' '}
        <AboutLinks
          title="my linkedin account"
          href="https://www.linkedin.com/in/melanie-caro/"
        >
          Linkedin profile{' '}
        </AboutLinks>
        or my{' '}
        <AboutLinks title="my website" href="http://melaniecaro.fr/">
          website.
        </AboutLinks>
      </AboutTexts>
    </AboutContainer>
  );
};
