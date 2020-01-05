//

import React from 'react';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {AppPageParagraph} from 'src/mui-views/app/AppPageParagraph';
import {AppActionButton} from 'src/mui-views/app/AppActionButton';
import {DialogConfirmButton} from 'src/mui-lib/dialogs/DialogConfirmButton';
import {DialogConfigures} from 'src/mui-lib/dialogs/DialogConfiguresHelper';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {usePromiseFetcher} from 'src/mui-lib/hooks/usePromiseFetcher';
import {DialogUpsertNote} from '../DialogUpsertNote/DialogUpsertNote';
import {NotesManager} from '../helpers/NotesManager';
import {INotePatch, IRealNote} from '../resources/typed-notes';
import {RB} from './resources';
import {useStyles} from './styles';

interface IProps {
	note: IRealNote;
	onExit: Function;
	onExitAndRefresh: Function;
}

interface IDialogState {
	switch: boolean;
	target?: IRealNote;
	base?: INotePatch;
}

export const NoteHome = React.memo(({note, onExit, onExitAndRefresh}: IProps) => {
	const cls = useStyles();
	const R = useLocalizedResourcesFromContext(RB);

	const [fetcher, doRefresh] = usePromiseFetcher<IRealNote>(() => NotesManager.readNote(note._id), [note]);
	const [dialog, setDialog] = React.useState({switch: false} as IDialogState);

	const {name, description, tags} = fetcher.data || note;

	const onUpdateNote = () => {
		setDialog({switch: true});
	};
	const onDismissDialog = () => setDialog({switch: false});

	// Create sub (treed )notes.
	const doCreateNote = (note: any) => {
		console.log('ready to create:', note);
	};

	const doUpdateNote = (noteId: string, patch: INotePatch) => {
		onDismissDialog();
		NotesManager.updateNote(note._id, patch).then(res => {
			console.log('updated:', res, noteId, patch, note);
			doRefresh();
		});
	};

	const doDeleteNote = () => {
		onDismissDialog();
		NotesManager.deleteNote(note._id).then(res => {
			console.log('deleted:', res, note);
			onExitAndRefresh();
		});
	};

	const renderNoteDialog = () => (
		<DialogUpsertNote
			open={dialog.switch}
			isCreating={false} targetEntity={note}
			doDismissDialog={onDismissDialog}
			doUpdateEntity={doUpdateNote}
		/>
	);

	return (
		<div className={cls.ctnPage}>
			<AppPageHeader title={name}/>
			<AppPageParagraph description={description}/>

			{tags ? <AppPageParagraph description={tags.join(', ')}/> : undefined}

			<div>
				<DialogConfirmButton
					DialogProps={DialogConfigures.getConfirmDialogOptions(R.delete.title, R.delete.confirm, undefined, note.name)}
					buttonText={R.delete.button} buttonProps={{variant: 'contained', color: 'primary'}}
					onConfirm={doDeleteNote}
				/>
			</div>

			<AppActionButton icon='edit' onClick={onUpdateNote}/>
			{renderNoteDialog()}
		</div>
	);
});
