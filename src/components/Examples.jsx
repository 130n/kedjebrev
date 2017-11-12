import React from 'react';
import ExampleItem from './ExampleItem';
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Examples extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({hasError: true});
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render() {
        return (<div>
            {!this.state.hasError &&
            <div>
                <ScrollableAnchor id={'examples'}>
                    <section className="hero is-dark">
                        <div className="hero-body">
                            <div className="content">
                                <h2 className="title is-2">Exempel</h2>
                            </div>
                        </div>
                    </section>
                </ScrollableAnchor>
                <ExampleItem type="scare"/>
                <ExampleItem type="fortune"/>
                <ExampleItem type="peerpressure"/>
            </div>}
            {this.state.hasError && <div className="is-danger">FEL</div>}
        </div>);
    }
}