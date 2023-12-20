import React from "react";
import { useGlobalContext } from "../../context";
import Book from "../Booklist/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./Booklist.css";
//https://covers.openlibrary.org/b/id/240727-S.jpg

const Booklist = () => {
    const {books, loading,resultTitle} = useGlobalContext();
    const booksWithCovers = books.map((singleBook)=> {
        return {
            ...singleBook,
            id: (singleBook.id).replace("/works/", ""),
            cover_img: singleBook.cover_i ? `https://covers.openlibrary.org/b/id/${singleBook.cover_i}-L.jpg` : coverImg
        }
    }); 

    console.log(booksWithCovers);

    if(loading) return <Loading />;

    return (
        <section className="booklist">
            <div className="container">
                <div className="section-title">
                    <h2>{resultTitle}</h2>
                    <div className="booklist-content grid"> 
                        {booksWithCovers.slice(0, 30).map((item) => (
                            <Book key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Booklist