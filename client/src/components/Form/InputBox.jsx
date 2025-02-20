import PropTypes from 'prop-types';

const InputBox = ({ label, color, value, onChange }) => {
	return (
		<div>
			<label>
				{label}
				<input
					type="text"
					value={value}
					onChange={(e) => onChange(e.target.value)}
					style={{ backgroundColor: color }}
				/>
			</label>
		</div>
	);
};

InputBox.propTypes = {
	label: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default InputBox;
