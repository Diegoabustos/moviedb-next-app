import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, movieUrl, creditsUrl } from '../config';
// Basic fetch
import { basicFetch } from '../api/fetchFunctions';
// Components
import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import Grid from '../components/Grid/Grid';
import Card from '../components/Card/Card';
// Types
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { Movie, Credits, Crew, Cast } from '../api/types';

type MovieProps = {
    movie: Movie;
    directors: Crew[],
    cast: Cast[];
}

const Movie = ({cast, movie, directors}: MovieProps) => {
  const { backdrop_path, budget, original_title, overview, poster_path, release_date, revenue, runtime, vote_average } = movie;
  return (
    <main>
        <Header />
        <Breadcrumb title={original_title} />
        <MovieInfo 
          thumbUrl={poster_path ? IMAGE_BASE_URL + POSTER_SIZE + poster_path : '/no_image.jpg'} 
          rating={vote_average}
          year={release_date.split('-')[0]}
          backgroundImgUrl={backdrop_path ? IMAGE_BASE_URL + BACKDROP_SIZE + backdrop_path : '/no_image.jpg'}
          title={original_title}
          summary={overview}
          directors={directors}
          time={runtime}
          budget={budget}
          revenue={revenue}
        />
        <Grid className='p-4 max-w-7xl m-auto' title='Actors'>
          {cast.map(actor => (
            <Card 
              key={actor.credit_id}
              imgUrl={actor.profile_path ?  IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : "/no_image.jpg"}
              title={actor.name}
              subtitle={actor.character}
            />
          ))}
        </Grid>
    </main>
  )
}

export default Movie;

export const getStaticProps: GetStaticProps = async context => {
    const id = context.params?.id as string;
  
    const movieEndpoint: string = movieUrl(id);
    const creditsEndpoint: string = creditsUrl(id);
  
    const movie = await basicFetch<Movie>(movieEndpoint);
    const credits = await basicFetch<Credits>(creditsEndpoint);
  
    // Get the directors only
    const directors = credits.crew.filter(member => member.job === 'Director');
  
    return {
      props: {
        movie,
        directors,
        cast: credits.cast
      },
      revalidate: 60 * 60 * 24 // Re-build page every 24 hours
    };
  };
  
export const getStaticPaths: GetStaticPaths = async () => {
return {
    paths: [],
    fallback: 'blocking'
};
};