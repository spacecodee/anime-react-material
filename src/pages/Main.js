import { Helmet } from 'react-helmet';
import CardGame from '../components/CardGame';
import { useEffect, useState } from 'react';
require('dotenv').config();

const Main = () => {
  const [items, setItems] = useState([]);

  const fetchApi = async () => {
    const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_XRAPIDAPIKEY
      }
    });

    const result = await response.json();
    setItems(result);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Helmet>
        <title>Anime | Material UI</title>
      </Helmet>

      <h1>Juegos gratis</h1>
      <div>
        {
          items.map(game =>
            <CardGame key={game.id}
                      img={game.thumbnail}
                      title={game.title}
                      short_description={game.short_description}
            />
          )
        }
      </div>
    </>
  );
};

export default Main;
