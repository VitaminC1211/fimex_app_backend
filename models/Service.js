const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ServiceSchema = new Schema({
    image:{
        type: String
    },
    inner_image:[
        {
            images:{
                type: String
            },
            description:{
                type: String
            },
            inner_info:[{
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
                        text:{
                            type: String
                        }
                    }]
                }]
            }]
        }
    ]

});

module.exports = Service = mongoose.model('service',ServiceSchema)