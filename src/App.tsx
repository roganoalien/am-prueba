import React, { useEffect, useState } from "react";
import Ambot from "./components/Ambot";
import NPS from "./components/NPS";
import Slideshow from "./components/Slideshow";
import Title from "./components/Title";
import WelcomeUser from "./components/WelcomeUser";
import Noticia from "./components/Noticia";
import { fetchAPI } from "./utils/consultaAPI";

function App() {
	const [response, setResponse] = useState<any>({});
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		(async () => {
			const respuesta = await fetchAPI("https://dummyjson.com/products");
			console.log(respuesta);
			setResponse(respuesta.products);
			setLoading(false);
		})();
		// fetch("https://dummyjson.com/products")
		// 	.then((res) => res.json())
		// 	.then((resJson) => {
		// 		setResponse(resJson.products);
		// 		setLoading(false);
		// 	})
		// 	.catch(console.error);
	}, []);

	return (
		<div className="main_component min-h-screen w-screen">
			<Slideshow />
			<div className="container relative z-20 mx-auto flex items-start justify-start">
				<div className="left-side w-8/12 pt-8">
					<Ambot />
					<Title title="Últimas noticias" />
					<div className="mt-10 grid grid-cols-3 gap-x-5 gap-y-10">
						{loading
							? "Cargando"
							: response.map((item: any, index: number) => {
									if (index < 6) {
										return (
											<Noticia
												key={item.id}
												title={item.title}
												imgURL={item.images[0]}
											/>
										);
									}
							  })}
					</div>
				</div>
				<div className="left-side flex w-4/12 flex-col px-10">
					<WelcomeUser />
					<NPS />
				</div>
			</div>
		</div>
	);
}

export default App;
