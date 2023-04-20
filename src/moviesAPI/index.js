//not in use so far
export const getInitialMovies = () => {
    return fetch("http://localhost:3100/students").then((res) => res.json());
  }