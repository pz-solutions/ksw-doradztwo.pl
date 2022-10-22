import * as React from 'react';

export default function Contact() {
    return (
        <section id="contact">
            <div className="inner">
                <section>
                    <form
                        method="post"
                        name="contact"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        action="/"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="bot-field" />
                        <div className="field half first">
                            <label htmlFor="name">Imię i nazwisko</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Wiadomość</label>
                            <textarea name="message" id="message" rows={6} />
                        </div>
                        <ul className="actions">
                            <li>
                                <input type="submit" value="Wyślij" className="special" />
                            </li>
                            <li>
                                <input type="reset" value="Wyczyść" />
                            </li>
                        </ul>
                    </form>
                </section>
                <section className="split">
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-building" />
                            <h3>KSW Doradztwo Sp. z o. o.</h3>
                            <span>
                                00-195 Warszawa,
                                <br />
                                ul. Słomińskieo 15 lok 14
                                <br />
                                <sup>Wejście od basenów na Inflanckiej</sup>
                                <br />
                                +48 (22) 110 76 81
                                <br />
                                +48 663 631 997
                                <br />
                                <a href="mailto:biuro@ksw-doradztwo.pl">biuro@ksw-doradztwo.pl</a>
                                <br />
                                <br />
                                Biuro czynne:
                                <br />
                                Pon. - Czw. od 8.00 do 16.30
                                <br />
                                Pt. od 9.00 do 15.00
                            </span>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-dollar" />
                            <span>
                                NIP: 527-296-96-57
                                <br />
                                REGON: 389866608
                                <br />
                                KRS: 0000919485
                                <br />
                                Licencja nr: 33785/2009
                            </span>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    );
}
