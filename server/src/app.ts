import express from 'express';
import 'express-async-errors'
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from './common/exports';

import { currentUserRouter } from './domains/auth/routes/current-user';
import { signinRouter } from './domains/auth/routes/signin';
import { signoutRouter } from './domains/auth/routes/signout';
import { signupRouter } from './domains/auth/routes/signup';

const app = express();
app.set('trust proxy', true)
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: false
    })
)

// auth
app.use([currentUserRouter, signinRouter, signinRouter, signoutRouter, signupRouter]);

app.all("*", async () => {
    throw new NotFoundError;
});

app.use(errorHandler);

export { app }