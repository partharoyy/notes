export default function debounce(fn, delay) {
    let timer
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(null, arguments)
        }, delay)
    }
}

export function removeHTMLTags(str) {
    return str.replace(/<[^>]*>?/gm, '');
};

