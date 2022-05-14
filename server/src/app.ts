import express from 'express';
import 'express-async-errors'
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from './common/exports';

import { currentUserRouter } from './domains/users/routes/current-user';
import { signinRouter } from './domains/users/routes/signin';
import { signoutRouter } from './domains/users/routes/signout';
import { signupRouter } from './domains/users/routes/signup';

import { newProductRouter } from './domains/products/routes/new';
import { indexProductRouter } from './domains/products/routes';

import { newOrderRouter } from './domains/orders/routes/new';
import { indexOrderUserRouter } from './domains/orders/routes/indexUser';
import { updateOrderRouter } from './domains/orders/routes/update';

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
app.use([newProductRouter, indexProductRouter])
app.use([newOrderRouter, indexOrderUserRouter, updateOrderRouter])

app.all("*", async () => {
    throw new NotFoundError;
});

app.use(errorHandler);

export { app }