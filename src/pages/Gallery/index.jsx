import { SGallery, SImg } from './style';

export default function Gallery() {
  return (
    <SGallery>
      <SImg>
        <img src="/img/backgrounds/1.jpg" alt="" />
        <figcaption>Toto</figcaption>
      </SImg>
      <SImg>
        <img src="/img/backgrounds/2.jpg" alt="" />
        <figcaption>Toto</figcaption>
      </SImg>
    </SGallery>
  );
}
