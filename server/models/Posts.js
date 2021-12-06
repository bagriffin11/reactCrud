const Igaccount = require("./Igaccount");

module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts",{
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }

       
    });

    Posts.associate = (models) => {
        Posts.hasOne(models.Igaccount, {
           onDelete: "cascade",
        });
            //this makes igaccount linked to posts
  }; 
  
    return Posts

};
//success
