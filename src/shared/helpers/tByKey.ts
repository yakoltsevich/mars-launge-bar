export const tByKey = (dict: any, key: string) => {
    return key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), dict) ?? key;
};
