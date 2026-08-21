import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import { Layout } from '../components/Layout'
import uslugi_adm from '../public/images/uslugi_adm.jpg'
import uslugi_handl from '../public/images/uslugi_handl.jpg'
import uslugi_kadr from '../public/images/uslugi_kadr.jpg'
import uslugi_kpir from '../public/images/uslugi_kpir.jpg'
const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>KSW Doradztwo</title>
        <meta name="description" content="Strona Główna" />
      </Head>

      <Banner />

      <main className="bg-navy-light">
        <section>
          <div className="mx-auto w-[calc(100%-3rem)] max-w-[65rem] py-12 sm:w-[calc(100%-6rem)] sm:py-16 [&_p]:mb-8">
            <header className="mb-8 w-fit max-w-full">
              <h2 className="text-[1.5em] leading-[1.65] font-semibold after:mt-[0.325em] after:mb-2 after:block after:h-0.5 after:w-[calc(100%+0.5em)] after:max-w-full after:bg-white sm:text-[1.75em]">O KSW Doradztwo</h2>
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
        <section id="uslugi" className="flex flex-wrap scroll-mt-8">
          <article className="group relative flex h-[20em] w-full items-center overflow-hidden bg-cover bg-center px-6 py-12 xs:w-1/2 sm:h-[30vh] sm:min-h-[20em] sm:max-h-[30em] sm:px-12 sm:py-16 md:w-[40%] lg:h-[40vh] lg:min-h-[23em] lg:max-h-[40em] lg:px-16" style={{ backgroundImage: `url(${uslugi_adm.src})` }}>
            <div className="absolute inset-0 z-10 bg-accent-blue/85 transition-opacity duration-500 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-navy/25" />
            <header className="relative z-20 mb-8 w-fit max-w-full">
              <h3 className="text-[1.5em] leading-[1.65] font-semibold after:mt-[0.325em] after:mb-2 after:block after:h-0.5 after:w-[calc(100%+0.5em)] after:max-w-full after:bg-white sm:text-[1.75em]">Usługi administracyjne</h3>
              <ul className="mb-8 list-disc pl-4 [&_li]:pl-2">
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
          <article className="group relative flex h-[20em] w-full items-center overflow-hidden bg-cover bg-center px-6 py-12 xs:w-1/2 sm:h-[30vh] sm:min-h-[20em] sm:max-h-[30em] sm:px-12 sm:py-16 md:w-[60%] lg:h-[40vh] lg:min-h-[23em] lg:max-h-[40em] lg:px-16" style={{ backgroundImage: `url(${uslugi_kpir.src})` }}>
            <div className="absolute inset-0 z-10 bg-accent-purple/85 transition-opacity duration-500 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-navy/25" />
            <header className="relative z-20 mb-8 w-fit max-w-full">
              <h3 className="text-[1.5em] leading-[1.65] font-semibold after:mt-[0.325em] after:mb-2 after:block after:h-0.5 after:w-[calc(100%+0.5em)] after:max-w-full after:bg-white sm:text-[1.75em]">Prowadzenie podatkowej KPiR i ewidencji ryczałtu</h3>
              <ul className="mb-8 list-disc pl-4 [&_li]:pl-2">
                <li>zapisy w księdze</li>
                <li>rozliczenie deklaracji podatkowych VAT, PIT</li>
                <li>ewidencja rejestrów VAT</li>
                <li>ewidencja środków trwałych</li>
                <li>obsługa plików JPK</li>
              </ul>
            </header>
          </article>
          <article className="group relative flex h-[20em] w-full items-center overflow-hidden bg-cover bg-center px-6 py-12 xs:w-1/2 sm:h-[30vh] sm:min-h-[20em] sm:max-h-[30em] sm:px-12 sm:py-16 md:w-[60%] lg:h-[40vh] lg:min-h-[23em] lg:max-h-[40em] lg:px-16" style={{ backgroundImage: `url(${uslugi_handl.src})` }}>
            <div className="absolute inset-0 z-10 bg-accent-coral/85 transition-opacity duration-500 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-navy/25" />
            <header className="relative z-20 mb-8 w-fit max-w-full">
              <h3 className="text-[1.5em] leading-[1.65] font-semibold after:mt-[0.325em] after:mb-2 after:block after:h-0.5 after:w-[calc(100%+0.5em)] after:max-w-full after:bg-white sm:text-[1.75em]">Prowadzenie ksiąg handlowych</h3>
              <ul className="mb-8 list-disc pl-4 [&_li]:pl-2">
                <li>ewidencja rejestrów VAT</li>
                <li>ewidencja środków trwałych</li>
                <li>zapisy w księgach</li>
                <li>prowadzenie rozrachunków</li>
                <li>rozliczenie deklaracji VAT, CIT, PIT</li>
                <li>obsługa plików JPK</li>
              </ul>
            </header>
          </article>
          <article className="group relative flex h-[20em] w-full items-center overflow-hidden bg-cover bg-center px-6 py-12 xs:w-1/2 sm:h-[30vh] sm:min-h-[20em] sm:max-h-[30em] sm:px-12 sm:py-16 md:w-[40%] lg:h-[40vh] lg:min-h-[23em] lg:max-h-[40em] lg:px-16" style={{ backgroundImage: `url(${uslugi_kadr.src})` }}>
            <div className="absolute inset-0 z-10 bg-accent-gold/85 transition-opacity duration-500 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-navy/25" />
            <header className="relative z-20 mb-8 w-fit max-w-full">
              <h3 className="text-[1.5em] leading-[1.65] font-semibold after:mt-[0.325em] after:mb-2 after:block after:h-0.5 after:w-[calc(100%+0.5em)] after:max-w-full after:bg-white sm:text-[1.75em]">Obsługa kadrowo-płacowa</h3>
              <ul className="mb-8 list-disc pl-4 [&_li]:pl-2">
                <li>naliczanie wynagrodzeń</li>
                <li>rozliczanie umów cywilno-prawnych</li>
                <li>prowadzenie kadr i kartotek pracowniczych</li>
                <li>rozliczenie deklaracji ZUS</li>
                <li>rozliczenie deklaracji PIT, IFT</li>
              </ul>
            </header>
          </article>
        </section>
        <section className="border-t border-line">
          <div className="mx-auto w-[calc(100%-3rem)] max-w-[65rem] py-12 sm:w-[calc(100%-6rem)] sm:py-16">
            <header className="mb-8 w-fit max-w-full">
              <h2 className="text-[1.5em] leading-[1.65] font-semibold after:mt-[0.325em] after:mb-2 after:block after:h-0.5 after:w-[calc(100%+0.5em)] after:max-w-full after:bg-white sm:text-[1.75em]">Cennik</h2>
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
        <section className="border-t border-line">
          <div className="mx-auto w-[calc(100%-3rem)] max-w-[65rem] py-12 sm:w-[calc(100%-6rem)] sm:py-16">
            <p className="mb-8">
              Niniejszym informujemy, iż skorzystanie z wyżej wskazanych
              środków komunikacji i udostępnienie za ich pośrednictwem danych
              osobowych oznacza wyrażenie zgody na przetwarzanie danych
              osobowych w celu udzielenia odpowiedzi na pytanie.
            </p>
            <div>
                <Link href="/privacy" className="inline-flex h-[3.5em] items-center gap-8 px-7 text-[0.8em] font-semibold tracking-[0.25em] whitespace-nowrap uppercase shadow-[inset_0_0_0_2px_white] transition-colors duration-200 hover:text-highlight hover:shadow-[inset_0_0_0_2px_#9bf1ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight">
                  Więcej
                  <span aria-hidden="true" className="text-2xl leading-none">→</span>
                </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
