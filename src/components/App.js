import PokeForm from "./PokeForm"

function App() {
  function getSpecieid(id) {
    console.log(id);

  }
  return (
    <PokeForm id={'7'} getSpecieIdPokeForm={getSpecieid}/>
  )
}

export default App