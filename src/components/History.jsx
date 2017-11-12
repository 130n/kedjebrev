import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class History extends React.Component {
    render() {
        return (
            <ScrollableAnchor id="history">
                <div className="hero is-light is-bold">
                    <div className="hero-body content">
                        <h2>Historia</h2>
                        De klassiska kedjebreven kom ofta i två sorter:
                        <ul>
                            <li>
                                En person skickar ett brev som skickas vidare till nästa person som skickar vidare
                                till nästa.
                            </li>
                            <li>
                                En person skickar brev till flera personer som gör samma sak med syftet att få <em>exponentiell
                                spridning</em>
                            </li>
                        </ul>
                        <p>
                            De gamla kedjebreven hade som syfte att skapa en slags gemenskap och känsla av
                            delaktighet i världen. I och med internet och sociala medier finns inte längre det behovet
                            när vem som helst kan kommunicera med främlingar världen över. Inga av de positiva
                            tendenserna finns kvar i spridningen av kedjebrev idag.
                        </p>
                        <p>
                            Elektroniska kedjebrev har funnits lika länge som internet. Eftersom det är mindre
                            krävande att skicka ett email än ett riktigt brev så är det större chans att folk faktiskt
                            skickar vidare brevet. Trots detta går det inte att hitta några framgångshistorier eller
                            positiva händelser som kommit från kedjebrev.
                        </p>
                        <p>
                            Det är så lätt att dela med sig av saker man läser eller ser på internet att den
                            enklaste tumregeln är att <strong>dela eller skicka inte vidare saker som explicit säger
                            att du ska göra det</strong>.
                        </p>
                    </div>
                </div>
            </ScrollableAnchor>
        );
    }
}