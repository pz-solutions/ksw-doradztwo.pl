import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Contact from '../components/Contact'

import uslugi_adm from '../assets/images/uslugi_adm.jpg'
import uslugi_handl from '../assets/images/uslugi_handl.jpg'
import uslugi_kadr from '../assets/images/uslugi_kadr.jpg'
import uslugi_kpir from '../assets/images/uslugi_kpir.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="KSW Doradztwo"
          meta={[
            { name: 'description', content: 'Strona Główna' },
            {
              name: 'keywords',
              content: 'doradztwo, księgowość, kadry, rozliczenia, faktury',
            },
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
                kadrowo-płacowej. Wachlarz naszych klientów jest szeroki: osoby
                fizyczne rozliczające się ryczałtem, osoby fizyczne rozliczające
                się na podatkowej książce przychodów i rozchodów, spółki z o.o.,
                spółki komandytowe, spółki komandytowo - akcyjne, spółki
                należące do grup kapitałowych.
              </p>
              <p>
                W ramach umowy oferujemy pełen kontakt z Urzędem Skarbowym, ZUS
                i GUS również podczas kontroli. Nasi klienci mają możliwość na
                bieżąco wglądu w swoje zapisy księgowe. Biuro współpracuje z
                kancelarią adwokacką i notarialną, doradcą podatkowym i biegłym
                rewidentem.
              </p>
              <p>
                Nasi klienci mogą liczyć na pełne wsparcie i doradztwo przy
                prowadzeniu działalności gospodarczej.
              </p>
            </div>
          </section>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${uslugi_adm})` }}>
              <header className="major">
                <h3>Usługi administracyjne</h3>
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
              </header>
            </article>
            <article style={{ backgroundImage: `url(${uslugi_kpir})` }}>
              <header className="major">
                <h3>Prowadzenie podatkowej KPiR i ewidencji ryczałtu</h3>
                <ul>
                  <li>zapisy w księdze</li>
                  <li>rozliczenie deklaracji podatkowych VAT, PIT</li>
                  <li>ewidencja rejestrów VAT</li>
                  <li>ewidencja środków trwałych</li>
                  <li>obsługa plików JPK</li>
                </ul>
              </header>
            </article>
            <article style={{ backgroundImage: `url(${uslugi_handl})` }}>
              <header className="major">
                <h3>Prowadzenie ksiąg handlowych</h3>
                <ul>
                  <li>ewidencja rejestrów VAT</li>
                  <li>ewidencja środków trwałych</li>
                  <li>zapisy w księgach</li>
                  <li>prowadzenie rozrachunków</li>
                  <li>rozliczenie deklaracji VAT, CIT, PIT</li>
                  <li>obsługa plików JPK</li>
                </ul>
              </header>
            </article>
            <article style={{ backgroundImage: `url(${uslugi_kadr})` }}>
              <header className="major">
                <h3>Obsługa kadrowo-płacowa</h3>
                <ul>
                  <li>naliczanie wynagrodzeń</li>
                  <li>rozliczanie umów cywilno-prawnych</li>
                  <li>prowadzenie kadr i kartotek pracowniczych</li>
                  <li>rozliczenie deklaracji ZUS</li>
                  <li>rozliczenie deklaracji PIT, IFT</li>
                </ul>
              </header>
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
                kontaktowego. Proszę o podanie na formularzu formy prowadzonej
                działalności, przybliżonej liczby dokumentów i liczby
                zatrudnionych pracowników lub skontaktować się bezpośrednio z
                biurem.
              </p>
            </div>
          </section>
          <Contact />
          <section>
            <div className="inner">
              <p>
                Niniejszym informujemy, iż skorzystanie z wyżej wskazanych
                środków komunikacji i udostępnienie za ich pośrednictwem danych
                osobowych oznacza wyrażenie zgody na przetwarzanie danych
                osobowych w celu udzielenia odpowiedzi na pytanie.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/privacy" className="button next">
                    Więcej
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
