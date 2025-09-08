import Header2 from './Header2.js';
import Footer from './Footer.js';
import btoast_pic from './beans_toast_picture.jpg';
import {useEffect} from "react";

function BeansToast() {
    useEffect(() => {
        document.title = "Beans Toast";
    }, []);

    return(
        <>
            <Header2 />
            <img src={btoast_pic} />
            <br />
            Beans on Toast is okay at best.
        </>
    );
}

export default BeansToast;