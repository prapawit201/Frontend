import React from 'react';
import './App.css';
const Title = (props) => { //! a.k.a dump component
  return (
    <h1>Product List {props.name}</h1>
  )
}

const ProductCard = (props) => {
  return (
    <div class= "product-card">
      {props.item.name}
      {props.item.price}
    </div>
  )
}

//! a.k.a smart component
class ProductList extends React.Component {  //!copy ความสามารถมาจาก react เลยต้อง extends

  state = { //*สร้าง State
    products: [
      {
        name: 'Oreo',
        description: 'Biscuit. 112g',
        price: 270.00
      },
      {
        name: '3D Mask ผู้ใหญ่',
        description: '3D Mask ผู้ใหญ่ 14 ชิ้น',
        price: 129.00
      },
      {
        name: 'กะเพรา',
        description: 'กะเพรา 4 ต้น',
        price: 10.50
      },
      {
        name: 'Bar-B-Q-Plaza E-voucher',
        description: 'e-voucher ลดราคา 100 บาท',
        price: 85.00
      }
    ],
    user: {
      name: 'Bas'
    }
  }
  render() { //*ฟังชั่น
    return (

      <div>   <Title name="Babe :)" />
              <Title name ={10} /> <hr/>
              <Title name ="New Product"/>
              <ProductCard item = {this.state.products[0]}/>
        <div>
          {this.state.products.map(
            (product) => (
              <ProductCard item = {product} />
              // <div>
              //   {product.name},
              //     {product.price},
              //     {product.description}
              // </div>
            )
          )}
        </div>
        <br></br>
       
          <table border="1" class="table table-striped">
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>description</td>
            </tr>
            {this.state.products.map(
              (product) => (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                </tr>
              )
            )}
          </table>
        
      </div>
    )
  }
}

export default ProductList //!ต้องมีการ export ออกไปใช้ทุกครั้ง
