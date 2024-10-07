// Componete Fruit
const FruitList = ({ data, removeFruits }) => {
	const fruits = data

	// funcão handleFruits
	const handleFruits = (e, id) => {
		e.preventDefault()

		// devolve o props passando o id
		removeFruits(id)
	}

	return (
		<>
			{fruits.map(fruit => (
				<div key={fruit.id}>
					<h1>{fruit.name}</h1>
					<button
						// evento clique que chama a função: handleFruits
						onClick={
							(e) => handleFruits(e, fruit.id)
						}
					>
						Remove Fruit
					</button>
				</div>
			))}
		</>
	)
}

export default FruitList