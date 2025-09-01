export function isEmpty(obj: any): boolean {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }
    if (obj && typeof obj === 'object') {
        return Object.keys(obj).length === 0;
    }
    return !obj;
}

export function snakeToCamel<T = any>(obj: unknown): T {
    if (Array.isArray(obj)) {
        return obj.map((v) => snakeToCamel(v)) as unknown as T;
    }
    if (obj !== null && typeof obj === 'object') {
        const source = obj as Record<string, unknown>;
        const result: Record<string, unknown> = {};
        Object.keys(source).forEach((key) => {
            const camelKey = key.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase());
            result[camelKey] = snakeToCamel(source[key]);
        });
        return result as T;
    }
    return obj as T;
}