import { useEffect, RefObject, MouseEvent, TouchEvent } from 'react';

type EventType = MouseEvent | TouchEvent;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: EventType) => void
) {
    useEffect(() => {
        const listener: any = (event: EventType) => {
            // Do nothing if clicking ref's element or descendant elements
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}

export default useOnClickOutside;