import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (195)</div>
      </div>
      <div className="descriptionbox-description">
      <p>The e-commerce site boasts a user-friendly interface that enhances the shopping experience, making navigation effortless for customers. With a diverse range of products spanning electronics, fashion, and home goods, it caters to every shopper's needs. Secure payment options, including credit cards and digital wallets, ensure safe transactions. Personalized recommendations driven by advanced algorithms help users discover products tailored to their preferences. Customer reviews and ratings offer valuable insights, guiding informed purchasing decisions. The site is fully optimized for mobile devices, allowing seamless shopping on smartphones and tablets. Quick delivery options and a straightforward return policy provide added convenience and peace of mind. Additionally, loyalty programs reward repeat customers with discounts and special offers. To top it off, 24/7 customer support is readily available to address any inquiries or issues, ensuring a smooth shopping experience.</p>
      <p>The e-commerce site also features robust search and filter functionalities, enabling customers to quickly find exactly what they’re looking for. Seasonal sales and promotional events provide exciting opportunities for shoppers to snag great deals. An easy-to-use wishlist feature allows users to save items for future purchases, enhancing their shopping experience. Additionally, the platform emphasizes sustainability by offering eco-friendly products and transparent sourcing information. Regular updates keep the inventory fresh, ensuring that customers always have access to the latest trends and must-have items.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
