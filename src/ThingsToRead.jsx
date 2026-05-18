const readingLinks = [
  { title: 'WebAIM: Keyboard Accessibility', url: 'https://webaim.org/techniques/keyboard/' },
  { title: 'W3C Keyboard Shortcuts Reference', url: 'https://www.w3schools.com/tags/ref_keyboardshortcuts.asp' },
  { title: 'MDN: Accessible Rich Internet Applications', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA' },
  { title: 'A11y Project: Keyboard Access', url: 'https://www.a11yproject.com/checklist/#keyboard-access' },
  { title: 'WebAIM: Visual Focus Indicators', url: 'https://webaim.org/resources/evalquickref/#keyboard' },
  { title: 'Google Developer: Keyboard Navigation', url: 'https://developers.google.com/web/fundamentals/accessibility/keyboard' },
  { title: 'Nielsen Norman Group: Keyboard Usability', url: 'https://www.nngroup.com/articles/keyboard-shortcuts/' },
  { title: 'Deque University: Keyboard Accessibility', url: 'https://www.deque.com/resources/keyboard-accessibility/' },
  { title: 'W3C: Web Content Accessibility Guidelines', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/' },
  { title: 'Smashing Magazine: Keyboard Friendly Web UI', url: 'https://www.smashingmagazine.com/2020/07/keyboard-accessibility/' },
];

export default function ThingsToRead() {
  return (
    <section>
      <h2>Things to Read</h2>
      <p>
        These links lead to accessibility resources and design articles that I find useful for building keyboard-friendly websites.
      </p>
      <ol className="reading-list">
        {readingLinks.map((link) => (
          <li key={link.url}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ol>
      <div className="keyboard-note">
        <h3>Keyboard navigation on this page</h3>
        <p>
          Use the <strong>Tab</strong> key to move through the navigation bar and the article links. Press <strong>Enter</strong> to open a link.
        </p>
      </div>
    </section>
  );
}
