import express from 'express';
import 'express-async-errors'
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from './common/exports';

import { currentUserRouter } from './domains/users/routes/current-user';
import { signinRouter } from './domains/users/routes/signin';
import { signoutRouter } from './domains/users/routes/signout';
import { signupRouter } from './domains/users/routes/signup';
import { indexProviderRouter } from './domains/users/routes/indexProvider';
import { showProviderRouter } from './domains/users/routes/show-provider';

import { newProductRouter } from './domains/products/routes/new';
import { indexProductProviderRouter } from './domains/products/routes/indexProvider';
import { showProductRouter } from './domains/products/routes/show';

import { newOrderRouter } from './domains/orders/routes/new';
import { indexOrderUserRouter } from './domains/orders/routes/indexUser';
import { updateOrderRouter } from './domains/orders/routes/update';
import { showOrderUserRouter } from './domains/orders/routes/showProvider';
import { orderUpdateCompleted } from './domains/orders/routes/updateCompleted';

const app = express();
app.set('trust proxy', true)
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: false
    })
)

app.use([currentUserRouter, signinRouter, signinRouter, signoutRouter, signupRouter, indexProviderRouter, showProviderRouter]);
app.use([newProductRouter, indexProductProviderRouter, showProductRouter])
app.use([newOrderRouter, indexOrderUserRouter, updateOrderRouter, showOrderUserRouter, orderUpdateCompleted])

app.all("*", async () => {
    throw new NotFoundError;
});

app.use(errorHandler);

export { app }