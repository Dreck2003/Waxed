import {Router} from 'express';
import { uploadFile, createFile, deleteFile ,getFile,getFiles } from "../controllers/files";

const router=Router();


router.post("/", uploadFile, createFile);
router.delete('/',deleteFile);
router.get('/',getFile);
router.get('/files',getFiles);

module.exports= router;