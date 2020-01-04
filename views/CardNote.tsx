//

import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import {EnumViewModes} from 'src/mui-lib/widgets/GroupedViewModes';
import {IRealNote} from '../resources/typed-notes';
import {useStyles} from './styles';

interface IProps {
	note: IRealNote;
	// Gallery mode or Card mode.
	// The gallery mode itself, by default, is responsive --- may fallback to card mode if on wide screens.
	mode?: number; //'gallery' | 'card';
	onClick: React.MouseEventHandler;
}

const isSimpleCardMode = (mode?: number) => mode === EnumViewModes.Cards;

export const CardNote = React.memo(({note, mode, onClick}: IProps) => {
	const cls = useStyles();
	const {name, description} = note;

	const isCard = isSimpleCardMode(mode);

	return (
		<Card className={clsx(cls.ctn, {[cls.ctnCards]: isCard})}>
			<CardActionArea onClick={onClick} className={cls.ctnCardAction}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">{name}</Typography>
					<Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
});

interface iProps {
	mode?: number;
}

export const CardNoteSkeleton = React.memo(({mode}: iProps) => {
	const cls = useStyles();
	const isCard = isSimpleCardMode(mode);
	return (
		<Card className={clsx(cls.ctn, {[cls.ctnCards]: isCard})}>
			<CardContent>
				<Skeleton variant='rect' animation="wave" height={'2em'}/>
				<div style={{height: 16}}/>
				<Skeleton variant='rect' animation="wave"/>
			</CardContent>
		</Card>
	);
});
