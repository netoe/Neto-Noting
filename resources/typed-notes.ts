//

export interface IMetadata {
	_id: string;
	createdTime: number;
}

export interface INotePatch {
	name: string;
	description?: string;
	parentId?: string;
	tags?: string[];
}

export interface IRealNote extends IMetadata, INotePatch {
}
