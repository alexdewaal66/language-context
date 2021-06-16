export function now() {
    const time = (new Date()).toLocaleTimeString();
    return `(${time})`;
}


