import { useCallback, useEffect, useState } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import ThingsToRead from './ThingsToRead.jsx';

const initialInterests = [
  'Software development',
  'Motorcycle riding',
  'Table tennis',
  'Story-driven games',
  'Learning UI design',
];

function HomePage({ interests, sortedAsc, reorder }) {
  return (
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

      <section className="keyboard-access-doc">
        <h2>Keyboard access documentation</h2>
        <p>
          This site is designed so a keyboard user can move through navigation, buttons, and links using <strong>Tab</strong> and <strong>Enter</strong>. Focus outlines are visible on interactive controls.
        </p>
        <p>
          I am especially trying to achieve clear focus order, a visible focus indicator, and keyboard shortcuts for page navigation. These features help people who rely on keyboard-only interaction.
        </p>
        <ul className="shortcut-list">
          <li><strong>Ctrl+H</strong> &mdash; Go to Home</li>
          <li><strong>Ctrl+R</strong> &mdash; Go to Things to Read</li>
          <li><strong>Ctrl+S</strong> &mdash; Reorder the interest list</li>
        </ul>
      </section>
    </main>
  );
}

function App() {
  const [interests, setInterests] = useState(initialInterests);
  const [sortedAsc, setSortedAsc] = useState(true);
  const navigate = useNavigate();

  const reorder = useCallback(() => {
    const sorted = [...interests].sort((a, b) =>
      sortedAsc ? b.localeCompare(a) : a.localeCompare(b)
    );
    setInterests(sorted);
    setSortedAsc(!sortedAsc);
  }, [interests, sortedAsc]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && !event.altKey && !event.shiftKey) {
        const key = event.key.toLowerCase();
        if (key === 'h') {
          navigate('/');
          event.preventDefault();
        }
        if (key === 'r') {
          navigate('/read');
          event.preventDefault();
        }
        if (key === 's') {
          reorder();
          event.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, reorder]);

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

      <nav className="top-nav" aria-label="Primary site navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          accessKey="h"
          title="Home (access key H)"
        >
          Home
        </NavLink>
        <NavLink
          to="/read"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          accessKey="r"
          title="Things to Read (access key R)"
        >
          Things to Read
        </NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<HomePage interests={interests} sortedAsc={sortedAsc} reorder={reorder} />}
        />
        <Route path="/read" element={<ThingsToRead />} />
      </Routes>

      <footer className="page-footer">
        <p>Created by Jin</p>
      </footer>
    </div>
  );
}

export default App;
