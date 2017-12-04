import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card} from 'material-ui/Card';

import Resume from './Resume'
import Education from './Education'
import About from './About'

const style = {
  padding: '20px 10% 0 10%',
  height: '500px'
}

export default class More extends React.Component {
  render() {
    return (
      <div>
        <Tabs style={{margin:'3px -12.5% 0 -15%'}}>
          <Tab label="Resume">
            <Card style={style}><Resume/></Card>
          </Tab>
          <Tab label="Education">
            <Card style={style}><Education/></Card>
          </Tab>
          <Tab label="About">
            <Card style={style}><About/></Card>
          </Tab>
          <Tab/><Tab/>
        </Tabs>
      </div>
    )
  }
}