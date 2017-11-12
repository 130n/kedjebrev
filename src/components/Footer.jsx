import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="content has-text-centered">

                    <article className="message is-warning">
                        <div className="message-body">
                            Den här sidans enda syfte är att hjälpa att informera människor om kedjebrev så att vi kan
                            bli av med dem en gång för alla.
                        </div>
                    </article>
                    <strong>#vågavägrakedjebrev</strong> av <a href="http://alphadev.se">Leon Hennings</a>
                </div>
            </footer>
        )
    }
}