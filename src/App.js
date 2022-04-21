import React from "react";
import PropTypes from "prop-types";

function Car({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );  
}
  
 
 const carILike = [
   {
     id: 1,
     name: 'Lamborghini',
     image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F990E55355D0605E314&f=1&nofb=1',
     rating: 5 
   },
   {
     id: 2,
     name: 'Genesis',
     image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.joseilbo.com%2Fgisa_img_origin%2F15081212481508121248_kds7_origin.jpg&f=1&nofb=1',
     rating: 4.5
   },
   {
     id: 3,
     name: 'Ferrari',
     image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.carandholic.com%2Fdata%2Feditor%2F2009%2Fc8713e0bc8165132e4f9ddcf6876cf27_1600352238_9321.jpg&f=1&nofb=1',
     rating: 4.4
   },
   {
     id: 4,
     name: 'Bmw',
     image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.carshowroom.com.au%2Fmedia%2F21506844%2F2019-bmw-330e-sport-line-6.jpg&f=1&nofb=1',
     rating: 4.8
   },
   {
     id: 5,
     name: 'Benz',
     image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpostfile.aving.net%2F2017%2F03%2Fe_c_01.jpg&f=1&nofb=1',
     rating: 4.6
   },
   {
     id: 6,
     name: 'Audi',
     image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.cdn.encarmagazine.com%2F2019%2F08%2Fa5cab-3.jpg&f=1&nofb=1',
     rating: 4.9
   },
   {
     id: 7,
     name: 'Porsche',
     image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.jjang0u.com%2Fdata3%2Fchalkadak%2F118%2F201902%2F18%2F155048759156313.jpeg&f=1&nofb=1',
     raitng: 5
   },
   {
     id: 8,
     name: 'Maserati',
     image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99B9693359BF3CDC06&f=1&nofb=1',
     rating: 4.3
   },
 ];

function App() {
  return (
    <div>
      {carILike.map(dish => (
        <Car key={dish.id} name={dish.name} picture={dish.image} raintg={dish.rating} />
      ))}
    </div>
  );
}

Car.PropTypes = {
  name: PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating: PropTypes.number
};
export default App;
