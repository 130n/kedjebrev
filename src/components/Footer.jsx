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

                    <div className="level">
                        <span className="level-item">
                            <strong>#vågavägrakedjebrev</strong>&nbsp;av&nbsp;<a href="http://alphadev.se">Leon Hennings</a>
                        </span>
                        <div className="level-item">
                            <a href="https://bulma.io/made-with-bulma/">
                                <img src="resources/made-with-bulma.png" width="128" height="24"/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}