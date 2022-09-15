import React from 'react';
import { getImage, iterableArray } from '../../utils';
import styles from './cardItem.module.scss';

export const CardItem = (details) => {
  return (
    <div className={styles.container}>
      <section className={styles.image}>{getImage(details.image)}</section>
      <section className={styles.box}>
        <strong>Pokemon</strong>
        {details.data && (
          <>
            <p>{details.data.name}</p>
            <span className={styles.divider}></span>
            <strong>ID</strong>
            <p>{details.data.id}</p>
            <span className={styles.divider}></span>
            <strong>Tipo</strong>
            <p>{details.types && iterableArray(details.types)}</p>
            <span className={styles.divider}></span>
            <strong>Resistencia(s)</strong>
            <p>
              {details.resistances
                ? details.resistances.map((resistance) => (
                    <p>{`Resistência:${resistance.type} | ${resistance.value}`}</p>
                  ))
                : 'Não há resistências'}
            </p>
            <span className={styles.divider}></span>
            <strong>Fraquezas(s)</strong>
            <p>
              {details.weaknesses &&
                details.weaknesses.map((weaknesse) => (
                  <p>{`${weaknesse.type} | ${weaknesse.value}`}</p>
                ))}
            </p>
            <span className={styles.divider}></span>
            <strong>Ataques</strong>
            <ul key={details.attacks.name}>
              {details.attacks &&
                details.attacks.map((attack) => <li> - {attack.name}</li>)}
            </ul>
          </>
        )}
      </section>
    </div>
  );
};
