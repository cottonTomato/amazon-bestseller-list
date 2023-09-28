import { BookProp } from '../data/books';
import Tag from './Tag';

function Book({ id, imgSrc, title, author }: BookProp) {
    return (
        <article className="book">
            <Tag id={id} />
            <img src={imgSrc} alt={title} />
            <div>
                <h2>{title}</h2>
                <h4>{author}</h4>
            </div>
        </article>
    );
}

export default Book;
