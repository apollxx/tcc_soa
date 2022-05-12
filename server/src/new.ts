/* import { Router, Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest, currentUser, requireAuth, authClient, BadRequestError } from "../../../common/exports";
import { Client } from "../models/client";

const router = Router()

router.post("/api/client", currentUser, requireAuth, authClient, [
    body("name")
        .notEmpty()
        .withMessage("a name is required"),
    body("phone")
        .notEmpty()
        .withMessage("a phone is required"),
    body("address")
        .notEmpty()
        .withMessage("an address is required")
], validateRequest, async (req: Request, res: Response) => {
    const { name, phone, address } = req.body;
    const userId = req.currentUser?.id
    if (!userId) throw new Error()

    const foundedClient = await Client.findOne({ userId })
    if (foundedClient) throw new BadRequestError("Client already registred")

    const client = Client.build({ name, phone, address, userId })
    await client.save();

    res.status(201).send(client)
})

export { router as newClientRouter }
 */