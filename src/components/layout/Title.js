import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Title = ({ label }) => {
	return (
		<Container>
			<Typography
				gutterBottom
				variant="h5"
				component="h1"
				style={{
					fontSize: '2rem',
					fontWeight: 'bold',
					marginTop: '0.70rem'
				}}
			>
				{label}
			</Typography>
		</Container>
	);
};

export default Title;
