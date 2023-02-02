function redirectLogin(router){
    router.push(router.query?.redirect ? router.query.redirect : "/")
}

export default redirectLogin
