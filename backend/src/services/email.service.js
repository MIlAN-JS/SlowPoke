import dotenv from "dotenv"
dotenv.config();
import nodemailer from "nodemailer";
console.log("file loaded")


const transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
        user : process.env.GOOGLE_USER_EMAIL, 
        pass : process.env.GOOGLE_USER_PASSWORD
    }

});

// verify transport configration
transporter.verify((error, success)=>{

    if(error){
        console.log("cannot connect with smtp server", error);
    }else{
        console.log("connected with smtp server")
    }

})

async function sendEmail({to , subject , html}){
   try {
     const info = await transporter.sendMail({
        from : `SlowPoke ${process.env.GOOGLE_USER_EMAIL}`,
        to : to , 
        subject : subject,
        html : html
    }) 

    console.log(info)
   } catch (error) {

    console.log("error sending email", error);
    
   }
}

export default sendEmail;