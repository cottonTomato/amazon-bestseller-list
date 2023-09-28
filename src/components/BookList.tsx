import Book from './Book';
import bookData from '../data/books';

function BookList() {
    return (
        <section className="book-list">
            {bookData.map((book) => {
                return <Book {...book} key={book.id} />;
            })}
        </section>
    );
}

export default BookList;
