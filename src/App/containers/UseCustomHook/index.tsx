import * as React from 'react';
import { useWindowWidth } from 'src/Hooks/useWindowWidth';
import { useDocumentTitle } from 'src/Hooks/useDocumentTitle';
import { useFormInput } from 'src/Hooks/useFormInput';

export const UseCustomHook = () => {
  const width = useWindowWidth();
  const title = useFormInput('Heading');
  const designation = useFormInput('Software Engineer');
  useDocumentTitle(title.value);

  return (
    <article>
      <section className="row">
        <span>Title</span>
        <input {...title} />
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
