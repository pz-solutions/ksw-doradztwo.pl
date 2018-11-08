import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="KSW Doradztwo"
          meta={[
            { name: 'description', content: 'Strona Główna' },
            { name: 'keywords', content: 'doradztwo, księgowość, kadry, rozliczenia, faktury' },
          ]}
        />

        <Banner />

        <div id="main">
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>O KSW Doradztwo</h2>
              </header>
              <p>
                KSW Doradztwo jest biurem rachunkowym świadczącym usługi w
                zakresie pełnej obsługi księgowej, finansowej i
                kadrowo-płacowej. Usługi świadczone są na rzecz zarówno osób
                prawnych jak i osób fizycznych.{' '}
              </p>
              <p>
                W ramach umowy oferujemy pełen kontakt z Urzędem Skarbowym i
                ZUS. Nasi klienci mają możliwość na bieżąco wglądu w zapisy
                księgowe swojej działalności. Biuro współpracuje z kancelarią
                prawną.
              </p>
            </div>
          </section>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Usługi administracyjne</h3>
                <p>
                  <ul>
                    <li>archiwizacja dokumentów</li>
                    <li>segregacja dokumentów</li>
                    <li>wystawianie faktur</li>
                    <li>
                      sporządzanie raportów finansowych na podstawie zapisów z
                      ksiąg rachunkowych
                    </li>
                    <li>obsługa płatności</li>
                  </ul>
                </p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Prowadzenie podatkowej księgi przychodów i rozchodów</h3>
                <p>
                  <ul>
                    <li>zapisy w księdze</li>
                    <li>rozliczenie deklaracji podatkowych VAT, PIT</li>
                  </ul>
                </p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Prowadzenie ksiąg handlowych</h3>
                <p>
                  <ul>
                    <li>ewidencja rejestrów VAT</li>
                    <li>ewidencja środków trwałych</li>
                    <li>zapisy w księgach</li>
                    <li>prowadzenie rozrachunków</li>
                    <li>rozliczenie deklaracji VAT, CIT, PIT</li>
                  </ul>
                </p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Obsługa kadrowo-płacowa</h3>
                <p>
                  <ul>
                    <li>naliczanie wynagrodzeń</li>
                    <li>rozliczanie umów cywilno-prawnych</li>
                    <li>prowadzenie kadr i kartotek pracowniczych</li>
                    <li>rozliczenie deklaracji ZUS</li>
                    <li>rozliczenie deklaracji PIT, IFT</li>
                  </ul>
                </p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
          </section>
          <section id="three">
            <div className="inner">
              <header className="major">
                <h2>Cennik</h2>
              </header>
              <p>
                Cennik uzależniony jest od rodzaju prowadzonej działalności,
                ilości dokumentów i liczby zatrudnionych pracowników. W celu
                ustalenia ceny usługi proszę o wypełnienie formularza
                kontaktowego. Proszę o podanie na formularzu przybliżonej liczby
                dokumentów i liczby zatrudnionych pracaowników.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
