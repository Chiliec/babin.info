import EditorJS from '@editorjs/editorjs';
import List from '@editorjs/list';
import Delimiter from '@editorjs/delimiter';
import HeaderSettings from './headers';
import Shortcut from '@codexteam/shortcuts';

const editor = new EditorJS({
    holderId: 'codex-editor',
    autofocus: true,
    placeholder: 'Введите текст поста',
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

new Shortcut({
    name: 'CMD+S',
    on: document.body,
    callback: function(event) {
        editor.save().then(data => {
            console.log("Data: ", data);
        });
        event.preventDefault();
    }
});
