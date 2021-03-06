import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Link from "next/link";
import {addProduct} from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = ({pizza}) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
   const [extras, setExtras] = useState([]);
   const [quantity,setQuantity]=useState(1);
   const dispatch=useDispatch();
const changePrice=(number)=>{
  setPrice(price+number);
};
const handleSize=(sizeIndex)=>{
 const difference=pizza.prices[sizeIndex]-pizza.prices[size];
 setSize(sizeIndex);
 changePrice(difference);
}
const handleChange=(e,options)=>{
  const checked=e.target.checked;
  if(checked){
     changePrice(options.price);
     setExtras((prev)=>[...prev,options]);
  }else{
    changePrice(-options.price) 
    setExtras(extras.filter((extra)=>extra._id!==options._id));
  }
};
const handleClick=()=>{
   dispatch(addProduct({...pizza,extras,price,quantity}));
   toast.success("Pizza Added to cart");
}
  return (
    <div className={styles.container}>
     <ToastContainer position="top-center" />
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
         <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
            <input onChange={(e)=>setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button} onClick={handleClick}>Add to Cart</button>
            <Link href="/Cart" passHref>
            <button className={styles.button} >Go to Cart</button>
          </Link>
        </div>
        
        
      </div>
    </div>
  );
};
export const getStaticPaths=async()=>{
  const res = await axios.get('https://shobhi-pizza.vercel.app/api/products');
  const data=res.data;
  const paths=data.map((pizza)=>{
    return {
      params:{id:pizza._id.toString()}
    }
  });
  return {
    paths,
    fallback:false
  };
};

export const getStaticProps=async(context)=>{
  const id=context.params.id;
  const res=await fetch(`https://shobhi-pizza.vercel.app/api/products/${id}`);
  const data=await res.json();
  return{
    props:{
      pizza:data,
    }
  }
}

export default Product;
