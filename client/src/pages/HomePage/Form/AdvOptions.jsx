import { useState } from 'react';
import InputBox from '../../../components/Form/InputBox';
import Select from '../../../components/Form/Select';

const AdvOptions = () => {
	const [timePerBan, setTimePerBan] = useState(30);
	const [timePerPick, setTimePerPick] = useState(30);
	const [draftType, setDraftType] = useState('tournamentDraft');

	const draftOptions = [
		{ value: 'tournamentDraft', label: 'Tournament Draft' },
		{ value: 'softFearlessDraft', label: 'Soft Fearless Draft' },
		{ value: 'hardFearlessDraft', label: 'Hard Fearless Draft' },
	];

	return (
		<div>
			<InputBox label="Time per ban" color="white" value={timePerBan} onChange={setTimePerBan} />
			<InputBox label="Time per pick" color="white" value={timePerPick} onChange={setTimePerPick} />
			<Select label="Select draft type" value={draftType} onChange={setDraftType} options={draftOptions} />
		</div>
	);
};

export default AdvOptions;
