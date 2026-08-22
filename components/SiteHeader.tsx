import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/logo.svg'
import styles from '../styles/site.module.css'
import ThemeToggle from './ThemeToggle'

export default function SiteHeader() {
  return (
    <>
      <div className={styles.top}>
        <div className={`${styles.container} ${styles.topInner}`}>
          <p>03-126 Warszawa · ul. Ceramiczna 29a/30</p>
          <a href="tel:+48221107681" className={styles.topPhone}>
            +48 (22) 110 76 81
          </a>
        </div>
      </div>

      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <Link href="/" className={styles.brand} aria-label="KSW Doradztwo — strona główna">
            <Image
              src={logo}
              alt="KSW Doradztwo"
              width={340}
              height={70}
              className={styles.logoImg}
              priority
            />
          </Link>
          <nav className={styles.nav} aria-label="Nawigacja">
            <Link href="/#o-firmie">O firmie</Link>
            <Link href="/#uslugi">Usługi</Link>
            <Link href="/#cennik">Cennik</Link>
            <Link href="/#kontakt">Kontakt</Link>
          </nav>
          <ThemeToggle className={styles.toggleSlot} />
        </div>
      </header>
    </>
  )
}
