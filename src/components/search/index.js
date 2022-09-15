import React from 'react';
import styles from './search.module.scss';

export const Search = ({ loading, getSearch, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.container}>
      <section>
        <p>Faça a busca da sua carta favorita pelo nome</p>
        <input
          type="text"
          className={styles.search}
          onChange={handleChange}
          placeholder="nome da carta"
        />
        <button onClick={() => getSearch()} disabled={loading}>
          Buscar
        </button>
      </section>
    </div>
  );
};
