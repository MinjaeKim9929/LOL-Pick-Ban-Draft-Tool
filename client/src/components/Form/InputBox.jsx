import PropTypes from 'prop-types';

const colorMap = {
	red: '#BD2038',
	blue: '#0A4264',
	black: '#000000',
	white: '#ffffff',
};

const InputBox = ({ label, color, value, onChange, type, defaultValue }) => {
	const bgColor = colorMap[color.toLowerCase()];

	return (
		<div className="mt-5 mb-12 flex-col flex gap-1">
			<label className="text-3xl font-medium font-stretch-120% text-gray-50 mb-2">{label}</label>
			<input
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				style={{ backgroundColor: bgColor }}
				defaultValue={defaultValue}
				min={1}
				max={5}
				className="w-full p-3.5 text-xl text-white"
			/>
		</div>
	);
};

InputBox.propTypes = {
	label: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string,
	defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputBox;
