import React from 'react'
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';

const styles = {
  body: {
    position: 'absolute',
    top: '140px',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgba(68,68,68,0.5)',
    height: '350px',
    borderRadius: '15px'
  },
  title: {
    textAlign: 'center',
    marginTop: '-20px'
  }
}

export default () => (
  <div>
    <h1 style={styles.title}>Welcome.</h1>
    <div style={styles.body} className='home-grid'>
      <div>
        <Tooltip
            title='Facebook'
            placement='left'
            href="https://www.facebook.com/Emery.Pat" target="_blank" rel="noopener">
          <IconButton className="fa fa-facebook fa-2x" aria-hidden="true"></IconButton>
        </Tooltip>
      </div>
      <div>
        <h3>How to set up</h3>
      </div>
    </div>
  </div>
)