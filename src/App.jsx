import { useState } from 'react';

const initialInterests = [
  'Software development',
  'Motorcycle riding',
  'Table tennis',
  'Story-driven games',
  'Learning UI design',
];

function App() {
  const [interests, setInterests] = useState(initialInterests);
  const [sortedAsc, setSortedAsc] = useState(true);

  const reorder = () => {
    const sorted = [...interests].sort((a, b) =>
      sortedAsc ? b.localeCompare(a) : a.localeCompare(b)
    );
    setInterests(sorted);
    setSortedAsc(!sortedAsc);
  };

  return (
    <div className="page-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Welcome!</p>
          <h1>Hi, I’m Jin.</h1>
          <p className="lead">
            This site is built with React.js to share who I am and what I enjoy.
          </p>
        </div>
      </header>

      <main>
        <section className="intro-card">
          <div className="intro-text">
            <h2>Who I am</h2>
            <p>
              I’m a University of Washington Bothell student working toward a software development career. I enjoy learning web design, building small apps, and sharing my interests with visitors through clean, modern pages.
            </p>
            <p>
              My goal is to create thoughtful experiences that are easy to use, visual, and responsive across devices.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
            alt="Laptop on a desk with a cup of coffee"
          />
        </section>

        <section>
          <h2>Things I enjoy</h2>
          <p>Below is a short list of hobbies and interests I enjoy exploring.</p>
          <ul className="interest-list">
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button type="button" className="action-button" onClick={reorder}>
            Reorder list ({sortedAsc ? 'Z → A' : 'A → Z'})
          </button>
        </section>
      </main>

      <footer className="page-footer">
        <p>Created by Jin · Built with React.js</p>
      </footer>
    </div>
  );
}

export default App;
