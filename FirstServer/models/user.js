class User{
    constructor(id,name,email,password,role="user")
    {
     this.id = id;  
     this.name=name;
     this.email=email;
     this.password = password;
     this.role = role 
     this.createdAt = new Date();
    }

}
module.exports = User;