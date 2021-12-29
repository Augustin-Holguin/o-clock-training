import SearchBar from './SearchBar';

import './style.scss';

const Header = () => (
    <header> 
        <div className="header-main">
            <a href="/">
                <h1>Ripe tomatoes</h1>
            </a>
            <div className="header_admin">
                <a href="/admin">
                    <p>Admin</p>
                </a>
            </div>
        </div>
        <SearchBar />
    </header>
)

export default Header;