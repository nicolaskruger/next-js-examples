
const fallBackFalse = (id: string) => `/01data-fetching/fall-back-false/${id}`;

const ROUTE_FRONTEND = {
    FALL_BACK_FALSE_A: fallBackFalse("a"),
    FALL_BACK_FALSE_B: fallBackFalse("b"),
    FALL_BACK_FALSE_FAIL: fallBackFalse("fail")
}

const serialiseRouteFrontend = () => Object.keys(ROUTE_FRONTEND).map(key => ROUTE_FRONTEND[key as "FALL_BACK_FALSE_A"]);

export {
    ROUTE_FRONTEND,
    serialiseRouteFrontend
}