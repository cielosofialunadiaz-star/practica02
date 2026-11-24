function Acerca() {
  return (
    <section className="page">
      <h1>Acerca de Nosotros</h1>
      <p>
        Esta es una aplicación de ejemplo construida con React y Vite que permite
        explorar información sobre Pokémon.
      </p>
      <p>
        La aplicación utiliza la{' '}
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
          PokéAPI
        </a>
        , una API pública y gratuita que proporciona datos sobre Pokémon.
      </p>
      <h2>Características</h2>
      <ul>
        <li>Visualización de lista de Pokémon</li>
        <li>Información en tiempo real desde la API</li>
        <li>Interfaz responsive y moderna</li>
      </ul>
    </section>
  )
}

export default Acerca
