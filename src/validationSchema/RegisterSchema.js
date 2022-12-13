import { check } from "express-validator";

export const RegisterSchema=[
    check("name")
    .isAlpha()
    .withMessage("Name can contain only Alphabets")
    .isLength({min:0,max:30})
    .withMessage("Name Can Be Atmost 30 Length")
    .trim()
    ,
    check("email")
    .notEmpty()
    .withMessage("This field is Compulsory")
    .isEmail()
    .withMessage("Enter valid Email")
    .normalizeEmail()
    ,
    check("password")
    .exists()
    .withMessage("This field is Compulsory")
      .isLength({ min: 8, max: 15 })
      .withMessage("your password should have min and max length between 8-15")
      .matches(/\d/)
      .withMessage("your password should have at least one number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("your password should have at least one sepcial character"),
]