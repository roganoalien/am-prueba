const Noticia = (props: any) => {
	return (
		<div className="col-span-1">
			<img
				className="h-[150px] w-full overflow-hidden rounded-md object-cover shadow-lg"
				src={props.imgURL}
				alt={props.title}
			/>
			<h3 className="font-md mt-2 text-center font-bold text-amBlack">{props.title}</h3>
		</div>
	);
};

export default Noticia;
