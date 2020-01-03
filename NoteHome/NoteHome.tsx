//

import React from 'react';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {AppPageParagraph} from 'src/mui-views/app/AppPageParagraph';
import {IRealNote} from '../resources/typed-notes';
import {useStyles} from './styles';

interface IProps {
	note: IRealNote;
}

export const NoteHome = React.memo(({note}: IProps) => {
	const cls = useStyles();
	const {name, description, tags} = note;

	return (
		<div className={cls.ctnPage}>
			<AppPageHeader title={name}/>
			<AppPageParagraph description={description}/>

			{tags ? <AppPageParagraph description={tags.join(', ')}/> : undefined}
		</div>
	);
});
