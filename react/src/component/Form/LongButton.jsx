const LongButton = ({ type, disabled, onClick, style, content }) => {
	return (
		<button 
			type={type ?? 'button'}
			disabled={disabled ?? ''}
			onClick={onClick} 
			className={style + ' btn mb-3 w-100'} 
			title={content}
		>
			{content}
		</button>
	);
}

export default LongButton;