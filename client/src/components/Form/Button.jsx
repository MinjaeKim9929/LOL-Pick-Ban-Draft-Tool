import PropTypes from 'prop-types';

const Button = ({ text, type = 'button', onClick }) => {
	return (
		<button type={type} onClick={onClick}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
