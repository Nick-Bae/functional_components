import bulbasaur from './images/bulbasaur.jpg'
import "./showcase.css"

function Showcase() {
  const favPokemon = "Bulbasur";

  const pokeCharacteristics={type:'Grass', move: 'Vine Whip'};


  return (
    <div className="showcase-wrapper">
      <h1> {favPokemon}'s Showcase Component</h1>
      <img 
        style={{height: 500, width:500, padding: 20, borderRadius:'50%'}}
        src={bulbasaur} alt='bulbasur' />
      <h2> {favPokemon}'s type is
          <span className ='poke-type'
          style={{backgroundColor:"green", color:'white'}}>    {pokeCharacteristics.type}</span>
          {' '} and one of their moves is {' '} 
          <span className ='poke-move'
            style={{backgroundColor:'white', color:'green'}}
          >{pokeCharacteristics.move}</span> </h2>
    </div>
  );
}

export default Showcase;
