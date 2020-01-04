//

import {IRealNote} from './typed-notes';

const getUnifiedNote = ({name, ...others}: IRealNote): IRealNote => {
	return {
		...others,
		name: name || '',
	};
};

const isResolvedNoteValid = ({name, description}: IRealNote): boolean => {
	if (!name) {return false;}
	return true;
};

export const NotesUtils = {
	getUnifiedNote,
	isResolvedNoteValid,
};
