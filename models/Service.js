const mongoose = require('mongoose');
const { number } = require('webflow-api/core/schemas');
const Schema = mongoose.Schema;

//Create Schema
const ServiceSchema = new Schema({
    id:{
      type: Number
    },
    image:{
        type: String
    },
    inner_image:[
        {
            id:{
                type: Number
            },
            images:{
                type: String
            },
            description:{
                type: String
            },
            inner_info:[{
                id:{
                    type:Number
                },
                text:{
                    type: String
                },
                phone_inner:[{
                    id:{
                        type: Number
                    },
                    phone_type:{
                        type: String
                    },
                    country_price:[{
                        id:{
                            type: Number
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