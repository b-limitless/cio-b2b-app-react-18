export function isScrolledToBottom(container:HTMLElement | null) {
    if(container) {
        return container?.scrollTop + container?.clientHeight >= container?.scrollHeight
    }
    return false;
}
