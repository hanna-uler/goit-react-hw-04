import css from './SearchBar.module.css'
import toast from 'react-hot-toast'

export default function SearchBar({ onSubmit, testApi }) {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // const notify = () => toast('Please enter the search query.');

        const form = evt.target;
        const searchQuery = form.elements.searchInput.value;
        console.log(searchQuery);
        if (searchQuery === "") {
            toast("Please enter the search query.");
        }
        onSubmit(searchQuery);
        // testApi().then(response => {
        //     console.log(response);
        //     console.log(response.data);
        //     console.log(response.data.likes);
        //     console.log(response.data.urls);
        //     console.log(response.data.user);
        //     console.log(response.data.user.social.instagram_username);
        //     console.log(response.data.user.portfolio_url);
        //     console.log(response.data.user.social);
        // });
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