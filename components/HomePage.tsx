import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import styles from '../styles/site.module.css'

const services = [
  {
    title: 'Usługi administracyjne',
    items: [
      'archiwizacja dokumentów',
      'segregacja dokumentów',
      'wystawianie faktur',
      'sporządzanie raportów finansowych na podstawie zapisów z ksiąg rachunkowych',
      'obsługa płatności',
    ],
  },
  {
    title: 'Prowadzenie podatkowej KPiR i ewidencji ryczałtu',
    items: [
      'zapisy w księdze',
      'rozliczenie deklaracji podatkowych VAT, PIT',
      'ewidencja rejestrów VAT',
      'ewidencja środków trwałych',
      'obsługa plików JPK',
    ],
  },
  {
    title: 'Prowadzenie ksiąg handlowych',
    items: [
      'ewidencja rejestrów VAT',
      'ewidencja środków trwałych',
      'zapisy w księgach',
      'prowadzenie rozrachunków',
      'rozliczenie deklaracji VAT, CIT, PIT',
      'obsługa plików JPK',
    ],
  },
  {
    title: 'Obsługa kadrowo-płacowa',
    items: [
      'naliczanie wynagrodzeń',
      'rozliczanie umów cywilno-prawnych',
      'prowadzenie kadr i kartotek pracowniczych',
      'rozliczenie deklaracji ZUS',
      'rozliczenie deklaracji PIT, IFT',
    ],
  },
]

const hours = [
  { day: 'Pon. - Czw.', time: '8.00 do 16.30' },
  { day: 'Pt.', time: '9.00 do 15.00' },
]

const registry = [
  { term: 'NIP', value: '527-296-96-57' },
  { term: 'REGON', value: '389866608' },
  { term: 'KRS', value: '0000919485' },
  { term: 'Licencja nr', value: '33785/2009' },
]

const HomePage: NextPage = () => {
  return (
    <div className={styles.page}>
      <Head>
        <title>KSW Doradztwo</title>
        <meta name="description" content="Strona Główna" />
      </Head>

      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroPhoto} aria-hidden="true" />
        <div className={`${styles.container} ${styles.heroInner}`}>
          <span className={styles.kicker}>Biuro rachunkowe · Warszawa</span>
          <h1 className={styles.h1}>KSW Doradztwo</h1>
          <div className={styles.heroGrid}>
            <p className={styles.lead}>
              Doradztwo w zakresie prowadzenia działalności od rozpoczęcia do
              zakończenia
            </p>
            <a href="#uslugi" className={styles.cta}>
              Usługi
              <span aria-hidden="true" className={styles.ctaArrow}>→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="o-firmie" className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.overline}>O firmie</span>
            <h2 className={styles.h2}>O KSW Doradztwo</h2>
          </div>
          <div className={styles.aboutGrid}>
            <p className={styles.aboutNote}>
              Pełna obsługa księgowa, finansowa i kadrowo-płacowa
            </p>
            <div className={styles.aboutText}>
              <p>
                KSW Doradztwo jest biurem rachunkowym świadczącym usługi w
                zakresie pełnej obsługi księgowej, finansowej i
                kadrowo-płacowej. Wachlarz naszych klientów jest szeroki: osoby
                fizyczne rozliczające się ryczałtem, osoby fizyczne
                rozliczające się na podatkowej książce przychodów i rozchodów,
                spółki z o.o., spółki komandytowe, spółki komandytowo -
                akcyjne, spółki należące do grup kapitałowych.
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
          </div>
        </div>
      </section>

      <section id="uslugi" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.overline}>Zakres usług</span>
            <h2 className={styles.h2}>Usługi</h2>
          </div>
          {services.map((service, index) => (
            <article className={styles.svc} key={service.title}>
              <span className={styles.svcNum} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.svcTitle}>{service.title}</h3>
              <ul className={styles.svcList}>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="cennik" className={`${styles.section} ${styles.cennikBand}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.overline}>Cennik</span>
            <h2 className={styles.h2}>Cennik</h2>
          </div>
          <p className={styles.statement}>
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

      <section id="kontakt" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.overline}>Kontakt</span>
            <h2 className={styles.h2}>Kontakt</h2>
          </div>
          <div className={styles.contactGrid}>
            <form
              method="post"
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className={styles.fieldHalf}>
                <div className={styles.field}>
                  <label htmlFor="w3-name" className={styles.label}>Imię i nazwisko</label>
                  <input type="text" name="name" id="w3-name" autoComplete="name" className={styles.input} required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="w3-email" className={styles.label}>Email</label>
                  <input type="email" name="email" id="w3-email" autoComplete="email" className={styles.input} required />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="w3-message" className={styles.label}>Wiadomość</label>
                <textarea name="message" id="w3-message" rows={6} className={styles.input} required />
              </div>
              <div className={styles.formActions}>
                <input type="submit" value="Wyślij" className={`${styles.btn} ${styles.btnPrimary}`} />
                <input type="reset" value="Wyczyść" className={`${styles.btn} ${styles.btnGhost}`} />
              </div>
            </form>
            <div>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>KSW Doradztwo Sp. z o. o.</h3>
                <p className={styles.infoText}>
                  03-126 Warszawa,
                  <br />
                  ul. Ceramiczna 29a/30
                  <br />
                  +48 (22) 110 76 81
                  <br />
                  +48 663 631 997
                  <br />
                  <a href="mailto:biuro@ksw-doradztwo.pl">biuro@ksw-doradztwo.pl</a>
                </p>
                <p className={styles.infoText}>
                  Biuro czynne:
                  {hours.map((row) => (
                    <span key={row.day}>
                      <br />
                      {row.day} od {row.time}
                    </span>
                  ))}
                </p>
              </div>
              <div className={styles.infoBlock}>
                <dl className={styles.facts}>
                  {registry.map((row) => (
                    <div key={row.term}>
                      <dt>{row.term}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={`${styles.container} ${styles.rodoInner}`}>
          <p>
            Niniejszym informujemy, iż skorzystanie z wyżej wskazanych
            środków komunikacji i udostępnienie za ich pośrednictwem danych
            osobowych oznacza wyrażenie zgody na przetwarzanie danych
            osobowych w celu udzielenia odpowiedzi na pytanie.
          </p>
          <Link href="/privacy" className={styles.more}>
            Więcej
            <span aria-hidden="true" className={styles.moreArrow}>→</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default HomePage
