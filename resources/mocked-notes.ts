//

import {newNote} from './constructors';
import {IRealNote} from './typed-notes';

const notes: IRealNote[] = [
	newNote('A test untitled note with tags.', 'N/A', undefined, ['demo', 'untitled']),
	newNote('A Test Titled Note with Description', 'The attached description of the note.', undefined, ['demo', 'titled']),
	newNote('A Titled Note with Description and Comments', 'Comments are enabled to interact.', undefined, ['Comment One', 'Comment Two', 'Comment Three']),
	newNote('A Powerful Titled Note like A Thread with Followed Posts', 'Threads are encouraged', undefined, ['Thread One with Comments', 'Thread Two with Comments', 'Thread Three with Comments']),
];

export const mocked = {
	notes,
};
