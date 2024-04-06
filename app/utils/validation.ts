import {z} from 'zod'
const passwordValidation = new RegExp(
  // /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  /^(?=.*?[0-9]).{8,}$/
);
  
 export const registerSchema=z.object({
  name:z.string().min(1,{ message: "This field has to be filled." }),
  email:z.string().min(1,{ message: "This field has to be filled." }).email("This is not a valid email."),
  password:z.string().min(1,{ message: "This field has to be filled." }).min(8,{message:'Password characters at least 8'}).regex(passwordValidation, {
    message: 'Your password is not valid',
  }),
 }) 

export const loginSchema = z.object({
  
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .min(8, { message: "Password characters at least 8" })
    .regex(passwordValidation, {
      message: "Your password is not valid",
    }),
}); 

