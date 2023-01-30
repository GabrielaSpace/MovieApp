const users = require('../models/users_sql')

const createUser = async (req, res) => {
    let newUser = req.body
    const response = await users.createUser(newUser);
    res.status(201).json({
        user_created: response,
        data: newUser
    })
}

const validatedUser = async (req, res) => {
    let credentials = req.body;
    const response = await users.validatedUser(credentials);
    if (response === 1) {
        
        res.status(201).json({
            user_validated: response,
        })
    } else {
        res.status(400).json({
            msj: "User not found, check if you write your user correctly"
        })
    }

}


// app.post('/', (req, res) => {
//     if(req.body.usuario === "alex") {
// 		const payload = {
// 			check:  true,
//             user:"alex"
// 		};
// 		const token = jwt.sign(payload, app.get('llave'), {
// 			expiresIn: "1200000ms" // 1200 segundos para que expire
// 		});
// 		res.status(200).json({
// 			mensaje: 'Autenticación correcta',
// 			token: token
// 		});
//     } else {
//         res.status(401).json({ mensaje: "Usuario o contraseña incorrectos"})
//     }
// })


module.exports = {
    createUser,
    validatedUser
}