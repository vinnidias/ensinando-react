import { useEffect, useState } from 'react'
import './style.css'

export default function PokeCard({id, name, types, imagePath}) {
	const [typeList, setTypeList] = useState([])

	useEffect(()=> {
		setTypeList(types)
		return () => console.log('o componente desmontou')
	},[types])

	return(
		<div className="pokecard-container">
			
			<div className="title-container">
				<strong>{name}</strong>
				{
					typeList.map(type => (
						<div className="type-container">
							<p>{type}</p>
						</div>
					))
				}
			</div>

			<div className="image-container">
				<p>#{id}</p>
				<img src={imagePath} alt="imagem do pokémon" />
			</div>
			<div className="background-img">
				<img src="Poke-color-cinza.png" alt="pokébola de fundo" />
			</div>	

		</div>
	)
}