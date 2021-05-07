import SParallax from './style';

// Source: https://medium.com/@dailyfire/pure-css-parallax-simple-tricks-da102d0ffdb9

export default function Parallax() {
  return (
    <SParallax>
      <div className="background">
        <img
          className="background__image"
          alt=""
          src="/img/backgrounds/1.jpg"
        />
      </div>
      <div className="foreground">
        <div className="foreground__content">
          <h1>Oooo, parallax</h1>
        </div>
      </div>
    </SParallax>
  );
}
