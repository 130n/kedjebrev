import React from 'react';
import AppNav from './AppNav';
import Intro from './Intro';
import Examples from './Examples';
import Footer from './Footer';
import History from "./History";
import '../style/custom.scss';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <AppNav/>
                <Intro/>
                <History/>
                <Examples/>
                <Footer/>
            </div>
        );
    }
}
