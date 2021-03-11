import React from 'react';
import { Grid, Menu, Dropdown } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
      <Grid verticalAlign="middle" centered>
        <Grid.Row>
          <Menu borderless className="topmenu">
            <Menu.Item>HOME</Menu.Item>
            <Dropdown item text="VISUAL DEVELOPMENT">
              <Dropdown.Menu>
                <Dropdown.Item>TOASTY EYE FOREST RANGERS</Dropdown.Item>
                <Dropdown.Item>CMATCHA TIRAMISU</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>ILLUSTRATION</Menu.Item>
            <Menu.Item>SHORT STORIES</Menu.Item>
            <Menu.Item>CONTACT INFO</Menu.Item>
          </Menu>
        </Grid.Row>
      </Grid>
    );
  }
}
