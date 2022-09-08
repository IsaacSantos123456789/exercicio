import { useEffect, useState } from 'react';
import '../Styles/lista.css'

import Filme from './Filme'

export default function Lista() {


          const [filmes, setFilmes] = useState([])
        
          const apiKey = "5b20a8b200f9ffc5f59b089268f8f44b"

          useEffect(() => {

            fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language=pt-BR`)
            .then( retornFetch => retornFetch.json() )
            .then( dados => setFilmes(dados.results))

        }, [] )
   
    return(
        <div className="flexbox-conteiner">

           {filmes.map( filme => <Filme umFilme = { filme } /> ) }
            

        </div>
   );
};