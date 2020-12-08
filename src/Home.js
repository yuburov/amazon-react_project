import React from 'react';
import './Home.css'
import Product from "./Product";


function Home(props) {
  return (
      <div className='home'>
        <img className='home__image'
             src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
             alt=""
        />
        <div className="home__row">
          <Product
              id='343445'
              title='ASUS TUF Gamimg A15 Gaming Laptop'
              price={870}
              rating={5}
              image='https://m.media-amazon.com/images/I/81gK08T6tYL._AC_UY218_.jpg'

          />
          <Product
              id='456768'
              title='Logitech C920x Pro HD Webcam'
              price={104}
              rating={5}
              image='https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UY218_.jpg'

          />
        </div>
        <div className="home__row">
          <Product
              id='565679'
              title='Remington D3190 Damage Protection Hair Dryer with Ceramic + Ionic + Tourmaline Technology, Purple'
              price={14}
              rating={4}
              image='https://m.media-amazon.com/images/I/81wmOCTcTwL._AC_UL320_.jpg'

          />
          <Product
              id='566478'
              title='TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof TWS Stereo Earphones in-Ear Built-in Mic Headset Premium Deep Bass for Sport Black'
              price={39}
              rating={5}
              image='https://m.media-amazon.com/images/I/71U9Vr4wWGL._AC_UY218_.jpg'

          />
          <Product
              id='5657911'
              title='Old Spice High Endurance Long Lasting Deodorant, Fresh, 3 Ounce'
              price={8}
              rating={5}
              image='https://m.media-amazon.com/images/I/61fXW3g5niL._AC_UL320_.jpg'

          />
        </div>
        <div className="home__row">
          <Product
              id='234346'
              title='Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)'
              price={278}
              rating={4}
              image='https://m.media-amazon.com/images/I/81Wt3h7-V2L._AC_UY218_.jpg'

          />
        </div>
      </div>
  );
}

export default Home;
