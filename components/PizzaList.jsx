import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
  return (

    <div className={styles.container}>
      <div className={styles.desc}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
       What’s better than having a crispy melty pizza, you ask?
Having that crispy and melty pizza in the comfort of your own home with the ones you love, we say.
With ShobhiPizza it is always “Rishton ka time”. Whether it's a treat for your promotion, a kid topping his class or winning the heart of your wife who is too tired to cook after a long day at work! A cheesy slice of the best pizza is all one needs to put things into perspective and start any celebration. Plus, you do not even need to rush to the restaurant to have one now. A call, a few clicks on our website or a few touches on the mobile screen is all you have to do to have that tempting, light-on-the-pocket pizza at your doorstep.

      </div>
      <section id="menu">
        <div className={styles.wrapper}>
         {pizzaList.map((pizza)=>(
           <PizzaCard key={pizza._id} pizza={pizza}/>
         ))}
          
      </div>
      </section>
      
    </div>
  );
};

export default PizzaList;