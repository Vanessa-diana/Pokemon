import React from 'react';
import { Link } from 'react-router-dom';
import { iterableArray } from '../../utils';

import styles from './card.module.scss';

export const Cards = ({ cards = [], loading = false }) => (
  <div className={styles.container}>
    {cards && cards?.length
      ? cards.map((card) => (
          <div className={styles.card} key={card.id}>
            <section className={styles.content}>
              <img src={card.images.small} alt={card.name} />
              <span>{card.name}</span>
              <p>{card.id}</p>
              <p>{iterableArray(card && card.types)}</p>
            </section>

            <Link to={`${card.id}`}>
              <button className={styles.details}>Detalhes</button>
            </Link>
          </div>
        ))
      : !loading && (
          <span className={styles.notFound}>Pokemón não encontrado</span>
        )}
  </div>
);
