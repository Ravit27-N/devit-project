<template >
    <div>
      <div class="poster flex px-10 py-10">
        <div class="subl">
          <h1 class="subtitle">CV Digital Template</h1>
          <h2 class="text mt-3">With iEBuy's cv template you can easily create and customize your cv template within just a minute.</h2>
        </div>
        <div class="">
          <img src="/images/cv2.png" alt="" class="w-54 h-60 ima">
          
        </div>
      </div>
      <div class="text2 mt-10 mb-5"> 
        <h1>Find Your Desired CV Digital Template</h1>
      </div>
      <div class="flex justify-center">
        <div class="mb-3">
          <!-- <div class="input-group relative flex items-stretch w-full mb-4">
            <input type="search" class="form-control xl:w-96 relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none" placeholder="Search Name Card Template" aria-label="Search" aria-describedby="button-addon2">
            <button id="button-addon2" class="btn px-6 py-2.5 inline-block bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out items-center" type="button">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </div> -->
        </div>
      </div>
      <div class="flex sb">    
        <p>RECOMMENDED FOR YOU</p>
        <NuxtLink to="/documents/cvform"><button type="button" class="flex mb-2 px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">Create</button></NuxtLink>
      </div>
      <div class="flex justify-center p-5 border-2 mb-10 border-yellow-500 rounded">
        <div class="flex">
          <div class="card rounded-lg shadow-lg bg-white p-1">
            <div class="p-3">
              <img class="w-60 h-70" src="/images/cv1.png" alt=""/>
              <!-- <img class="round p-1" src="/images/image2.png" alt=""/> -->
            </div>
          </div>
          <div class="card rounded-lg shadow-lg bg-white p-1 mx-3">
            <div class="p-3">
              <img class="w-60 h-70" src="/images/cv2.png" alt=""/>
              
            </div>
          </div>
          <div class="card rounded-lg shadow-lg bg-white p-1">
            <div class="p-3">
              <img class="w-60 h-70" src="/images/cv3.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </template>
  <style>
    .poster{
      width: 100%;
      height: 250px;
      background: rgb(184,136,32);
      background: linear-gradient(131.76deg, #FFBC27 8.27%, #FF3030 117.47%);
      border-radius: 10px;
    }
    .subl{
      width: 50%;
      height: 100%;
    }
    .subtitle{
      font-weight: bold;
      font-size: 40px;
      color: #fff;
    }
    .text2{
      /* font-weight: bold; */
      font-size: 30px;
      color: #FE8A7F;
      text-align: center;
    }
    .text{
      font-size: 20px;
      color: #fff;
    } 
    .im{
      width: 150px;
      margin-left: 15rem;
      /* transform: rotate(-15deg); */
      /* z-index: 2; */
  
    }
    .imb{
      width: 200px;
      margin-left: 9.5rem;
      /* transform: rotate(-15deg); */
      /* z-index: 2; */
  
    }
    .card{
      width: 250px;
    }
    .round{
      box-shadow: 4px 4px 4px lightyellow;
      height: 130px;
      width: 217px;
    }
    .ima{
      position: relative;
      top: -35px;
      width: 160px;
      /* left: 10px; */
      /* z-index: 1; */
      margin-left: 15rem;
    }
    p{
      font-weight: bold;
      font-size: 20px;
      color: #FFBC27;
      text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
    }
    .sb{
      justify-content: space-between;
    }
  
  </style>