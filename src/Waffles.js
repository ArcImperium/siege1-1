import Header2 from './Header2.js';
import Footer from './Footer.js';
import wafflepic from './waffle_picture.jpg';
import {useEffect} from 'react';

function Waffles() {
    useEffect(() => {
    document.title = "Waffles";
  }, []);

    return(
        <>
            <Header2 />
            <img src={wafflepic} />
            <br />
            Waffles are the best!
        </>
    );
}

export default Waffles;