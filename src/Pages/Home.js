import React, { useEffect, useState } from 'react';

import { Cards } from '../components/cards';
import { Search } from '../components/search';
import { api } from '../services/api';

export const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);
      await api
        .get(`cards`)
        .then((response) => setCards(response.data))
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    };
    getCards();
  }, [!search]);

  const getSearchCards = async () => {
    setLoading(true);
    await api
      .get(`cards?q=name:${search}`)
      .then((response) => setCards(response.data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <Search
        onChange={(e) => setSearch(e)}
        loading={loading}
        getSearch={getSearchCards}
      />
      <Cards cards={cards.data} loading={loading} />
    </div>
  );
};
