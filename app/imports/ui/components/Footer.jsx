import React from 'react';
import { Divider, Grid, Header } from 'semantic-ui-react';

export default class LogoMenu extends React.Component {
  render() {
    return (
      <div className="footer">
        <Grid verticalAlign="middle" centered>
          <Grid.Row>
            <Header as='h3' textAlign='center'>
                © 2015-2020 Nadia Kim</Header>
          </Grid.Row>
          <Divider/>
        </Grid>
      </div>
    );
  }
}
