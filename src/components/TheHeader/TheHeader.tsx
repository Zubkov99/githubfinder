import { ThemeSwitcher } from 'components/ThemeSwitcher'

import styles from './TheHeader.module.scss';

export const TheHeader = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      Githubfinder
    </div>
    <ThemeSwitcher />
  </div>
);
