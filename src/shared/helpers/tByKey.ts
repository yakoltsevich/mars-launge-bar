export const tByKey = (dict: any, key: string | null | undefined) => {
    if (!key) return '';
    return key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), dict) ?? '';
};
