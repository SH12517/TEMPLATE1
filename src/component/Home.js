import React from 'react'
import Nav from './Nav'

function Home({Toggle}) {
  return (
    <div className='px-1'>
        <Nav Toggle={Toggle}/>
        <div className='container-fluid mt-0'>
        <div className='row g-3 my-2'>
<div className='col-md-12'>
<div className='row'>
<div className='col-md-2 bg-white rounded m-3' style={{width:'242px'}}>
        <div className='m-3 d-flex justify-between align-items-center'>
          <div className=''>
            <h3 className='fs-2 p-2'>
                230
            </h3>
            <div className='d-flex justify-between align-items-center'>
            <p className='fs-5 p-2 mt-2'>Products</p>
          <i className='bi bi-cart-plus px-5 fs-1 '></i>
          </div>
          </div>
          
        </div>

        </div>
        <div className='col-md-2 bg-white  rounded m-3' style={{width:'242px'}}>
        <div className='m-3 d-flex justify-between align-items-center'>
          <div className=''>
            <h3 className='fs-2 p-2'>
                2450
            </h3>
            <div className='d-flex justify-between  align-items-center'>
            <p className='fs-5 p-2 mt-2'>Sales</p>
          <i className='bi bi-currency-dollar px-5 fs-1 '></i>
          </div>
          </div>
          
        </div>

        </div>
        <div className='col-md-2p-1  bg-white rounded m-3' style={{width:'242px'}}>
        <div className='m-2 d-flex justify-between align-items-center'>
          <div className=''>
            <h3 className='fs-2 p-2'>
                2250
            </h3>
            <div className='d-flex justify-between align-items-center'>
            <p className='fs-5 p-2 mt-2'>Delivery</p>
          <i className='bi bi-truck px-5 fs-1 '> </i>
          </div>
          </div>
          
        </div>

        </div>
        <div className='col-md-2 bg-white rounded m-3' style={{width:'242px'}}>
        <div className='m-2 d-flex justify-between align-items-center'>
          <div className=''>
            <h3 className='fs-2 p-2'>
                20%
            </h3>
            <div className='d-flex justify-between align-items-center'>
            <p className='fs-5 p-2 mt-2'>Increase</p>
          <i className='bi bi-graph-up-arrow px-5 fs-1 '></i>
          </div>
          </div>
          
        </div>

        </div>
        </div>
        </div>
       </div>
       </div>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td> Dragondon</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
       </div>
       
  )
}

export default Home