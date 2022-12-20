export const localMiddleware = (req, res, next) => {
    res.cookie('loggedIn', req.session.loggedIn, {
        httpOnly: true,
        sameSite: 'lax',
    });
    res.cookie('loginUser', req.session.loginUser, {
        httpOnly: true,
        sameSite: 'lax',
    });
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