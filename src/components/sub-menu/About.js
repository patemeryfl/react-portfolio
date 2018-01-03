import React from 'react'
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

export default () => (
  <div>
  <Typography type="display1" component="h1">
    About
  </Typography>
  <br/>
  <Card>
    <CardContent>
    <Typography type="title" component="h1">
      Features
    </Typography>
    <Typography type="title" component="h1">
      Progressive Web App
    </Typography>
    <Typography type="title" component="h1">
      Future Updates
    </Typography>
    </CardContent>
  </Card>
  </div>
)