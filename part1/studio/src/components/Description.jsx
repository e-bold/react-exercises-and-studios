import styles from './Description.module.css';
import React from 'react';


function RecipeAuthor(){
    let authorLink = 'https://damndelicious.net/2019/04/21/korean-beef-bulgogi/' ;
    let authorPhoto = 'https://s23209.pcdn.co/wp-content/uploads/2018/06/about.jpg'
    let authorName = 'Chungah Rhee'

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Chungah" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Damn Delicious</a> 
           </div>
        </div>
     );
     
    }

    class RecipeDescription extends React.Component {
        render() {
            return (

                <div> 
       <div>
          <h1>Beef Bulgogi</h1>
          <p>Short recipe description</p>
       </div>
       <RecipeAuthor />
    </div>
            )
        }
    }

export default RecipeDescription
