//

import React from 'react';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {AppPageParagraph} from 'src/mui-views/app/AppPageParagraph';
import {AppActionButton} from 'src/mui-views/app/AppActionButton';
import {DialogConfirmButton} from 'src/mui-lib/dialogs/DialogConfirmButton';
import {DialogConfigures} from 'src/mui-lib/dialogs/DialogConfiguresHelper';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {DialogUpsertNote} from '../DialogUpsertNote/DialogUpsertNote';
import {IRealNote} from '../resources/typed-notes';
import {RB} from './resources';
import {useStyles} from './styles';

interface IProps {
	note: IRealNote;
}

interface IDialogState {
	switch: boolean;
	target?: IRealNote;
	base?: Partial<IRealNote>;
}

export const NoteHome = React.memo(({note}: IProps) => {
	const cls = useStyles();
	const R = useLocalizedResourcesFromContext(RB);
	const {name, description, tags} = note;

	const [dialog, setDialog] = React.useState({switch: false} as IDialogState);

	const onUpdateNote = () => {
		setDialog({switch: true});
	};

	// Create sub (treed )notes.
	const doCreateNote = (note: any) => {
		console.log('ready to create:', note);
	};

	const doUpdateNote = (noteId: any, patch: any) => {
		console.log('ready to update:', noteId, patch);
	};

	const doDeleteNote = () => {
		console.log('ready to delete:', note);
	};

	const renderNoteDialog = () => (
		<DialogUpsertNote
			open={dialog.switch}
			isCreating={false} targetEntity={note}
			doDismissDialog={() => setDialog({switch: false})}
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
