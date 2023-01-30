function chooseUserNameLetter(username) {
    if (!username) {
        return "";
    }
    let letterOne = username[0];
    let letterTwo = "";
    let splitName = username.split(" ");
    if (splitName.length > 1) {
        letterTwo = splitName[1][0];
    }
    return letterOne + letterTwo;
}
export default chooseUserNameLetter