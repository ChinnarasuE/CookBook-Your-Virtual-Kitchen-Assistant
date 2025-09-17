import React from 'react'
import { IoFastFoodOutline, IoMailOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import '../styles/NewsLetter.css'

const NewsLetter = () => {

  const [subscribe, setSubscribe] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleSubscribe = () => {
    setEmail('');
    setSubscribe(true);
    setTimeout(() => {
      setSubscribe(false);
    }, 5000);
  }

  return (
    <div className='newsletter-container'>

      <div className="newsletter-body">
        <div className="newsletter-text">
            <IoFastFoodOutline className='food-icon' />
            <span>
              <h4> "Join Now,Subscribe and Get Delicious Recipes from Renowned Chef,Chinna..."</h4>
              <p>We're serving up the best recipes, cooking hacks, and foodie secrets. Join our newsletter to get a weekly dose of deliciousness delivered right to you.</p>
            </span>
        </div>
        <div className="newsletter-input-body">
            <div className="newsletter-input">
              <span>
                  <IoMailOutline className='mail-icon' />
                  <input type="text" placeholder='Your email address' onChange={(e)=> setEmail(e.target.value)} value={email} />
              </span>
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
        {subscribe && 
            <p>Thanks for subscribing!!</p>
        }
            <p>
                <FaRegCheckCircle className='tick-icon' />
                We value your time. Subscribe to receive hand-picked recipes and expert advice, delivered weekly. No spam, just great food.
            </p>
        </div>
      </div>

    </div>
  )
}

export default NewsLetter