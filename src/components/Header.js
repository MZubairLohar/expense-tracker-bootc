import React from 'react';
import '../App.css';


import { Card } from '@material-ui/core'


const Header = () => {
    return (
        <Card className='header-main'>
                <div>
            <h3>YOUR BALANCE</h3>
            
            <h1>$10000</h1>
        </div>
        </Card>
        
    )
}

export default Header
