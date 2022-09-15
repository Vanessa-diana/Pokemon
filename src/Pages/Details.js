import React, { useEffect, useState } from 'react';
import { CardItem } from '../components/cardItem';
import { api } from '../services/api';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetailsCard = async () => {
      setLoading(true);
      await api
        .get(`cards/${id}`)
        .then((response) => setDetails(response.data))
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    };
    getDetailsCard();
  }, [id]);

  return <CardItem details={details.data} />;
};

export default Details;
