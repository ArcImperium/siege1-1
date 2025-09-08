import Header2 from './Header2.js';
import Footer from './Footer.js';
import pancakepic from './pancake_picture.jpg';
import {useEffect} from 'react';

function Pancakes() {
    useEffect(() => {
    document.title = "Pancakes";
  }, []);

    return(
        <>
            <Header2 />
            <img src={pancakepic} />
            <br />
            Pancakes are the best!
        </>
    );
}

export default Pancakes;