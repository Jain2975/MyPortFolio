import "./OffTopic.css";

function OffTopic() {
  return (
    <div className="offtopic-container">
      <h2>🎨 Beyond Code</h2>
      <p>Here are a few things I enjoy when I'm not coding or debugging!</p>

      <section className="drawings-section">
        <h3>🖌️ My Drawings</h3>
        <p>I love sketching to unwind and explore creativity.</p>
        <div className="drawing-gallery">
          <img src="/art/sketch1.jpg" alt="Image 1" />
          <img src="/art/sketch2.jpg" alt="Image 2" />
          <img src="/art/sketch3.jpg" alt="Image 3" />
          <img src="/art/sketch4.jpg" alt="Image 4" />
          <img src="/art/sketch5.jpg" alt="Image 5" />
          <img src="/art/sketch6.jpg" alt="Image 6" />
          <img src="/art/sketch7.jpg" alt="Image 7" />
          <img src="/art/sketch8.jpg" alt="Image 8" />
          <img src="/art/sketch9.jpg" alt="Image 9" />
        </div>
      </section>

      <section className="hobbies-section">
        <h3>📺 Favorite Shows</h3>
        <ul>
          <li>
            <strong>One Piece</strong> – I will find my One Piece!! I like it
            the most as it has everything action,adventure,storytelling,
            foreshadowing and what not.
          </li>
          <li>
            <strong>Death Note</strong> – Who OutSmarts Who? One of the oldest
            and also the best anime.
          </li>
          <li>
            <strong>Jojo's Bizzare Adventure</strong> – It's such a good anime.
            Really like art style, story and the memes from this. Everything
            Bizarre!!
          </li>
        </ul>
      </section>
    </div>
  );
}

export default OffTopic;
