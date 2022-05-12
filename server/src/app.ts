import express from 'express';
import 'express-async-errors'
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from './common/exports';

import { currentUserRouter } from './domains/user/routes/current-user';
import { signinRouter } from './domains/user/routes/signin';
import { signoutRouter } from './domains/user/routes/signout';
import { signupRouter } from './domains/user/routes/signup';


const app = express();
app.set('trust proxy', true)
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: false
    })
)

app.use([currentUserRouter, signinRouter, signinRouter, signoutRouter, signupRouter]);

app.all("*", async () => {
    throw new NotFoundError;
});

app.use(errorHandler);

export { app }