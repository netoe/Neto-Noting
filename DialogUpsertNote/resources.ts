'use strict';

import {IInputFieldDefinition} from 'src/mui-lib/editors/definitions';
import {FieldTypeString, FieldVariantOutlined} from 'src/mui-lib/editors/instances';

const options = {
	variant: FieldVariantOutlined,
	fullWidth: true, required: true, type: FieldTypeString,
};

const fieldName: IInputFieldDefinition = {
	...options,
	id: 'name', label: 'Content',
	placeholder: 'Enter the note content.',
};

const fields = {
	name: fieldName,
};

const zhFieldName: IInputFieldDefinition = {
	...options,
	id: fieldName.id, label: '笔记内容',
	placeholder: '填写写你的笔记主体内容。',
};

const zhFields = {
	name: zhFieldName,
};

type getter = (isCreating: boolean) => string;

interface IR {
	getTitle: getter;
	getDescription: getter;
	getButtonLabel: getter;
	buttonDelete: string;
	fields: typeof fields;
}

const R = {
	getTitle: (isCreating: boolean) => isCreating ? 'New Note' : 'Updating Note',
	getDescription: (isCreating: boolean) => isCreating ? 'Create a session.' : 'Update a session.',
	getButtonLabel: (isCreating: boolean) => isCreating ? 'Create' : 'Save Changes',
	buttonDelete: 'Delete',
	fields,
};

const R_ZH: IR = {
	getTitle: (isCreating: boolean) => isCreating ? '新笔记' : '更新笔记',
	getDescription: (isCreating: boolean) => isCreating ? '创建一个笔记。' : '更新一个笔记。',
	getButtonLabel: (isCreating: boolean) => isCreating ? '创建' : '保存变更',
	buttonDelete: '删除',
	fields: zhFields,
};

export const RB = {df: R, en: R, zh: R_ZH};
