import validate from "validate.js";


export function validation(cons,value) {
    let constraints = {
        email: {
            email:true,
            presence:true,
            exclusion: {
                message: "email is not allowed"
            }
        },
        password: {
            presence: true,
            length: {
                minimum: 6,
                message: "must be at least 6 characters"
            }
        }
    };
    if(cons === "email") {
        return validate({email: value}, constraints);
    }
    else if(cons === "password")
    {
        return validate({password: value}, constraints);
    }
}
