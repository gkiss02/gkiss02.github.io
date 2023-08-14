import en from '../Languages/en.json';
import hu from '../Languages/hu.json';

function langDecider(lang) {
    switch (lang) {
        case 'EN':
            return en;
        case 'HU':
            return hu; 
        default:
            return en;
    }
}

export default langDecider;