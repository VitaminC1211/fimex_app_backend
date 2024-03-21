const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const port = 3005;



app.use(bodyParser.json());

app.post('/user/register',(req,res) => {
  const registerData = req.body;
  console.log('Received data from client:', registerData);
  res.send('Data received successfully');
});

app.post('/user/login', (req, res) =>{
  const loginData = req.body;
  console.log('Received data from client:', loginData);
  res.send('Data received successfully');
});



app.get('/', (req, res) => {
  const imageData = [
    {
      id: 1,
      image: 'https://1000logos.net/wp-content/uploads/2021/12/iPhone-logo.png',
      inner_image: [
        {
          id: 1,
          image: 'https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png',
          description: 'desktop',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          image: 'https://1000logos.net/wp-content/uploads/2021/12/iPhone-logo.png',
          description: 'iphone',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 3,
          image: 'https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png',
          description: 'desktop',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 4,
          image: 'https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png',
          description: 'watch',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      image: 'https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png',
      inner_image: [
        {
          id: 1,
          image: 'https://1000logos.net/wp-content/uploads/2021/12/iPhone-logo.png',
          description: 'desktop',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          image: 'https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png',
          description: 'desktop',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 3,
          image: 'https://1000logos.net/wp-content/uploads/2021/12/iPhone-logo.png',
          description: 'iphone',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 4,
          image: 'https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png',
          description: 'watch',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      image: 'https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png',
      inner_image: [
        {
          id: 1,
          image: 'https://1000logos.net/wp-content/uploads/2021/12/iPhone-logo.png',
          description: 'iphone',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          image: 'https://1000logos.net/wp-content/uploads/2021/12/iPhone-logo.png',
          description: 'desktop',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 3,
          image: 'https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png',
          description: 'desktop',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        },        
        {
          id: 4,
          image: 'https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png',
          description: 'watch',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 4,
      image: 'https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png',
      inner_image: [
        {
          id: 1,
          image: 'https://1000logos.net/wp-content/uploads/2021/12/iPhone-logo.png',
          description: 'iphone',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          image: 'https://1000logos.net/wp-content/uploads/2021/12/iPhone-logo.png',
          description: 'desktop',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 3,
          image: 'https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png',
          description: 'desktop',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        },        
        {
          id: 4,
          image: 'https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png',
          description: 'watch',
          inner_info: [
            {
              id:1,
              text: "iPhone_1",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:2,
              text: "iPhone_2",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            },
            {
              id:3,
              text: "iPhone_3",
              phone_inner: [
                {
                  id:1,
                  phone_type: "iPhone 12",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                },
                {
                  id:2,
                  phone_type: "iPhone 10",
                  country_price: [
                    {
                      id:1,
                      text:"PY - $ 500"
                    },
                    {
                      id:2,
                      text:"RU - $ 500"
                    },
                    {
                      id:3,
                      text:"CN - $ 500"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
res.json(imageData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});