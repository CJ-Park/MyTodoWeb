// Controller 실행 전에 response header의 cookie 값에 session 값 설정
export const localMiddleware = (req, res, next) => {
    res.cookie('loggedIn', req.session.loggedIn);
    res.cookie('loginUser', req.session.loginUser);
    next();
}

// login 여부 확인해서 false이면 api호출시 예외처리 진행
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