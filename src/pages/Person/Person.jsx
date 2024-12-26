import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchPerson,
  selectPerson,
  selectPersonCredits,
  selectStatus
} from "../../utils/redux/personSlice";
import { useEffect } from "react";
import {
  Banner,
  Biography,
  Birthdate,
  Birthplace,
  Cast,
  Container,
  Image,
  ImageWrapper,
  Name,
  PersonDetails,
  SectionHeader,
  SectionWrapper
} from "./styled";
import { nanoid } from "nanoid";
import { Loader } from "../../components/Loader/Loader";
import { MovieTile } from "../../components/MovieTile/MovieTile";

const Person = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const personCredits = useSelector(selectPersonCredits);
  const status = useSelector(selectStatus);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchPerson({ personId: id }));
  }, [dispatch, id]);

  switch (status) {
    case "success":
      return (
        <Container>
          <Banner>
            <ImageWrapper>
              <Image loading="lazy" alt={person.name} src={`https://image.tmdb.org/t/p/original/${person.profile_path}`} />
            </ImageWrapper>
            <PersonDetails>
              {person.name && <Name>{person.name}</Name>}
              {person.birthday && <Birthdate>{person.birthday}</Birthdate>}
              {person.place_of_birth && <Birthplace>{person.place_of_birth}</Birthplace>}
            </PersonDetails>
            <Biography>{person.biography}</Biography>
          </Banner>
          {personCredits.cast?.length && (
            <SectionWrapper>
              <SectionHeader>Cast</SectionHeader>
              <Cast>
                {personCredits.cast.map((movie) => (
                  <MovieTile
                    key={nanoid()}
                    movie={movie}
                  />
                ))}
              </Cast>
            </SectionWrapper>
          )}
          {personCredits.crew?.length && (
            <SectionWrapper>
              <SectionHeader>Crew</SectionHeader>
              <Cast>
                {personCredits.crew.map((movie) => (
                  <MovieTile
                    key={nanoid()}
                    movie={movie}
                  />
                ))}
              </Cast>
            </SectionWrapper>
          )}
        </Container>
      );
    case "loading":
      return <Loader />;
    default:
      return <>Error</>;
  }
};

export default Person;
