export default function HobbyLinks() {
    let pageTitle = "My Favorite Hobbies";
    let hobbyLinks = ['https://store.steampowered.com/', 'https://netflix.com/']
 
    return (
       <div>
          <h3>{pageTitle}</h3>
          <a href = {hobbyLinks[0]}>Video games</a>
          <a href = {hobbyLinks[1]}>Watching Movies</a>
       </div>      
    );
 }