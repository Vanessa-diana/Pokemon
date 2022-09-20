import React from 'react';
import { getImage, iterableArray } from '../../utils';
import styles from './cardItem.module.scss';

export const CardItem = (details = {}) => {
  const { data } = details.details;

  return (
    <div className={styles.container}>
      {data && (
        <>
          <section className={styles.image}>
            <img src={getImage(data?.images)} alt={data.name} />
          </section>
          <section className={styles.box}>
            <strong>Pokemon</strong>
            <p>{data.name}</p>
            <span className={styles.divider}></span>
            <strong>ID</strong>
            <p>{data.id}</p>
            <span className={styles.divider}></span>
            <strong>Tipo</strong>
            <p>{data.types && iterableArray(data.types)}</p>
            <span className={styles.divider}></span>
            <strong>Resistencia(s)</strong>
            {data.resistances
              ? data.resistances.map((resistance) => (
                  <p>{`Resistência:${resistance.type} | ${resistance.value}`}</p>
                ))
              : 'Não há resistências'}
            <span className={styles.divider}></span>
            <strong>Fraquezas(s)</strong>
            {data.weaknesses &&
              data.weaknesses.map((weaknesse) => (
                <p>{`${weaknesse.type} | ${weaknesse.value}`}</p>
              ))}
            <span className={styles.divider}></span>
            <strong>Ataques</strong>
            <ul key={data.id}>
              {data.attacks &&
                data.attacks.map((attack) => <li> - {attack.name}</li>)}
            </ul>
          </section>
        </>
      )}
    </div>
  );
};
