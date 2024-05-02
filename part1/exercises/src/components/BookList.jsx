export default function BookList() {
   let pageTitle = "My Favorite Books";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348322381i/3450744.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1444850522i/762462.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320410503i/6648001.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Nudge by Richard H. Thaler" />
         <img src={book2} alt="One Up on Wall Street by Peter Lynch" />
         <img src={book3} alt="The Secret History of the Mongol Queens by Jack Weatherford" />
      </div>      
   );
}