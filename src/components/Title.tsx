import { TitleType } from "../types/types.title";

function Title({ title }: TitleType) {
	return (
		<h2 className="mt-10 w-full text-left text-3xl font-semibold text-amBlack">{title}</h2>
	);
}

export default Title;
