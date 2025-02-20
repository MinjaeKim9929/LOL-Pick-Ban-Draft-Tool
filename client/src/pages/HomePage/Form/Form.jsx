import { useState } from 'react';
import InputBox from '../../../components/Form/InputBox';
import Button from '../../../components/Form/Button';
import AdvOptions from './AdvOptions/AdvOptions';

const Form = () => {
	const [blueTeamName, setBlueTeamName] = useState('');
	const [redTeamName, setRedTeamName] = useState('');
	const [matchName, setMatchName] = useState('');
	const [advOptionVisible, setAdvOptionVisible] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(blueTeamName, redTeamName, matchName);
	};

	const toggleAdvOptions = () => {
		setAdvOptionVisible((prev) => !prev);
	};

	return (
		<div className="w-full h-auto min-h-screen flex justify-center items-center overflow-auto">
			<form onSubmit={handleSubmit} className="w-4xl mx-auto">
				<InputBox color="blue" label="Blue Team" value={blueTeamName} onChange={setBlueTeamName} />
				<InputBox color="red" label="Red Team" value={redTeamName} onChange={setRedTeamName} />
				<InputBox color="black" label="Match Name" value={matchName} onChange={setMatchName} />
				<div className="flex justify-center mt-4">
					<Button text={'Confirm'} type="confirm" className="px-10 py-2 font-semibold text-3xl flex" />
				</div>
				<div className="flex justify-center mt-8">
					<Button text={'Adv. Options'} type="button" onClick={toggleAdvOptions} className="px-4 py-1 text-xl" />
				</div>
				{advOptionVisible && (
					<div className="mt-8">
						<AdvOptions />
					</div>
				)}
			</form>
		</div>
	);
};

export default Form;
