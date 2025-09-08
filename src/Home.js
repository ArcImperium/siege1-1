import Header1 from './Header1.js';
import Footer from './Footer.js';
import {useEffect} from 'react';

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return(
    <>
      <Header1/>
      <h2>Unsure?<br /></h2>
      Take the <a href="/test">Test</a>
    </>
  );
}

export default Home;
