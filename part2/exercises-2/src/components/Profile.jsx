import './styles.css';
import Button from './Button';
import Oceans from './oceans.json'


function Profile()
{
   return(
      <>
      {listItem}
      </>
   );
};

let listItem = Oceans.map(Oceans => 
   <div let correct = "profile" key={Oceans.id} className={`${Oceans.fishCheck === "true" ? "isAFish" : "profile"
   }`}
   >
      <img src={Oceans.image} alt={Oceans.name} 
      className='img'/>
      <h1>{Oceans.name}</h1>
      <h3>Fun Facts: </h3>
         <ol>
            <li>{Oceans.fact1}</li>
            <li>{Oceans.fact2}</li>
            <li>{Oceans.fact3}</li>
         </ol>
   <Button />
   </div>
);




export default Profile;