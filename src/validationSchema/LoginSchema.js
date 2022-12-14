import {check}  from "express-validator";
export const LoginSchema=[
    check("email")
    .notEmpty()
    .withMessage("This field is Compulsory")
    .isEmail()
    .withMessage("Enter valid Email")
    .normalizeEmail()
    ,
    check("password")
    .exists()
    .withMessage("This field is Compulsory"),
]