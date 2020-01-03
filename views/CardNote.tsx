//

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {IRealNote} from '../resources/typed-notes';
import {useStyles} from './styles';

interface IProps {
	note: IRealNote;
	onClick: React.MouseEventHandler;
}

export const CardNote = React.memo(({note, onClick}: IProps) => {
	const cls = useStyles();
	const {name, description} = note;

	return (
		<Card className={cls.ctn}>
			<CardActionArea>
				<CardContent onClick={onClick}>
					<Typography gutterBottom variant="h5" component="h2">{name}</Typography>
					<Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
});
