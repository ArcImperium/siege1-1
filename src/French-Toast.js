import Header2 from './Header2.js';
import Footer from './Footer.js';
import ftoastpic from './french_toast_picture.jpg';
import {useEffect} from 'react';

function FrenchToast() {
    useEffect(() => {
    document.title = "French Toast";
  }, []);

    return(
        <>
            <Header2 />
            <img src={ftoastpic} />
            <br />
            French Toast is the best!
        </>
    );
}

export default FrenchToast;