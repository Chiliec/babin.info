import Header from '@editorjs/header';

class HeaderSettings extends Header {
    get levels() {
        return super.levels.filter((l) => [3, 4, 5, 6].includes(l.number));
    }

    get defaultLevel() {
        return this.levels[0];
    }
}

export default HeaderSettings;
