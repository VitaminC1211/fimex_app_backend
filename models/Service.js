const mongoose = require('mongoose');
const { number } = require('webflow-api/core/schemas');
const Schema = mongoose.Schema;

//Create Schema
const ServiceSchema = new Schema({
    id:{
      type: number
    },
    image:{
        type: String
    },
    inner_image:[
        {
            id:{
                type: number
            },
            images:{
                type: String
            },
            description:{
                type: String
            },
            inner_info:[{
                id:{
                    type:number
                },
                text:{
                    type: String
                },
                phone_inner:[{
                    id:{
                        type: number
                    },
                    phone_type:{
                        type: String
                    },
                    country_price:[{
                        id:{
                            type: number
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