function scrollTop(top = 0) {
    if (typeof window !== "undefined") {
        window.scrollTo && window.scrollTo({
            top,
            behavior: "smooth"
        })
    }
}

export default scrollTop