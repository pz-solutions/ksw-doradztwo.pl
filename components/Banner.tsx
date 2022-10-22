import * as React from 'react';

export default function Banner() {
    return (
        <section id="banner" className="major">
            <div className="inner">
                <header className="major">
                    <h1>KSW Doradztwo</h1>
                </header>
                <div className="content">
                    <p>
                        Doradztwo w zakresie prowadzenia działalności od rozpoczęcia do
                        zakończenia
                    </p>

                    <ul className="actions">
                        <li>
                            <a href="#one" className="button next scrolly">
                                Usługi
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
