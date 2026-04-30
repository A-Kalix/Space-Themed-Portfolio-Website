export const slideInFromLeft = (delay) => ({
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay, duration: 0.8, ease: "easeOut" },
    },
});

export const slideInFromRight = (delay) => ({
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay, duration: 0.8, ease: "easeOut" },
    },
});

export const slideInFromTop = (delay) => ({
    hidden: { y: -50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay, duration: 0.8, ease: "easeOut" },
    },
});

export const slideInFromBottom = (delay) => ({
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay, duration: 0.8, ease: "easeOut" },
    },
});

export const scaleIn = (delay) => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { delay, duration: 1, ease: "easeOut" },
    },
});
