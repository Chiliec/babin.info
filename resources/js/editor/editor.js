import EditorJS from '@editorjs/editorjs';
import List from '@editorjs/list';
import Delimiter from '@editorjs/delimiter';
import HeaderSettings from './headers';

const editor = new EditorJS({
    holderId: 'codex-editor',
    autofocus: true,
    tools: {
        header: {
            class: HeaderSettings,
            shortcut: 'CMD+SHIFT+H',
            inlineToolbar: ['link'],
            config: {
                placeholder: 'Введите заголовок'
            }
        },
        list: {
            class: List,
            inlineToolbar: true
        },
        delimiter: Delimiter,
    },
});
