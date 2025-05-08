import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Card from '../components/Card';

const Home = () => {
  const movies = [
    {
      id: 1,
      title: 'Inception',
      description: "A skilled thief enters people's dreams to steal secrets.",
      image: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description: 'Batman faces the Joker in Gotham City.',
      image: 'https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
    },
    {
      id: 3,
      title: 'Interstellar',
      description: 'A team of explorers travels through a wormhole in space.',
      image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    },
    {
      id: 4,
      title: 'The Shawshank Redemption',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      image: 'https://image.tmdb.org/t/p/w500/9Xw0I5RV2ZqNLpul6lXKoviYg55.jpg',
    },
    {
      id: 5,
      title: 'Parasite',
      description:
        'A poor family schemes to become employed by a wealthy family.',
      image: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    },
    {
      id: 6,
      title: 'Avengers: Endgame',
      description: 'The Avengers assemble to undo the damage caused by Thanos.',
      image: 'https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg',
    },
    {
      id: 7,
      title: 'Joker',
      description: 'A mentally troubled comedian turns to a life of crime.',
      image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    },
    {
      id: 8,
      title: 'Fight Club',
      description:
        'An insomniac office worker forms an underground fight club.',
      image: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
    },
  ];
  return (
    <div className="min-h-screen flex flex-col font-['Inter','Noto Sans',sans-serif] bg-white">
      <Navbar />
      <main className='px-4 sm:px-6 md:px-10'>
        <Banner />
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 py-6 sm:py-10'>
          {movies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
