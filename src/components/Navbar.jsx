import React from 'react';
import Button from './Button';

const Navbar = ({count}) => {
  return (
    <>
    <div>
      <h2>Navbar</h2>
    </div>

      <Button count={count}/>
    </>
  );
};

export default Navbar;