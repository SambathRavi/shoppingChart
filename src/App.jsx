import { useState } from "react"


function App() {


  const [lists, setLists] = useState(
    [
      {
        "product": {
          "name": "Wireless Bluetooth Earbuds",
          "image": "https://images.unsplash.com/photo-1600654777854-5ad8b8edfa49",
          "price": 39.99,
          "isSoldout": false,
          "description": "High-quality wireless earbuds with long battery life and noise-canceling technology."
        }
      },
      {
        "product": {
          "name": "Smartphone Case",
          "image": "https://images.unsplash.com/photo-1519974719765-e6559eac2575",
          "price": 12.99,
          "isSoldout": true,
          "description": "Protective case designed for smartphones, made with durable materials."
        }
      },
      {
        "product": {
          "name": "Fitness Tracker",
          "image": "https://images.unsplash.com/photo-1532498921866-2e4167a1dcca",
          "price": 49.99,
          "isSoldout": false,
          "description": "Track your daily activities and workouts with this advanced fitness tracker."
        }
      },
      {
        "product": {
          "name": "Stainless Steel Water Bottle",
          "image": "https://images.unsplash.com/photo-1536566482680-06ff7c16c878",
          "price": 15.99,
          "isSoldout": false,
          "description": "Eco-friendly and durable water bottle, perfect for outdoor activities and daily use."
        }
      },
      {
        "product": {
          "name": "Portable Bluetooth Speaker",
          "image": "https://images.unsplash.com/photo-1520916431463-e28637d8d739",
          "price": 29.99,
          "isSoldout": false,
          "description": "Compact and powerful Bluetooth speaker, ideal for parties and outdoor adventures."
        }
      },
      {
        "product": {
          "name": "Laptop Backpack",
          "image": "https://images.unsplash.com/photo-1535965471445-8feaa8d2d946",
          "price": 34.99,
          "isSoldout": false,
          "description": "Spacious and stylish backpack designed to carry laptops and other essentials."
        }
      },
      {
        "product": {
          "name": "Coffee Maker",
          "image": "https://images.unsplash.com/photo-1509783236416-9c1b2448cd1b",
          "price": 49.99,
          "isSoldout": true,
          "description": "Automatic coffee maker with programmable settings for brewing your favorite coffee."
        }
      },
      {
        "product": {
          "name": "Wireless Mouse",
          "image": "https://images.unsplash.com/photo-1554245654-2d314fb95a0e",
          "price": 19.99,
          "isSoldout": false,
          "description": "Ergonomic wireless mouse with precise tracking and long battery life."
        }
      },
      {
        "product": {
          "name": "Bluetooth Headphones",
          "image": "https://images.unsplash.com/photo-1564529308579-4b6e864e5506",
          "price": 59.99,
          "isSoldout": false,
          "description": "High-fidelity Bluetooth headphones with immersive sound quality and comfortable design."
        }
      },
      {
        "product": {
          "name": "Travel Mug",
          "image": "https://images.unsplash.com/photo-1507206706790-08fef227e169",
          "price": 9.99,
          "isSoldout": false,
          "description": "Insulated travel mug to keep your beverages hot or cold while on the go."
        }
      }
    ])
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ width: "100vw", height: '100dvh' }}>
        <div className="container-fluid h-100">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
              <a class="navbar-brand" href="#">Start Bootstrap</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Shop
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>

                <button class="btn btn-outline-success" type="submit">{`${count} Cart`}</button>
              </div>
            </div>
          </nav>
          <div className="d-flex flex-column justify-content-center align-items-center w-100 h-25 text-dark-emphasis bg-dark-subtle">
            <h1>Shop in style</h1>
            <div className="lead">with this shop homepage template</div>
            <div className="container">
            </div>
          </div>
          <div className="container">
            <div className="row">
              {
                lists.map(list => {
                  return (
                    <div className="col-6 col-md-4 col-lg-3 p-3">
                      <div class="card" >
                        <img src={list.product.image} class="card-img-top" alt="Product" />
                        <div class="card-body">
                          <h5 class="card-title">{list.product.name}</h5>
                          <small className="lead" >{list.product.price}</small>
                          <p class="card-text">{list.product.description}</p>
                          <button class="btn btn-primary" onClick={() => setCount(prev => prev + 1)} >Add cart</button>
                        </div>
                      </div>
                    </div>
                  )
                }
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
