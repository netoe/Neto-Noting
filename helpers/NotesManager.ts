//

import {newNote} from '../resources/constructors';
import {mocked} from '../resources/mocked-notes';
import {INotePatch, IRealNote} from '../resources/typed-notes';

const _notes = new Map<string, IRealNote>();
mocked.notes.map(note => _notes.set(note._id, note));

const isMatch = (base: string, search: string): boolean => base.toLowerCase().includes(search.trim().toLowerCase());
const getNote = (_id: string): IRealNote => {
	const note = _notes.get(_id);
	if (!note) {throw new Error('failed to find the target note');}
	return note;
};

const delay = 800;
const mock = <T>(value: T): Promise<T> => new Promise(resolve => setTimeout(() => resolve(value), delay));

const readNotes = (search?: string): Promise<IRealNote[]> => {
	const notes = Array.from(_notes.values());
	if (!search) {return mock(notes);}
	return mock(notes.filter(note => isMatch(note.name, search)));
};
const createNote = (name: string, description?: string, parentId?: string, tags?: string[]): Promise<IRealNote> => {
	const note = newNote(name, description, parentId, tags);
	_notes.set(note._id, note);
	return mock(note);
};
const readNote = (_id: string): Promise<IRealNote> => mock(getNote(_id));
const updateNote = (_id: string, patch: Partial<INotePatch>): Promise<IRealNote> => {
	const note = getNote(_id);
	const newNote = {...note, ...patch};
	_notes.set(_id, newNote);
	return mock(newNote);
};
const deleteNote = (_id: string): Promise<IRealNote> => {
	const note = getNote(_id);
	_notes.delete(_id);
	return mock(note);
};

// The CRUD operations of notes within in-memory database.
export const NotesManager = {
	readNotes,
	readNote,
	createNote,
	updateNote,
	deleteNote,
};
