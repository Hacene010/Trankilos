import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import SSearch from './style';

function Results({ loading, error, results, focus, query }) {
  if (!focus || !query) {
    return null;
  }
  if (error) {
    return <>Error</>;
  }
  if (loading) {
    return <>Loading</>;
  }
  if (!results.length) {
    return <>No results</>;
  }
  return (
    <ul>
      {results.slice(0, 5).map((char) => {
        return (
          <li key={char.id}>
            <figure>
              <img src="" alt="" />
              <figcaption>{char.name}</figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setQuery(newValue);
    setError(false);
    if (!newValue) {
      setResults([]);
      return;
    }

    setLoading(true);
    axios
      .get(`http://localhost:5050/characters?needle=${newValue}`)
      .then(({ data }) => {
        setResults(data);
      })
      .catch(() => {
        toast.error('Could not fetch results, please try again later');
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SSearch>
      <input
        type="search"
        value={query}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className="searchResults">
        <Results
          loading={loading}
          results={results}
          error={error}
          focus={focus}
          query={query}
        />
      </div>
    </SSearch>
  );
}
Results.propTypes = {
  error: PropTypes.bool.isRequired,
  focus: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  query: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};
