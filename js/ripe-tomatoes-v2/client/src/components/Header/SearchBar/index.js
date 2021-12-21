import './style.scss';

const SearchBar = ({ inputText, onSearch, onInputChange }) => {
    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(e.target.value)
        onSearch();
    }

    return (
        <form className="search" method="GET" action="/search" onSubmit={handleFormSubmit}>
            <div className="search-input ui icon input">
                <input 
                    type="text"
                    placeholder="Search by movie title" 
                    name="q" 
                    value={inputText} 
                    onChange={(evt) => {
                        const text = evt.target.value;
                        onInputChange(text);
                    }} 
                />
                <i className="search icon"></i>
            </div>
        </form>
    )
}

export default SearchBar;