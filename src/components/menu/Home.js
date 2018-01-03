import React from 'react'
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Background from '../../assets/intro.jpg'
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';
import Grid from 'material-ui/Grid';


const styles = {
  photo: {marginLeft: '20%'},
  background: {
    position: 'absolute',
    left: '0px',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: 5,
    overflowY: 'none'
  },
  overlay: {
    position: 'absolute',
    left: '0px',
    width: '100%',
    height: '80%',
    background: "linear-gradient(rgba(0,0,0,0.2), black)",
    zIndex: 3
  },
  icon: {
    lineHeight: '1.3em',
    width: '32px',
    textAlign: 'center' 
  },
  content: {
    paddingLeft: '40%',
    paddingRight: '40%',
    background: '#333333',
    borderRadius: '15px',
    zIndex: 999,
  }
}


const SocialIcons = [
  {name: 'Facebook', icon: 'fa fa-facebook fa-2x', link: 'https://www.facebook.com/Emery.Pat' },
  {name: 'Instagram', icon: 'fa fa-instagram fa-2x', link: 'https://www.instagram.com/patemeryfl/' },
  {name: 'Twitter', icon: 'fa fa-twitter fa-2x', link: 'https://www.twitter.com/patemeryfl' },
  {name: 'Github', icon: 'fa fa-github fa-2x', link: 'https://www.github.com/patemeryfl' },
  {name: 'LinkedIn', icon: 'fa fa-linkedin fa-2x', link: 'https://www.linkedin.com/in/patrick-emery-20234241' },
  {name: 'Youtube', icon: 'fa fa-youtube fa-2x', link: 'http://www.youtube.com/c/PatEmery' }
]

export default () => (
  <div style={styles.background}>
    <div style={styles.overlay}></div>
    <div className='home-wrapper'>
    <p className='title'>WELCOME</p>
    <Grid container spacing={16}>
      <Grid item xs={12} sm={12} md={4}>
        <img style={styles.photo}
        src={require('../../assets/images/ProfilePhotoSmall.png')} alt={'me'}/>
        <br/>
        <Typography type="title" component="p">whoami</Typography>
        <Divider/>
        <Typography type="subheading" component="p" align='justify'>
            <b>Name:</b> Pat Emery<br/>
            <b>Location:</b> Boston<br/>
            <b>Occupation:</b> Grad Student<br/> 
            <b>Github:</b> patemeryfl
        </Typography>
        {SocialIcons.map((i) => {
          return <Tooltip key= {i.name} id="tooltip-right" title={i.name} placement="bottom">
                  <Icon color="primary" style={styles.icon} className={i.icon}></Icon>
                </Tooltip>
        })}
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <Typography type="title" component="p">About</Typography>
        <Divider/>
        <Typography type="body2" component="p">
        I enjoy writing and designing applications and using various 
        frameworks to optimize functionality. I am passionate about 
        intuitive user-interfaces that focus on the human aspect of 
        design and features. Each application I have written has 
        helped me build my knowledge of the web applications and 
        their stack environment. I spend every day learning about 
        the new enhancements to different programming languages 
        and finding ways to improve my code. My objective is to 
        help build functional and well-designed applications 
        that will help guide the way that we interact with technology.
        </Typography>  
      </Grid>
    </Grid>
    </div>

  </div>
)