import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { IMAGE_URL } from '../../config/api_config';

const useStyles = makeStyles(() => ({
	root: {
    display: 'flex',
    margin: '20px 0'
	},
	details: {
    minHeight: '300px',
    display: 'flex',
    flex: 1
	},
	content: {
    flex: 5,
    textAlign: 'center',
    paddingTop: '50px',
    paddingBottom: '50px !important',
	},
	cover: {
    flex: 2, 
		width: 151
	},
}));

export default function MovieItem({ data }) {
	const classes = useStyles();
  const { poster_path, original_title, release_date, popularity, overview } = data;

	return (
		<Card className={classes.root}>
			<div className={classes.details}>
				<CardMedia
					className={classes.cover}
					image={`${IMAGE_URL}/${poster_path}`}
					title="Live from space album cover"
				/>
				<CardContent className={classes.content}>
					<Typography component="h5" variant="h5">
						{original_title}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
            Release Date: {release_date} | Popularity: {popularity}
					</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {overview}
					</Typography>
				</CardContent>
			</div>
		</Card>
	);
}
