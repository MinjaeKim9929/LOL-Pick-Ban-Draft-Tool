import PropTypes from 'prop-types';

const Select = ({ label, options, value, onChange }) => {
	return (
		<div>
			<label>
				{label}
				<select value={value} onChange={(e) => onChange(e.target.value)}>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</label>
		</div>
	);
};

Select.propTypes = {
	label: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	).isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Select;
