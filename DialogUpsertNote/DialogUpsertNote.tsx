'use strict';

import React from 'react';
import {getDialogUpsertEntity} from 'src/mui-lib/dialogs/DialogUpsertEntity';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {IDialogEntityEditorProps} from 'src/mui-lib/dialogs/IDialogEntityEditor';
import {useDialogFullScreenOption} from 'src/mui-lib/hooks/useFullScreenOption';
import {DialogConfigures} from 'src/mui-lib/dialogs/DialogConfiguresHelper';
import {NotesUtils} from '../resources/notes-validator';
import {INotePatch, IRealNote} from '../resources/typed-notes';
import {RB} from './resources';

const DialogNoteEditor = getDialogUpsertEntity<IRealNote, INotePatch, string>();

interface IProps extends IDialogEntityEditorProps<IRealNote, INotePatch, string> {

}

// This wrapper defines and prepares resources needed for the raw and generic #DialogEntityEditor.
export const DialogUpsertNote = React.memo((props: IProps) => {
	const fullScreen = useDialogFullScreenOption();
	const R = useLocalizedResourcesFromContext(RB);
	const fields = [R.fields.name, R.fields.description];
	const {isCreating, baseEntity, targetEntity, ...others} = props;

	return (
		<DialogNoteEditor
			{...others}
			DialogProps={DialogConfigures.getUpsertDialogOptions(fullScreen, R.getTitle, R.getButtonLabel, R.getDescription)}
			fields={fields}
			isCreating={isCreating} baseEntity={baseEntity}
			targetEntity={targetEntity} targetEntityId={targetEntity ? targetEntity._id : undefined}
			getUnifiedEntity={NotesUtils.getUnifiedNote}
			isResolvedEntityValid={NotesUtils.isResolvedNoteValid}
		/>
	);
});
