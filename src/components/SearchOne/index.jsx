import { useState } from 'react';
import { Link } from 'react-router-dom';
import SSearchOne from './style';

export default function SearchOne() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(undefined);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setQuery(newValue);
    if (!newValue) {
      setResult(undefined);
      return;
    }
    /* Insert logic here: api call, complex functions, blablablah... */
    if (newValue === 'Gugba') {
      const gugba = {
        avatar: '/img/characters/gugba/avatar.png',
        name: 'Gugba',
      };
      setResult(gugba);
    } else {
      setResult(null);
    }
    /* End logic */
  };

  return (
    <SSearchOne>
      <input type="search" value={query} onChange={handleChange} />
      {result === null && <p className="result">No result</p>}
      {result && (
        <Link to="/">
          <figure className="result">
            <img src={result.avatar} alt={result.name} />
            <figcaption>{result.name}</figcaption>
          </figure>
        </Link>
      )}
    </SSearchOne>
  );
}
