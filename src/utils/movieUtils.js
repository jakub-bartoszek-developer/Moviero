export function mergeMovieCredits(movieCredits) {
 const mergedCast = Object.values(
  movieCredits.cast.reduce((acc, person) => {
   if (!acc[person.id]) {
    acc[person.id] = { ...person, characters: [person.character] };
   } else {
    acc[person.id].characters.push(person.character);
   }
   return acc;
  }, {})
 );

 const mergedCrew = Object.values(
  movieCredits.crew.reduce((acc, person) => {
   if (!acc[person.id]) {
    acc[person.id] = { ...person, jobs: [person.job] };
   } else {
    acc[person.id].jobs.push(person.job);
   }
   return acc;
  }, {})
 );

 return { cast: mergedCast, crew: mergedCrew };
}