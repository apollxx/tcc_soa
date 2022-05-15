const baseUrl = "https://soa.dev/"
export const endpoints = {
    get: {
        users: {
            currentUser: baseUrl + "api/users/currentuser",
            indexProviders: baseUrl + "api/users/providers"
        },
        products: {
            indexProvider: (id) => { return baseUrl + "api/products/provider/" + id }
        },
        orders: {
            indexUser: (param) => { return baseUrl + `api/orders/user/${param}` }
        }
    },
    post: {
        users: {
            signup: baseUrl + "api/users/signup",
            signin: baseUrl + "api/users/signin",
            signout: baseUrl + "api/users/signout"
        },
        products: {
            new: baseUrl + "api/products"
        },
        orders: {
            new: baseUrl + "api/orders"
        }
    },
    put: {
        orders: {
            update: baseUrl + "api/orders"
        }
    }
}