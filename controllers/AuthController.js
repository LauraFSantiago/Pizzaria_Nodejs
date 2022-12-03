const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = class AuthController{
    
    
    static login(req,res){
        res.render('auth/login')
    }

    static register(req,res){
        res.render('auth/register')
    }

    static async registerPost(req, res){
        const {name, email, password, confirmpassword} = req.body

        if(password != confirmpassword) {
            res.render('auth/register');

            return
        }
   
    const checkIfUserExists = await User.findOne({where: {email: email}})

    if(checkIfUserExists){
        res.render('auth/register');

        return
    }

    const salt=bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    const user = {
        name,
        email,
        password: hashedPassword,
    }
    try{
        const createdUser = await User.create(user)

        //initialize session
        req.session.userid = createdUser.id
         req.session.save(() => {
            res.redirect('/')
         })
    }catch(err){
        console.log(err)
    }
    
}
    //VER ESSE 
    static async loginPost(req,res){

        const {email, password} = req.body

        //usuario existe
        const user = await User.findOne({where: {email:email}})
    
       

        if(!user){
            req.flash('message','Usuário não encontrado')
            res.render('auth/login')
            

            return
        }

        //senha valida
        const passwordMatch = bcrypt.compareSync(password, user.password)

        if(!passwordMatch){
            req.flash('message','Senha inválida')
            res.render('auth/login')
            
            return 
        }
        
        
        //inicializar a session
        req.session.userid = user.id
        req.flash('message','Login realizado com sucesso!')

        req.session.save(()=>{
            res.redirect('pedidos/dashboard')
        })
    }

    static logout(req,res){
        req.session.destroy()
        res.redirect('/login')
    }


    
}