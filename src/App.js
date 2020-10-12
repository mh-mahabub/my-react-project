import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['Mahbub','manna','shakib khan','jasim','shuvo']
  const products =[
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$10.99'},
    {name:'App Reader', price:'$6.99'}
]


  return (
    <div className="App">
      <header className="App-header">
        <h1>I am react person</h1>
        <Counter></Counter>
        <Users></Users>



        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        {
          products.map(product => <Product product ={product}>{product.name}</Product>)
        }
        

        <ul>
         {
           nayoks.map(nayok => <li>{nayok}</li>)
         }
       </ul>
        <Person name= {nayoks[0]} nayika="single"></Person>
        <Person name="manna"  nayika="moushumi"></Person>
        <Person name="shakib khan" nayika="shabnur"></Person>
       
      </header>
    </div>
  );
}

//state post 

function Counter (){
  const [count, setCount] = useState (0);
 const handleIncrease = ()=> setCount (count+1);
  return(
    <div>
     <h1>Count: {count} </h1>
     <button onClick={ ()=>setCount(count-1)}>Decrease</button>
     <button onClick={ ()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

/// data loade
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data =>setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
    {
     users.map(user=><li>{user.email}</li>)
    }
      </ul>
    </div>
  )
}













// Product post

function Product (props){
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name,price} = props.product;
  return(
    <div style={productStyle}> 

      <h3>{name} </h3>
      <h5>{price} </h5>
      <button>Buy now</button>
    </div>
  )
}




///post 2
function Person (props){
const personStyle={
    border:'2px solid yellow',
    margin:'5px',
    width:'600px'    
}
  return(
    <div style={personStyle}>

   <h2>Name: {props.name}</h2>
    <h4>Nayika: {props.nayika}</h4>

    </div>
  )
}






export default App;
