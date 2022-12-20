export const localMiddleware = (req, res, next) => {
    res.cookie('loggedIn', req.session.loggedIn);
    res.cookie('loginUser', req.session.loginUser);
    next();
}

export const protectMiddleware = (req, res, next) => {
    if(req.cookies.loggedIn) {
        next();
    } else {
        res.status(401).json({
            status: 401,
            message: "UnAuhtorization"
        });
    }
}