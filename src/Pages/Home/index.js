import MainTrailer from './MainTrailer/maintrailer';
import NowPlaying from './NowPlaying/nowplaying';
import TopRated from './TopRated/toprated';
import UpComing from './UpComing/upcoming';

const HomePage = () => {
  return (
    <>
      <MainTrailer />
      <NowPlaying />
      <TopRated />
      <UpComing />
    </>
  );
};

export default HomePage;
