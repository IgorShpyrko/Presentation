import * as React from 'react';

export const Benefits = () => {
  const [isVisibleJS, setIsVisibleJS] = React.useState(true);
  const [isVisibleReact, setIsVisibleReact] = React.useState(true);

  return (
    <article className='benefits'>
      <h3
        tabIndex={0}
        onKeyDown={e => {
          e.keyCode === 13
            ? setIsVisibleJS(!isVisibleJS)
            : null
        }}
        onClick={() => setIsVisibleJS(!isVisibleJS)}>
          <span>{isVisibleJS ? '- ' : '+ '}</span>
          <span>Why Not to use ES6 classes</span>
      </h3>

      <section className={isVisibleJS ? '' : 'hidden'}>
        <div>
          <h4>New</h4>
          <p>
            JavaScript's new operator creates a new object that inherits from
            the operand's prototype member, and then calls the operand, binding
            the new object to this. This gives the operand (which had better be
            a constructor function) a chance to customize the new object before
            it is returned to the requestor.
          </p>
          <p>
            If you forget to use the new operator, you instead get an ordinary
            function call, and this is bound to the global object instead of to
            a new object. That means that your function will be clobbering global
            variables when it attempts to initialize the new members. That is a
            very bad thing. There is no compile-time warning. There is no runtime
            warning.
          </p>
          <p>
          By convention, functions that are intended to be used with new should be
          given names with initial capital letters, and names with initial capital
          letters should be used only with constructor functions that take the new
          prefix. This convention gives us a visual cue that can help spot expensive
          mistakes that the language itself is keen to overlook.
          </p>
          <p>An even better coping strategy is to not use new at all.</p>
        </div>

        <h4>Conceptually, there is No Class in JavaScript</h4>
        <div>
          <p>
            In Javascript Objects are created without Classes!
          </p>
          <p>
            As you can imagine, In JS, there is no overhead and constraints of needing
            a Class to use objects. Further “prototype”-chain based inheritance can wire
            up any object to any other object that may not be related (IS-A relationship).
            So it’s very flexible compared to Classes.
          </p>
        </div>
      </section>

      <h3
        tabIndex={0}
        onKeyDown={e => {
          e.keyCode === 13
            ? setIsVisibleReact(!isVisibleReact)
            : null
        }}
        onClick={() => setIsVisibleReact(!isVisibleReact)}>
          <span>{isVisibleReact ? '- ' : '+ '}</span>
          <span>React Motivation</span>
      </h3>
      <section className={isVisibleReact ? '' : 'hidden'}>
        <h4>It’s hard to reuse stateful logic between components </h4>
        <div>
          <p>
            React doesn’t offer a way to “attach” reusable behavior to a
            component (for example, connecting it to a store). If you’ve
            worked with React for a while, you may be familiar with patterns
            like render props and higher-order components that try to solve
            this. But these patterns require you to restructure your
            components when you use them, which can be cumbersome and make
            code harder to follow. If you look at a typical React application
            in React DevTools, you will likely find a “wrapper hell” of
            components surrounded by layers of providers, consumers, higher-order
            components, render props, and other abstractions. While we could filter
            them out in DevTools, this points to a deeper underlying problem: React
            needs a better primitive for sharing stateful logic.
          </p>
          <p>
            With Hooks, you can extract stateful logic from a component so it can
            be tested independently and reused. Hooks allow you to reuse stateful
            logic without changing your component hierarchy. This makes it easy to
            share Hooks among many components or with the community.
          </p>
        </div>

        <h4>Complex components become hard to understand </h4>
        <div>
          <p>
            We’ve often had to maintain components that started out simple but
            grew into an unmanageable mess of stateful logic and side effects.
            Each lifecycle method often contains a mix of unrelated logic.
            For example, components might perform some data fetching in
            componentDidMount and componentDidUpdate. However, the same
            componentDidMount method might also contain some unrelated logic
            that sets up event listeners, with cleanup performed in
            componentWillUnmount. Mutually related code that changes together
            gets split apart, but completely unrelated code ends up combined
            in a single method. This makes it too easy to introduce bugs and
            inconsistencies.
          </p>
          <p>
            In many cases it’s not possible to break these components into
            smaller ones because the stateful logic is all over the place.
            It’s also difficult to test them. This is one of the reasons many
            people prefer to combine React with a separate state management
            library. However, that often introduces too much abstraction,
            requires you to jump between different files, and makes reusing
            components more difficult.
          </p>
          <p>
            To solve this, Hooks let you split one component into smaller
            functions based on what pieces are related (such as setting up
            a subscription or fetching data), rather than forcing a split
            based on lifecycle methods. You may also opt into managing the
            component’s local state with a reducer to make it more
            predictable.
          </p>
        </div>
              
        <h4>Classes confuse both people and machines </h4>
        <div>
          <p>
            In addition to making code reuse and code organization more
            difficult, we’ve found that classes can be a large barrier to
            learning React. You have to understand how this works in
            JavaScript, which is very different from how it works in
            most languages. You have to remember to bind the event
            handlers. Without unstable syntax proposals, the code is very
            verbose. People can understand props, state, and top-down data
            flow perfectly well but still struggle with classes. The
            distinction between function and class components in React and
            when to use each one leads to disagreements even between
            experienced React developers.
          </p>
          <p>
            Additionally, React has been out for about five years, and we
            want to make sure it stays relevant in the next five years. As
            Svelte, Angular, Glimmer, and others show, ahead-of-time
            compilation of components has a lot of future potential.
            Especially if it’s not limited to templates. Recently, we’ve
            been experimenting with component folding using Prepack, and
            we’ve seen promising early results. However, we found that class
            components can encourage unintentional patterns that make these
            optimizations fall back to a slower path. Classes present issues
            for today’s tools, too. For example, classes don’t minify very
            well, and they make hot reloading flaky and unreliable. We want
            to present an API that makes it more likely for code to stay on
            the optimizable path.
          </p>
          <p>
            To solve these problems, Hooks let you use more of React’s
            features without classes. Conceptually, React components have
            always been closer to functions. Hooks embrace functions, but
            without sacrificing the practical spirit of React. Hooks provide
            access to imperative escape hatches and don’t require you to
            learn complex functional or reactive programming techniques.
          </p>
        </div>
      </section>  
    </article>
  );
};
  