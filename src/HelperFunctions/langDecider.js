import en from '../Languages/en.json';

function langDecider(lang) {
    switch (lang) {
        case 'en':
            return en;
        default:
            return en;
    }
}

export default langDecider;