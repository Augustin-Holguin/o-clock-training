import SearchBar from './SearchBar';

import './style.scss';

const Header = () => {
    const handleInputChange = (text) => {
        console.log(text)

    }

    const handleSearch = () => {
        console.log('yo');
    }

    return (
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
            <SearchBar onInputChange={handleInputChange} onSearch={handleSearch} />
        </header>
    )
}

export default Header;