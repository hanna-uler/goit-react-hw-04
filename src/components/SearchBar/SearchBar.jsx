import css from "./SearchBar.module.css"

export default function SearchBar({ onSubmit }) {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const searchQuery = form.elements.searchInput.value;
        console.log(searchQuery);

        onSubmit(searchQuery);
        form.reset()
    }
    return (
        <header className={css.conteiner}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    name="searchInput"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={css.btn} type="submit">Search</button>
            </form>
        </header>
    )
    
}