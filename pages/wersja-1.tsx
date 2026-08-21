import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/logo.svg'
import ThemeToggle from '../components/ThemeToggle'
import styles from '../styles/wersja1.module.css'

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

const Wersja1: NextPage = () => {
  return (
    <div className={styles.page}>
      <Head>
        <title>KSW Doradztwo — Wersja 1</title>
        <meta name="description" content="Strona Główna" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,340..640;1,9..144,340..640&family=Instrument+Sans:ital,wght@0,400..600;1,400..600&family=Fragment+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <Link href="/" className={styles.brand} aria-label="KSW Doradztwo — strona główna">
            <Image src={logo} alt="KSW Doradztwo" width={340} height={70} className={styles.logoImg} priority />
          </Link>
          <nav className={styles.nav} aria-label="Nawigacja">
            <a href="#o-firmie">O firmie</a>
            <a href="#uslugi">Usługi</a>
            <a href="#cennik">Cennik</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <ThemeToggle className={styles.toggleSlot} />
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.container}>
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

      <section id="o-firmie" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.secIndex} aria-hidden="true">01</span>
            <h2 className={styles.h2}>O KSW Doradztwo</h2>
          </div>
          <div className={styles.aboutGrid}>
            <p className={styles.aboutNote}>Pełna obsługa księgowa, finansowa i kadrowo-płacowa</p>
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
            <span className={styles.secIndex} aria-hidden="true">02</span>
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

      <section id="cennik" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.secIndex} aria-hidden="true">03</span>
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
            <span className={styles.secIndex} aria-hidden="true">04</span>
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
                  <label htmlFor="w1-name" className={styles.label}>Imię i nazwisko</label>
                  <input type="text" name="name" id="w1-name" autoComplete="name" className={styles.input} required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="w1-email" className={styles.label}>Email</label>
                  <input type="email" name="email" id="w1-email" autoComplete="email" className={styles.input} required />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="w1-message" className={styles.label}>Wiadomość</label>
                <textarea name="message" id="w1-message" rows={6} className={styles.input} required />
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
                  <br />
                  Pon. - Czw. od 8.00 do 16.30
                  <br />
                  Pt. od 9.00 do 15.00
                </p>
              </div>
              <div className={styles.infoBlock}>
                <p className={styles.infoMeta}>
                  NIP: 527-296-96-57
                  <br />
                  REGON: 389866608
                  <br />
                  KRS: 0000919485
                  <br />
                  Licencja nr: 33785/2009
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rodo}>
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

      <footer className={styles.footer}>
        <div className={styles.container}>
          <ul className={styles.footerList}>
            <li>
              2022–2026 &copy;{' '}
              <a href="https://pz-solutions.pl" rel="noreferrer" target="_blank">PZ Solutions</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Wersja1
