import React from 'react'

const Contact = props => (
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
            <textarea name="message" id="message" rows="6" />
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
            <span className="icon alt fa-envelope" />
            <h3>Katarzyna Woźniak</h3>
            <span>
              00-126 Warszawa,
              <br />
              ul. Ceramiczna 29A/30
              <br />
              +48 601 433 705
              <br />
              <a href="mailto:biuro@ksw-doradztwo.pl">
                k.wozniak@ksw-doradztwo.pl
              </a>
            </span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-building" />
            <h3>Filia</h3>
            <span>
              00-834 Warszawa,
              <br />
              ul. Pańska 73 lok. 500
              <br />
              +48 (22) 110 76 81
              <br />
              +48 663 631 997
              <br />
              <a href="mailto:biuro@ksw-doradztwo.pl">biuro@ksw-doradztwo.pl</a>
            </span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-dollar" />
            <span>
              NIP: 524-224-66-70
              <br />
              REGON: 141525963
              <br />
              Licencja nr: 33785/2009
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
