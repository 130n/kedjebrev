import React from 'react';

export default class AppNav extends React.Component {
    render() {
        return (

            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href=""><strong>kedjebrev</strong></a>
                    <div className="navbar-burger" data-target="navMenu">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
                <div className="navbar-menu" id="navMenu">
                    <div className="navbar-start"/>
                    <div className="navbar-end">
                        <a className="navbar-item" ref="#intro">Intro</a>
                        <a className="navbar-item" ref="#scare">Skrämsel</a>
                        <a className="navbar-item" ref="#peerpressure">Grupptryck</a>
                        <a className="navbar-item" ref="#fortune">Spådom</a>
                    </div>
                </div>
            </nav>
        );
    }
}