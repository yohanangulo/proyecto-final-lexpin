import {ref, getDonwnLoadURL, uploadBytesResumable} from 'firebase/storage';
import { storage } from '../config/firebase.js';
import sharp from 'sharp';

export async function uploadFile(file){
    let fileBuffer = await sharp(file.Buffer)
    .resize({width:200, height:400, fit: 'cover' })
    .toBuffer()

    const fileRef = ref(storage, `file/${file.originalname} ${Date.now()}`);

    const fileMetadata = {
        contentType: file.mimetype
    }

    const fileUploadPromise = uploadBytesResumable(
        fileRef,
        fileBuffer,
        fileMetadata
    );

    await fileUploadPromise;
    
    const fileDownloadURL = await getDonwnLoadURL(fileRef);

    return { ref: fileRef, downloadURL: fileDownloadURL}
}