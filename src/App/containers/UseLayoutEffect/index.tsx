import * as React from 'react';

const UseLayoutEffect = () => {
  return (
    <article>
      <h3>UseEffect && UseLayoutEffect</h3>
      <section className='row'>
        <p>
           In common these effects are equal.
        </p>
        <p>The main difference is time when effect fires.</p>
        <p>
          UseEffect runs after react renders your component and ensures
          that your effect callback does not block browser painting. This
          differs from the behavior in class components where
          componentDidMount and componentDidUpdate run synchronously after
          rendering. It's more performant this way and most of the time this
          is what you want.
        </p>
        <p>
          However, if your effect is mutating the DOM (via a DOM node ref) and
          the DOM mutation will change the appearance of the DOM node between
          the time that it is rendered and your effect mutates it, then you
          don't want to use useEffect. You'll want to use useLayoutEffect.
          Otherwise the user could see a flicker when your DOM mutations take
          effect. This is pretty much the only time you want to avoid useEffect
          and use useLayoutEffect instead.
        </p>
        <br/>
        <p>P.S.:</p>
        <p>In two words useLayoutEffect doesn`t wait for DOM render.</p>
        <p>useEffect does.</p>
        <br/>
        <h4>You can find more at: </h4>
        <a
          target='blank'
          style={{textDecoration: 'none'}}
          href="https://kentcdodds.com/blog/useeffect-vs-uselayouteffect">
          <strong>UseEffect vs UseLayoutEffect </strong>
          <i>by Kent C. Dodds</i>
        </a>
      </section>
    </article>
  );
};

export default UseLayoutEffect;
