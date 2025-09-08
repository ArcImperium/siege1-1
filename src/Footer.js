function Footer({darkMode, setDarkMode}) {
    const handleCheckboxChange = (e) => {
        setDarkMode(e.target.checked);
    };

    return(
        <footer>
            <hr></hr>
            <label>
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={handleCheckboxChange}
                />
                Dark Mode
            </label>

            <p>&copy; {new Date().getFullYear()} Cause I said so</p>
        </footer>
    );
}

export default Footer;