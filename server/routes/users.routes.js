const UsersController = require('../controllers/users.controller');
const router = require('express').Router();

//userSchema
//UserControllers

/**
 * GET /user/{userId}
 * @summary Get user data
 * @tags Users
 * @security bearerAuth
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get('/users/:id', UsersController.getUser);

/**
  * GET /users/
  * @summary Gets all users from the database.
  * @tags Users
  * @security bearerAuth
  * @return {object} 200 - Success response - application/json
  * @example response - 200 - Example success response
 * {"message": "Data fetched correctly.",
     "data": [
         {
             "id": 1,
             "userName": "test",
             "lastnames": "test test",
             "email": "test@test.test",
             "createdAt": "2022-06-14T11:43:36.351Z",
             "updatedAt": "2022-06-14T11:43:36.352Z",
         }
 ]}
  */
router.get('/users', UsersController.getUsers);

/**
 * POST /register
 * @summary Allows user to register
 * @tags Users
 * @param {userRegistrationData} request.body.required - The payload looks like this:
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * {
    "name": "name",
    "lastnames":"surname",
    "email": "email@email.com",
    "password": "8charactersOneNumberOnespecial!"
}
 * @example response - 200 - Example success response
 * { "status":"200", "message": "User registered correctly"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"Failed to register the user"}
 */
router.post('/register', UsersController.registerUser);

/**
 * DELETE /users/{userId}
 * @summary Delete user from the database.
 * @tags Users
 * @security bearerAuth
 * @return {object} 200 - Success response - application/json
 */
// Route delete user
router.delete('/users', UsersController.deleteUser)

/**
 * Update data
 * @typedef {object} userUpdateData
 * @property {string} name- name of the user
 * @property {string} email- Email of the user
 * @property {string} password - Pwd of the user
 */

/**
 * PATCH /users
 * @summary Allows Update some field to User
 * @tags Users
 * @security bearerAuth
 * @param {userUpdateData} request.body.required - The payload looks like this:
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * { "userStatusId":2}
 * @example response - 200 - Example success response
 * { "status":"200", "message": "User updated correctly"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"User not found"}
 */
// Update some field to User
// router.patch('/', UsersController.updateUser)

/**
 * Login data
 * @typedef {object} userLoginData
 * @property {string} email.required - Email of the user
 * @property {string} password.required - Pwd of the user
 */

/**
 * POST /login
 * @summary Allows user to login
 * @tags Users
 * @param {userLoginData} request.body.required - The payload looks like this:
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * { "email": "test@test.test", "password":"Test-test99"}
 * @example response - 200 - Example success response
 * {
    "code": "success",
    "header": "Welcome back",
    "message": "We are redirecting you to your account.",
    "token": "ACCESS TOKEN HERE",
    "refreshToken": "REFRESH TOKEN HERE"
}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"login failed"}
 */
router.post('/login', UsersController.loginUser)


module.exports = router;
