//

import {IRealNote} from './typed-notes';

let i = 1;
export const newNote = (name: string, description?: string, parentId?: string, tags?: string[]): IRealNote =>
	({_id: `oid/${i++}`, name, description, parentId, tags, createdTime: +new Date()});
