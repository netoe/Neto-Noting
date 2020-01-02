//

import React from 'react';
import {AppPageDescription} from 'src/graphic/components/AppPageDescription';
import {AppPageHeader} from 'src/graphic/components/AppPageHeader';
import {IRealNote} from '../resources/typed-notes';
import {useStyles} from './styles';

interface IProps {
	note: IRealNote;
}

export const NoteHome = React.memo(({note}: IProps) => {
	const cls = useStyles();
	const {name, description} = note;

	return (
		<div className={cls.ctnPage}>
			<AppPageHeader title={name}/>
			<AppPageDescription description={description}/>

		</div>
	);
});
