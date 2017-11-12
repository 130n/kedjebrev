import React from 'react';

const types = {
    peerpressure: {
        title: "Grupptryck",
        image: "resources/fortune.jpg",
        content: <div>
            <p>
                En vanlig sorts kedjebrev är de som uppmanar till någon form av popularitetstävling.
                <em>Skicka vidare, om du får X svar är du omtyckt annars är du det inte.</em>
            </p>
            <p>
                Den här sortens kedjebrev skulle kunna liknas vid en passiv form av mobbing.
            </p>
        </div>
    },
    scare: {
        title: "Skrämsel",
        image: "resources/scare.jpg",
        content: <p>
            Kedjebrev som försöker spela på rädsla har blivit vanliga.
            De försöker spela på folks osäkerhet för att få spridning.
            Motivationen till detta
        </p>
    },
    fortune: {
        title: "Spådom",
        image: "resources/fortune.jpg",
        content: <p>
            Spådomsliknande kedjebrev är en av de vanligaste kedjebreven man ser idag.
            Den spelar också på rädsla men är oftast fokuserad på dina relationer, att folk tycker om dig.
        </p>
    }

};
export default class ExampleItem extends React.Component {
    render() {
        let type = types[this.props.type];
        return (
            <section className="hero is-primary" id={this.props.type}>
                <div className="hero-body">
                    <div className="columns">
                        <div className="content column">
                            <h3 className="title is-3">{type.title}</h3>
                            <div className="box">
                                {type.content}
                            </div>
                        </div>
                        <div className="column box">
                            <figure className="image">
                                <img src={type.image}/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}