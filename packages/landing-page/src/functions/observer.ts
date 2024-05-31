export const CreateObserver = (animation:string) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if(entry.target instanceof HTMLElement) {
                    entry.target.style.animation = animation;
                    entry.target.style.transform = 'translateX(100%)';
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    return observer;
}
