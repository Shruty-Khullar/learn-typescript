enum Roles {
    admin = "Admin",
    user = "User"
}
type LoginDetails = {
    name: string;
    orderId: number;
    email: string;
    password: string;
    roles: Roles
}
let user1: LoginDetails = {
    name: "Shruty",
    orderId: 1,
    email: "abc.com",
    password: "abc",
    roles: Roles.admin
}
let user2: LoginDetails = {
    name: "Bnoi",
    orderId: 2,
    email: "abc.com",
    password: "bcd",
    roles: Roles.user
}
console.log("User1: " , user1);
console.log("User2: ", user2);

const giveAccess = (user: LoginDetails): string => {
    let {name, orderId, roles} = user;
    return (
        roles === "Admin" ? `${name} with id ${orderId} can be given admin access` : `${name} with id ${orderId} cannot be given admin access`
    );
}
console.log(giveAccess(user1));
console.log(giveAccess(user2));

//if we dont give values, it by default give incremental values as keys starting from 0
enum Status {
    failure,
    success
}
console.log(Status.failure + 'and' + Status.success)
