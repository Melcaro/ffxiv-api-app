import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Link to="/">
      <h1>The Salted Kitten Club</h1>
      <p>
        Welcome on the official page of the most salted guild in all Eorzea: The
        Salted Kitten (aka "Les Chatons Salés" in Moliere's tongue)
      </p>
    </Link>
  );
};
