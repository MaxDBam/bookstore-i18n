'use strict';

var gTranslations = {
    title: {
        he: 'ברוכים הבאים לחנות הספרים',
        en: 'Welcome to the Book Store'
    },
    add: {
        he: 'צור ספר חדש',
        en: 'Add a new book'
    },
    save: {
        he: 'שמור',
        en: 'Save'
    },
    'title-placeholder': {
        he: 'שם הספר',
        en: 'Title'
    },
    'price-placeholder': {
        he: 'מחיר',
        en: 'Price'
    },
    id: {
        he: 'מספר זיהוי',
        en: 'Id'
    },
    'sortby-title': {
        he: 'שם הספר',
        en: 'Title'
    },
    'sortby-price': {
        he: 'מחיר',
        en: 'Price'
    },
    actions: {
        he: 'פעולות',
        en: 'Actions'
    },
    read: {
        he: 'קרא',
        en: 'Read'
    },
    update: {
        he: 'עדכן',
        en: 'Update'
    },
    delete: {
        he: 'הסר',
        en: 'Delete'
    },
    close: {
        he: 'סגור',
        en: 'Close'
    }
};

var gCurrLang = 'en';

function getTranslation(translationKey) {
    var langTransMap = gTranslations[translationKey];
    if (!langTransMap) return 'Unknown';

    var translation = langTransMap[gCurrLang];
    if (!translation) translation = langTransMap['en'];
    return translation;
}

function doTranslate() {
    var elems = document.querySelectorAll('[data-trans]');
    elems.forEach(el => {
        const key = el.dataset.trans;
        const translation = getTranslation(key);

        if(el.placeholder) el.placeholder = translation;
        else el.innerText = translation;
    });
}

function setLanguage(lang) {
    gCurrLang = lang;
}