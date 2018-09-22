import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import OurMacarons from './our_macarons';
import GiftParties from './gift_parties';
import Contact from './contact';

export default () => {
    return (
        <div className="container">
            <Nav/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/our-macarons" component={OurMacarons}/>
            <Route path="/gift-parties" component={GiftParties}/>
            <Route path="/contact" component={Contact}/>
        </div>
    )
}