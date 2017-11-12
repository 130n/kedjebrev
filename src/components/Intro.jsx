import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Intro extends React.Component {
    render() {
        return (
            <ScrollableAnchor id={'intro'}>
                <section className="hero is-medium is-primary">
                    <div className="hero-body">
                        <div className="container content">
                            <h1 className="title is-centered">
                                #vågaVägraKedjebrev
                            </h1>
                            <h2 className="subtitle">
                                Hjälp alla genom att hjälpa dig själv
                            </h2>
                            <div className="notification is-dark">
                                Kedjebrev som började dö ut i det tidiga milleniet har börjat göra en återkomst.
                                Den här sidan ämnar att utbilda om och förhindra framtida spridning av kedjebrev.
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}