import PropTypes from 'prop-types';

const colorMap = {
	button: '#e0e0e0',
	confirm: '#FE9400',
};

const Button = ({ text, type = 'button', onClick, className }) => {
	const bgColor = colorMap[type.toLowerCase()];
	return (
		<button className={className} type={type} onClick={onClick} style={{ backgroundColor: bgColor }}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	type: PropTypes.string,
	className: PropTypes.string,
};

export default Button;
