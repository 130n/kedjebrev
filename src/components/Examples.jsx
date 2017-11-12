import React from 'react';
import ExampleItem from './ExampleItem';

export default class Examples extends React.Component {
    render() {
        return (
            <div>
                <section className="hero is-danger">
                    <div className="hero-body">
                        <div className="content">
                            <h2 className="title is-2">Exempel</h2>
                        </div>
                    </div>
                </section>
                <ExampleItem type="scare"/>
                <ExampleItem type="fortune"/>
                <ExampleItem type="peerpressure"/>
            </div>
        );
    }
}