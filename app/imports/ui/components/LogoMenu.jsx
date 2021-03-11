import React from 'react';
import { Image, Menu } from 'semantic-ui-react';

export default class LogoMenu extends React.Component {
  render() {
    return (
      <Menu borderless className="logomenu">
        <Image centered item src="images/nadiakim.png" height="70px" alt="nadiakim logo"/>
      </Menu>
    );
  }
}
