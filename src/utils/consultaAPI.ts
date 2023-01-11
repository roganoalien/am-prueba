const fetchAPI = async (url: string) => {
	const resultado = await fetch(url)
		.then((respuesta) => respuesta.json())
		.catch((error) => {
			console.error(error);
		});
	return resultado;
};

export { fetchAPI };
