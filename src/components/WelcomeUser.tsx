function WelcomeUser() {
	return (
		<div className="-mt-[75px] flex h-[150px] w-full items-center justify-center space-x-6 rounded-md bg-white shadow-lg">
			<span className="h-20 w-20 rounded-full bg-amBlue"></span>
			<div className="flex flex-col">
				<p className="text-xl font-semibold text-amBlue">Bienvenido (A),!</p>
				<button
					type="button"
					className="text-amBlue-ligh mt-1 rounded-full border-none bg-blue-100 px-0 py-1 text-xs outline-none transition-colors duration-200 ease-in-out hover:bg-blue-200"
				>
					Mi Experiencia AM
				</button>
			</div>
		</div>
	);
}

export default WelcomeUser;
