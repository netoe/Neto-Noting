//

import {getAppSecondaryMenu, IMenuSection, newMenuSection} from 'src/graphic/components/AppSecondaryMenu';
import {newNote} from '../resources/constructors';
import {mocked} from '../resources/mocked-notes';
import {IRealNote} from '../resources/typed-notes';

export const AppMenuNotes = getAppSecondaryMenu<IRealNote, IMenuSection<IRealNote>>();

const secOverview = newMenuSection<IRealNote>('sec-overview', 'Overview', [
	newNote('notes', 'All Notes'),
]);
const secNotes = newMenuSection<IRealNote>('sec-notes', 'Notes',
	mocked.notes,
);
const sections: IMenuSection<IRealNote>[] = [
	secOverview,
	secNotes,
];
const defaultMenuItemId = sections[0].items[0]._id;

// Resource > General Resource
export const RR = {
	sections,
	defaultMenuItemId,
};
