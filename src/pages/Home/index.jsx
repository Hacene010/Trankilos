import { useParams } from 'react-router-dom';

export default function Home() {
  const params = useParams();
  return (
    <>
      <p>There&apos;s no place like 127.0.0.1</p>
      <p>The params were : {params.lorem}</p>
    </>
  );
}
