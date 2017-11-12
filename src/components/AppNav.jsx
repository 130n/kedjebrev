import React from 'react';
import {goToAnchor} from 'react-scrollable-anchor';

export default class AppNav extends React.Component {
    constructor() {
        super();
        this.state = {
            toggleBurger: false,
            navClass: ''
        };
    }

    toggleBurger() {
        this.setState({
            toggleBurger: !this.state.toggleBurger,
            navClass: (!this.state.toggleBurger ? " is-active" : "")
        });
    }

    navigate(anchor) {
        this.setState({
            toggleBurger: false,
            navClass: ""
        });
        goToAnchor(anchor);
    }

    render() {
        return (
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="">
                        <i className="fa fa-lg fa-chain-broken"/>
                        &nbsp;Kedjebrev&nbsp;<i className="fa fa-lg fa-envelope"/>
                        &nbsp;<i className="fa fa-long-arrow-right"/>&nbsp;
                        <small>Nej tack</small>
                    </a>
                    <div
                        className={"navbar-burger" + this.state.navClass}
                        data-target="navMenu"
                        onClick={this.toggleBurger.bind(this)}>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
                <div className={"navbar-menu" + this.state.navClass} id="navMenu">
                    <div className="navbar-start"/>
                    <div className="navbar-end">
                        <a className="navbar-item" onClick={this.navigate.bind(this, "intro")}>Hem</a>
                        <a className="navbar-item" onClick={this.navigate.bind(this, "history")}>Historia</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" onClick={this.navigate.bind(this, "examples")}>
                                Exempel
                            </a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item" onClick={this.navigate.bind(this, "scare")}>Skrämsel</a>
                                <a className="navbar-item" onClick={this.navigate.bind(this, "fortune")}>Spådom</a>
                                <a className="navbar-item"
                                   onClick={this.navigate.bind(this, "peerpressure")}>Grupptryck</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}