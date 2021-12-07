import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const routes = {
  "Home": "/",
  "Projects": "/projects",
  "Resume": "/resume",
};

const Navbar: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.nav}>
      {Object.entries(routes).map(([name, href]) => {
        const isActive = router.pathname === href;

        return (
          <Link href={href} key={name}>
            <a className={isActive ? styles.active : ""}>{name}</a>
          </Link>
          )
        })
      }
    </div>
  ) 
}

export default Navbar;
