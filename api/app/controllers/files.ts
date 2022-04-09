import { Request as Req, Response as Res, NextFunction as Next } from "express";
import multer from "multer";
import fs from "fs";
import prisma from "../models/prisma";
import { ExistFile } from "../helpers/file";

const Corte = "http://localhost:3001/";

const srcToUrl = (src: string) => {
  const data = src.split(`${"\\"}`).slice(1).join("/");
  return Corte + data;
};


const pathDelete=(path:string) => {

  const url=path.split('/').slice(3).join('/');

  return 'public/'+url;
}

const secreto = "FOO";

let storage = multer.diskStorage({
  destination: (req: Req, file, cb) => {
    const { courseName,userName } = req.body;
    console.log('BODY DEL STORAGE FILE CREATE:  ',req.body);

    let curso = courseName ? courseName : secreto;
    const path = `public/${userName}/${courseName}/files`;

    if (!fs.existsSync(path)) {
      console.log("no existe la ruta");
      fs.mkdirSync(path, { recursive: true });
      console.log("la hemlos creado");
    }
    console.log('El path del archivo es: ',path)
    cb(null, path);
  },
  filename: (req: Req, file, cb) => {
    cb(null, `${req.body.nameFile}.pdf`);
  },
});

let publico = multer({ storage: storage });

export const uploadFile = publico.single("miFile");

export const createFile = async (req: Req, res: Res, next: Next) => {
  console.log(req.body);
  console.log(req.file!.path);
  const { nameFile, courseId } = req.body;
  console.log(req.file);

  try {
        
      const newFile = await prisma.archive.create({
        data: {
          name: nameFile,
          url: srcToUrl(req.file!.path),
          course:{
            connect:{id:Number(courseId)}
          }
        },
        select: {
          id:true,
          name: true,
          url: true,
        },
      });
      return res.status(200).send({ error: null, content: newFile });


  } catch (err) {
    console.error("createFile: ", err);
    return res.send({ error: "The file was not created" });
  }
};

export const deleteFile = async (req: Req, res: Res, next: Next) => {
  const { fileId } = req.body;
  //fileId -->id Number   courseId --> id Number 

  console.log("deleteFile: ", fileId);

  if (!fileId )
    return res.send({ error: "The fields are empty", content: null });

  try {
    const oldFile = await prisma.archive.delete({
      where: {id:fileId},
      select: {
        id:true,
        name: true,
        url: true,
      },
    });

    console.log('la ruta es: ',oldFile.url);
    const ruta = pathDelete(oldFile.url);

    console.log("el path de la imagen es: ", ruta);
    fs.unlink(ruta, (err) => {
      if (err)
        return res.status(500).send({ error: "not delete", content: null });
      console.log("se borro con exito el archivo");
      return res.status(200).send({ error: null, content: oldFile });
    });
  } catch (err) {
    console.log("deleteFile: ", err);
    return res.send({ error: err });
  }
};

export const getFile = async (req: Req, res: Res, next: Next) => {
  const { fileId } = req.body; //fileId -->number 

  try {
    const fileToExport = await prisma.archive.findUnique({
      where: {id:fileId},
      select: {
        url: true,
      },
    });

    if (fileToExport) return res.send({ error: null, content: fileToExport });

    return res.send({ error: "File not exist", content: null });
  } catch (err) {
    console.log("getFiles: ", err);
    return res.send({ err, content: null });
  }
};

export const getFiles = async (req: Req, res: Res, next: Next) => {
  
  try {
    const files = await prisma.archive.findMany({
      select: {
        name: true,
      },
    });

    return res.send({ error: null, content: files });
  } catch (error) {
    console.log("Error es getFiles: ", error);
    return res.send({ error, content: null });
  }
};
