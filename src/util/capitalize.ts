export function capitalize(string: string): string {
    if (string.length < 1) {
        return string;
    }

    return string.slice(0, 1).toUpperCase() + string.slice(1);
}
