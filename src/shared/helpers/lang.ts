export const getLangPrefix = (path: string) => {
    // expects /en/... or /pl/... etc (app/[lang]/...)
    const m = path.match(/^\/([^/]+)(\/|$)/);
    const maybeLang = m?.[1];
    return maybeLang ? `/${maybeLang}` : '';
};


export const withLang = (href: string, langPrefix: string) => {
    // href relative: '' | 'menu' | ...
    if (!langPrefix) return href ? `/${href}` : '/';
    return href ? `${langPrefix}/${href}` : `${langPrefix}/`;
};