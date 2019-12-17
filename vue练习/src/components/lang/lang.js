import zh from './zh';
import en from './en';

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const messages = {
  zh,
  en
}

let lang = window.sessionStorage.getItem('lang')||'zh';
const i18n = new VueI18n({
  locale: lang,
  fallbackLocale: 'zh',
  messages,
  silentTranslationWarn: true     // 可以防止出现警告
})

export default i18n;