import * as React from 'react';

const words = ['hey', 'this', 'is', 'cool'];

const UseMemo = () => {
  return (
    <>
      <WithUseMemo />
      <NoUseMemo />
    </>
  )
}

export const WithUseMemo = () => {
  const [count, setCount] = React.useState(0);
  const [wordIndex, setWordIndex] = React.useState(0);

  const word = words[wordIndex];

  const computeLetterCount = (word: string) => {
    let i = 0;
    while (i < 1000000000) i++;

    return word.length;
  };

  const letterCount = React.useMemo(
    () => computeLetterCount(word),
    [word],
  );

  const handleClick = () => {
    const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
    setWordIndex(next);
  }

  return (
    <article>
      <h3>With useMemo</h3>
      <section>
        <h2>Compute number of letters (slow 🐌)</h2>
        <p>"{word}" has {letterCount} letters</p>
        <button
          onClick={handleClick}
        >
          Next word
        </button>

      </section>
      <section>
        <h2>Increment a counter (fast ⚡️)</h2>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </section>
    </article>
  );
};

export const NoUseMemo = () => {
  const [count, setCount] = React.useState(0);
  const [wordIndex, setWordIndex] = React.useState(0);

  const word = words[wordIndex];

  const computeLetterCount = (word: string) => {
    let i = 0;
    while (i < 1000000000) i++;

    return word.length;
  };

  const letterCount = computeLetterCount(word);

  const handleClick = () => {
    const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
    setWordIndex(next);
  }

  return (
    <article>
      <h3>No useMemo</h3>
      <section>
        <h2>Compute number of letters (slow 🐌)</h2>
        <p>"{word}" has {letterCount} letters</p>
        <button
          onClick={handleClick}
        >
          Next word
        </button>

      </section>
      <section>
        <h2>Increment a counter (slow 🐌)</h2>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </section>
    </article>
  );
};

export default UseMemo;
