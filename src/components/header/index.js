import React from 'react';
import styles from './header.module.scss';

export const Header = () => (
  <header className={styles.container}>
    <section className={styles.title}>
      <img src="/logo.png" alt="logo" width="32px" height="32px" />
      <nav>
        <a href="/">Inicio</a>
      </nav>
      <h1>Pokemon TGC</h1>
    </section>
  </header>
);
