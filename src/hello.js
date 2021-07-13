import React from 'react';
import ProfilePage from './profile';
import NavBar from './Nav';
import './styles.css';

class Hello extends React.Component{
    render() {
        return (
            <div>
                <NavBar />
                <ProfilePage />
            </div>
        );
    }
 
}

export default Hello;