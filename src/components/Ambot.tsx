function Ambot() {
	return (
		<div className="flex h-auto w-full items-center justify-start rounded-md bg-gradient-to-r from-amGreen-dark to-amGreen px-4 py-4">
			<div className="flex h-full w-9/12 items-center justify-start">
				<p className="m-0 text-white">
					Bienvenido (a) a ambot, aquí tienes disponible una guía y atención de salud
					y bienestar emocional las 24h.{" "}
				</p>
			</div>
			<div className="flex w-3/12 items-center justify-center">
				<button
					type="button"
					className="rounded-md border-none bg-white font-bold text-amBlack outline-none"
				>
					Acceder
				</button>
			</div>
		</div>
	);
}

export default Ambot;
