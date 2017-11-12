import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

const types = {
    peerpressure: {
        title: "Grupptryck",
        image: "resources/fortune.jpg",
        colorClass: "is-danger",
        content: <div>
            <p>
                En vanlig sorts kedjebrev är de som uppmanar till någon form av popularitetstävling.
                <em>Skicka vidare, om du får X svar är du omtyckt annars är du det inte.</em>
                Den här sortens kedjebrev skulle kunna liknas vid en passiv form av mobbing.
            </p>
            <p>
                Eftersom de spelar på skuldbeläggning och förväntningen att bli besvarad så är det här den formen av
                kedjebrev som påverkar anhöriga till spridare mest.
            </p>
        </div>
    },
    scare: {
        title: "Skrämsel",
        image: "resources/scare.jpg",
        colorClass: "is-dark",
        content: <div>
            <p>
                Kedjebrev som försöker spela på rädsla har blivit vanligare. De utnyttjar folks okunskap och godhet
                för att få spridning. Ofta är det varningar för fiktiva bedrägerier där påhittade personer namnges,
                vilket förväntas ge trovärdighet till historien.
            </p>
            <p>
                Deras enda resultat är att de skapar rädsla och oros vilket gör att de fungerar som en slags terrorism.
            </p>
        </div>
    },
    fortune: {
        title: "Spådom",
        image: "resources/fortune.jpg",
        colorClass: "is-warning",
        content: <div>
            <p>
                Spådomsliknande kedjebrev är en av de vanligaste kedjebreven man ser idag.
                <em>Om du skickar vidare det här till sju andra så kommer du få lycka/pengar/framgång.</em>
                Den spelar också på rädsla men är oftast fokuserad på dina relationer, att folk tycker om dig.
            </p>
            <p>
            </p>
        </div>
    }

};
export default class ExampleItem extends React.Component {
    render() {
        let type = types[this.props.type];
        return (
            <ScrollableAnchor id={this.props.type}>
                <section className={`hero ${type.colorClass}`}>
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
            </ScrollableAnchor>
        );
    }
}