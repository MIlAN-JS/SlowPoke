import Imagekit from "imagekit"

const imagekit  = new Imagekit({
    urlEndpoint : process.env.IMAGEKIT_ENDPOINT,
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,    
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
})



const uploadFile = async (file) =>{
    try {

        const response =await imagekit.upload({
            file : file.buffer, 
            fileName : file.originalname

        });

        return response

        
    } catch (error) {
        next (error)
    }
}


export {
    uploadFile
}

