import React from 'react';

class ProductList extends React.Component {  //!copy ความสามารถมาจาก react เลยต้อง extends
  state = { //*สร้าง State
    products: [],
    user: {
      name: 'Bas'
    }
  }
  render() { //*ฟังชั่น
    return (
      <div><h2>Product List</h2>
           <h3>{this.state.user.name}</h3>
      </div>
    )
  }
}

export default ProductList //!ต้องมีการ export ออกไปใช้ทุกครั้ง
