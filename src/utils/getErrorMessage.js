function getErrorMessage(error) {
    if (!error) return "Internal Error"


    let message = ""
    if (typeof error === "object") {
        if (typeof error.data == "object") {
            if (error.data?.message && typeof error.data?.message === "string") {
                message = error.data?.message
            }
        } else if (typeof error.data === "string") {
            message = error.data
        }
    } else if (typeof error === "string") {
        message = error
    }
    return message
}

export default getErrorMessage