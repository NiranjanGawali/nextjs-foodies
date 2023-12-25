'use client';

const error = ({ error }) => {
  return (
    <main className='error'>
      <h1>An error occured!!!</h1>
      <p>Failed to create a meal.</p>
    </main>
  );
};

export default error;
