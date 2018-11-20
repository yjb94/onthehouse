import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import ko from 'react-intl/locale-data/ko'
import koString from './ko'
import enString from './en'
import { getLocale } from '../utils/utils'

addLocaleData([...en, ...ko])

const defaultLang = getLocale();
let messages = enString;

switch(defaultLang) {
    case 'ko': messages = koString; break;
    default:
    case 'en': messages = enString; break;
}

export default {
    locale:defaultLang,
    messages:messages
}