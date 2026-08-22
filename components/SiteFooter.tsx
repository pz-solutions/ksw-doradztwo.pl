import styles from '../styles/site.module.css'

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.footerList}>
          <li>
            2022–2026 &copy;{' '}
            <a href="https://pz-solutions.pl" rel="noreferrer" target="_blank">
              PZ Solutions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
