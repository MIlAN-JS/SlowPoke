
    import { body , validationResult } from 'express-validator';

    const validateFunc = (req , res , next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
             return res.status(400).json({
            errors : errors.array()
        })
            
        } 

        next()
       
    }

    const registerValidator = [

        body("userName").notEmpty().withMessage("userName is required"),
        body("email").isEmail().withMessage("valid email is required"),
        body("password").isLength({min : 6}).withMessage("password must be at least 6 characters long"),
        body("email").trim().normalizeEmail(),
    validateFunc


        
    ]

    const loginValidator = [

        body("email").isEmail().withMessage("valid email is required"),
        body("password").notEmpty().withMessage("password is required"),    
        validateFunc    

    ]

    export  {registerValidator, loginValidator}