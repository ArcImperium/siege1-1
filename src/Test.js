import Footer from './Footer.js';
import {useState} from "react";
import {Link} from "react-router-dom";

const Test = () => {
    const [answer, setAnswer] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setAnswer(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Are You American?</h2>

            <label>
                <input
                    type="radio"
                    name="btoast"
                    value="Yes"
                    checked={answer==="Yes"}
                    onChange={handleChange}
                />
                Yes
            </label>

            <label style={{marginLeft: "10px"}}>
                <input
                    type="radio"
                    name="btoast"
                    value="No"
                    checked={answer==="No"}
                    onChange={handleChange}
                />
                No
            </label>

            <button type="submit" disabled={!answer} style={{marginLeft: "10px"}}>
                Submit
            </button>

            {submitted && (
                <div styled={{marginTop: "20px"}}>
                    {answer==="Yes" ? (
                        <Link to="/home">Return to Home</Link>
                    ) : (
                        <Link to="/beans-toast">Try this</Link>
                    )}
                </div>
            )}
        </form>
        </>
    );
};

export default Test;