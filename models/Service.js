const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ServiceSchema = new Schema({
    id:{
      type: String  
    },
    image:{
        type: String
    },
    inner_image:[
        {
            id:{
                type: String
            },
            images:{
                type: String
            },
            description:{
                type: String
            },
            inner_info:[{
                id:{
                    type:String
                },
                text:{
                    type: String
                },
                phone_inner:[{
                    id:{
                        type: String
                    },
                    phone_type:{
                        type: String
                    },
                    country_price:[{
                        id:{
                            type: String
                        },
                        price:{
                            type: String
                        }
                    }]
                }]
            }]
        }
    ]

});

module.exports = Service = mongoose.model('service',ServiceSchema)