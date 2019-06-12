const users =[
    {
        id:1,
        username:'billy',
        password:'billy'
    },
    {
        id:2,
        username:'bob',
        password:'bob'
    }
]

module.exports ={
    login:(req,res)=>{
        const {username,password} = req.body
        let foundUser = users.filter(user=>{
            return user.username === username && user.password === password
        })
        if(!foundUser[0]){
            return res.sendStatus(401)
        } 
        req.session.user = foundUser[0]
        // console.log(req.session.user)
        res.status(200).send(req.session.user)
    },

    logout:(req,res)=>{
        // console.log(1111,req.session)
        req.session.destroy(()=>console.log('you have been successfully logged out'))
        // console.log(2222,req.session)
    },

    // current:(req,res)=>{
    //     console.log(req.session.user)
    //     res.status(200).send(req.session.user)
    // }
}