import * as React from 'react';
import { useWindowWidth } from 'src/Hooks/useWindowWidth';
import { useDocumentTitle } from 'src/Hooks/useDocumentTitle';
import { useFormInput } from 'src/Hooks/useFormInput';

const UseCustomHook = () => {
  const width = useWindowWidth();
  const title = useFormInput('Heading');
  const designation = useFormInput('Software Engineer');
  useDocumentTitle(title.value);

  return (
    <article>
      <section className="row">
        <span>Title</span>
        <input {...title} />
        {/* Shorthand for: */}
        {/* <input value={title.value} onChange={title.onChange} /> */}
      </section>
      <section className="row">
        <span>Designation</span>
        <input {...designation} />
      </section>
      <section className="row">
        <span>Width</span>
        <input type="text" value={width} disabled />
      </section>
    </article>
  );
};

export default UseCustomHook;
