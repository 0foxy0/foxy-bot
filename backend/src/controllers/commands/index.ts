import { Request, Response } from "express";
import { getBotCommandsService } from "../../services/commands";

export async function getCommandsController(req: Request, res: Response) {
    const { id } = req.params;
    
    try {
        
        const { data: commands } = await getBotCommandsService(id);
        res.send(commands);

    } catch (err) {

        console.log(err);
        res.status(400).send({ msg: "Error!" });

    }
};