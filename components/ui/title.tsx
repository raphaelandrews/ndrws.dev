import Balancer from 'react-wrap-balancer';

type TitleProps = {
	label: string;
}

const Title = ({ label }: TitleProps) => {
	return (
		<h1 className="text-xl font-semibold mb-6">
			<Balancer>{label}</Balancer>
		</h1>
	);
}

export default Title;
