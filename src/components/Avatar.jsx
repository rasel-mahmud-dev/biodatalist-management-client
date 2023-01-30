import React from 'react';
import chooseUserNameLetter from "../utils/chooseUserNameLetter";



const Avatar= ({className = "", imgClass = "", username, src, ...attr}) => {
    let userNameLetter = chooseUserNameLetter(username)
    function handleErrorImage(e) {

        let avatarRoot = e.target
        if(avatarRoot) {
            avatarRoot.innerHTML = `
			<span class="rounded-full bg-dark-5/50 w-9 h-9 flex items-center text-sm font-medium justify-center uppercase ${imgClass}>
                ${userNameLetter}
            </span>
		`
        }
    }

    return (
        <div className={`w-12 h-12 ${className}`} {...attr}>
            {src
                ?
                <img onError={handleErrorImage} src={src} alt="avatar"
                     className={`rounded-full w-full ${imgClass}`}/>

                : <div
                    className={`rounded-full h-full w-full bg-neutral-300 flex text-sm font-semibold items-center justify-center uppercase ${imgClass}`}>{userNameLetter}</div>
            }
        </div>
    );
};

export default Avatar;
