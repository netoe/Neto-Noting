//

import React from 'react';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {AppPageParagraph} from 'src/mui-views/app/AppPageParagraph';
import {AppActionButton} from 'src/mui-views/app/AppActionButton';
import {DialogUpsertNote} from '../DialogUpsertNote/DialogUpsertNote';
import {IRealNote} from '../resources/typed-notes';
import {INotesCollectionProps, NotesCollection} from '../views/NotesCollection';
import {useStyles} from './styles';
import {RB} from './resources';

interface IProps {
}

interface IDialogState {
	switch: boolean;
	target?: IRealNote;
	base?: Partial<IRealNote>;
}

export const NotesHome = React.memo((colProps: INotesCollectionProps) => {
	const cls = useStyles();
	const R = useLocalizedResourcesFromContext(RB);

	const [dialog, setDialog] = React.useState({switch: false, base: {}} as IDialogState);

	const onCreateNote = () => {
		setDialog({switch: true, base: {}});
	};

	const doCreateNote = (note: any) => {
		console.log('ready to create:', note);
	};

	const doUpdateNote = (noteId: any, patch: any) => {
		console.log('ready to update:', noteId, patch);
	};

	const renderNoteDialog = () => (
		<DialogUpsertNote
			open={dialog.switch}
			isCreating={Boolean(dialog.base)}
			baseEntity={dialog.base}
			targetEntity={dialog.target}
			doDismissDialog={() => setDialog({switch: false, base: {}})}
			doCreateEntity={doCreateNote}
			doUpdateEntity={doUpdateNote}
		/>
	);

	const renderNotes = () => (<NotesCollection {...colProps}/>);

	return (
		<div className={cls.ctnPage}>
			<AppPageHeader title={R.title}/>
			<AppPageParagraph description={R.description}/>
			{renderNotes()}

			<AppActionButton onClick={onCreateNote}/>
			{renderNoteDialog()}
		</div>
	);
});
