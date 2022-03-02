# Node.js Project - Business Cards

## Users

### Register

go to `http://localhost:3000/users/register` and send post request - name, email, password and biz(not required to register)

### Login

go to `http://localhost:3000/users/login` and send post request - email and password

### Get user details - required jwt token in headers

go to `http://localhost:3000/users/find` and send get request

## Cards - required jwt token in headers for all actions

### Create a business card

go to `http://localhost:3000/biz/create` and send post request - bizName, bizDesc, bizAddr, bizPhone and bizPic( not required for creating a card)

### Edit existing card

go to `http://localhost:3000/biz/update/[id]` and send put request with the details that you want to change and the id as params

### Find existing card

go to `http://localhost:3000/biz/find[?id=...]` and send get request with the id as the query params

### Find all user cards

go to `http://localhost:3000/biz/userCards/[id]` and send get request with the user id as params

### Delete card

go to `http://localhost:3000/biz/delete` and send delete request with the card id in the body
