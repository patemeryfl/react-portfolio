import React from 'react';
import { Link } from 'react-router'
import { MenuItem } from 'material-ui/Menu';

export default (props) => (
    <div>
        <Link to="/"><MenuItem onClick={props.onNavigate}>Home</MenuItem></Link>      
        <Link to="/projects"><MenuItem onClick={props.onNavigate}>Projects</MenuItem></Link>
        <Link to="/blog"><MenuItem onClick={props.onNavigate}>Blog</MenuItem></Link>
        <Link to="/contact"><MenuItem onClick={props.onNavigate}>Contact</MenuItem></Link>
        <Link to="/more"><MenuItem onClick={props.onNavigate}>More</MenuItem></Link>
        <Link to="/settings"><MenuItem onClick={props.onNavigate}>Settings</MenuItem></Link>        
    </div>
)