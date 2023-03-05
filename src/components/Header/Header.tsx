import "./Header.css";
import logo from "./GitHub-Logo.png";

function Header() {
    return (
        <div className="header  center">
            <img src={logo} alt="" />
            <h4>Search test with github api</h4>
            <p>Reference rate limit: <a href="https://docs.github.com/en/rest/search?apiVersion=2022-11-28#rate-limit" rel="noopener noreferrer" target="_blank">GitHub api page</a>
            </p>
        </div>
    );
}

export default Header;
