export default function AttentionPage() {
  return (
    <main className="attention-page">
      <section className="attention-hero">
        <div className="attention-hero-copy">
          <p className="eyebrow">A quiet study in motion</p>
          <h2>Sport bikes: sharp, fast, and built to command attention</h2>
          <p>
            A design inspired by the bold lines, speed, and control of sport motorcycles.
          </p>
        </div>

        <figure className="hero-figure">
          <img
            src="https://www.cycleworld.com/resizer/WPe4gG2KpD5KjlkKgVa7CEsXKa8=/960x720/filters:focal(NaNxNaN:NaNxNaN)/cloudfront-us-east-1.images.arcpublishing.com/octane/RAIGFHYGRZHC3MZGT4SXWHSWDM.jpg"
            alt="Sport bike parked with a dramatic view of the front fairing"
          />
        </figure>
      </section>

      <section className="attention-panel" aria-labelledby="attention-first-heading">
        <div>
          <p className="eyebrow">The quick pause</p>
          <h3 id="attention-first-heading">A moment of focus before the next curve</h3>
          <p>
            The bold front fairing, clean lines, and high-contrast framing pull the eye to the center.
          </p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtr0Mv9T7SbSKsP0xcDXadk6NvdvbtRvdKiA&s"
          alt="Close-up of a sport bike with a focused front profile"
        />
      </section>

      <section className="attention-grid" aria-label="Attention-guided content blocks">
        <article className="attention-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVz443a-npjruk1NXMJ2jIaf4HNt3JfeMN3w&s"
            alt="Sport bike in motion with strong visual energy"
          />
          <div>
            <h3>Different Engine Sizes</h3>
            <p>
              There are many different classes of motorcycles to accommodate beginner, intermediate and expert riders.
            </p>
          </div>
        </article>

        <article className="attention-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hXnqkwH3hs0wdVsldubtXijCq9sE5zADMg&s"
            alt="Motorsport-inspired motorcycle detail with sharp lines"
          />
          <div>
            <h3>Group Rides</h3>
            <p>
              Lets riders stay connected and share the excitement of riding together
            </p>
          </div>
        </article>
      </section>

      <section className="attention-story" aria-labelledby="attention-story-heading">
        <div>
          <p className="eyebrow">A final note</p>
          <h3 id="attention-story-heading">A machine that rewards attention</h3>
          <p>
            A sport bike is a machine that rewards attention. The rider must be fully present to experience the thrill of the ride, and the design reflects this need for focus and engagement.
          </p>
        </div>
      </section>
    </main>
  );
}
