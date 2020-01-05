//

import React from 'react';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {AppPageParagraph} from 'src/mui-views/app/AppPageParagraph';
import {AppActionButton} from 'src/mui-views/app/AppActionButton';
import {DialogUpsertNote} from '../DialogUpsertNote/DialogUpsertNote';
import {NotesManager} from '../helpers/NotesManager';
import {INotePatch, IRealNote} from '../resources/typed-notes';
import {INotesCollectionProps, NotesCollection} from '../views/NotesCollection';
import {useStyles} from './styles';
import {RB} from './resources';

interface IProps extends INotesCollectionProps {
	doRefresh: Function;
}

interface IDialogState {
	switch: boolean;
	target?: IRealNote;
	base?: INotePatch;
}

export const NotesHome = React.memo(({doRefresh, ...colProps}: IProps) => {
	const cls = useStyles();
	const R = useLocalizedResourcesFromContext(RB);

	const [dialog, setDialog] = React.useState({switch: false, base: {}} as IDialogState);

	const onCreateNote = () => {
		setDialog({switch: true, base: {}});
	};
	const onDismissDialog = () => setDialog({switch: false, base: {}});

	const doCreateNote = (patch: INotePatch) => {
		const {name, description} = patch;
		if (!name) {return alert('The note content is required.');}
		onDismissDialog();
		NotesManager.createNote(name, description).then(note => {
			console.log('created note:', note, patch);
			doRefresh();
		});
	};

	const doUpdateNote = (noteId: any, patch: any) => {
		console.log('ready to update:', noteId, patch);
	};

	const renderNoteDialog = () => (
		<DialogUpsertNote
			open={dialog.switch}
			isCreating={Boolean(dialog.base)} baseEntity={dialog.base} targetEntity={dialog.target}
			doDismissDialog={onDismissDialog} doCreateEntity={doCreateNote} doUpdateEntity={doUpdateNote}
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
