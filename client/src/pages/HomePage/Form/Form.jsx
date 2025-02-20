import { useState } from 'react';
import InputBox from '../../../components/Form/InputBox';
import Button from '../../../components/Form/Button';
import AdvOptions from './AdvOptions';

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
		<div>
			<form onSubmit={handleSubmit}>
				<InputBox color="blue" label="Blue Team" value={blueTeamName} onChange={setBlueTeamName}></InputBox>
				<InputBox color="red" label="Red Team" value={redTeamName} onChange={setRedTeamName}></InputBox>
				<InputBox color="black" label="Match" value={matchName} onChange={setMatchName}></InputBox>
				<Button text={'Confirm'} />
				<Button text={'Adv. Options'} type="button" onClick={toggleAdvOptions} />
				{advOptionVisible && <AdvOptions />}
			</form>
		</div>
	);
};

export default Form;
