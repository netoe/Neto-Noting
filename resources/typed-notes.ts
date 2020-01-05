//

export interface IMetadata {
	_id: string;
	createdTime: number;
}

// The editable fields.
interface iNotePatch {
	name: string;
	description?: string;
	parentId?: string;
	tags?: string[];
}

// The patch to create or update a note.
// Further validations are needed.
export type INotePatch = Partial<iNotePatch>

export interface IRealNote extends IMetadata, iNotePatch {
}
