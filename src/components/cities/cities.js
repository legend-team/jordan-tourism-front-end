import React from 'react';
import './cities.scss'




function Cities(props) {
  const handleSubmit = async e => {
    e.preventDefault();
    const raw = await fetch("http://localhost:3300/cities");
    console.log('iiiiiiiiii', raw);

    const data = await raw.json();
    console.log('iuuuuuuuuuuuu', data);

    const result = data.map(city => {
      return new City(city);
    });
    console.log('oooooo', result);

    props.handler(result);
  };
  return (
    <>

      <img className="citiesImg" src='https://d3qvqlc701gzhm.cloudfront.net/full/a1609720c3bbae592b1303dcdde74d94fd4bcd4bae1e3372428d11bc110b8a87.jpg' />
      <div className="centered">JORDAN CITIES</div>
      <div className='container'>

      <div className="about">PEOPLE OF JORDAN</div>
      <div className="hometext">
        Jordan can be regarded as a typically Arab country for its people are very warm, friendly and hospitable. Jordanians are typically happy to forgive foreigners who break the rules of etiquette. However, visitors seen to be making an effort to observe local customs will undoubtedly win favour.

        Joining local people for a cup of tea or coffee can be a wonderful way to learn more about local culture. If you are invited yet are unable to attend, then it is perfectly acceptable to decline. Place your right hand over your heart and politely make your excuses.
    </div>
      </div>
      <form onClick={handleSubmit}>
        <button>{props.prompt}</button>
      </form>
    </>
  );
}
function City(data) {
  this.name = data.name;
  this.url = data.image_url;
  this.id = data._id;
  this.desc = data.description
}




// const citiesAPI = 'http://localhost:3300/cities';

// class Cities extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cities: [],
//       item: {},
//     }
//   }

//   callAPI = (url, method = 'get', body, handler, errorHandler) => {

//     return fetch(url, {
//       method: method,
//       mode: 'cors',
//       cache: 'no-cache',
//       headers: { 'Content-Type': 'application/json' },
//       body: body ? JSON.stringify(body) : undefined,
//     })
//       .then(response => {
//         response.json()
//         console.log('ddddddddddd', response)
//       })

//       .then(data => 
//         typeof handler === 'function' ? handler(data) : null)
//       .catch((e) => typeof errorHandler === 'function' ? errorHandler(e) : console.error(e))
//   }

//   addItem = (e) => {
//     e.preventDefault();
//     e.target.reset();

//     const _updateState = newItem => {
//       this.setState({
//         cities: [...this.state.cities, newItem],
//       })

//       this.callAPI(citiesAPI, 'POST', this.state.item, _updateState);

//     }

//   }

//   deleteItem = id => {
//     const _updateState = (results) => {
//       this.setState({
//         cities: this.state.cities.filter(item => item._id !== id)
//       })
//     }
//     this.callAPI(citiesAPI, 'DELETE', undefined, _updateState);

//   }

//   saveItem = updatedItem => {

//     const _updateState = (newItem) =>
//       this.setState({
//         cities: this.state.cities.map(item =>
//           item._id === newItem._id ? newItem : item,
//         ),
//       });

//     this.callAPI(citiesAPI, 'PUT', updatedItem, _updateState);

//   };

//   getItems = () => {
//     const _updateState = data => {
//       console.log('iiiiiiiiiiiiiii')
//       this.setState({ cities: data })

//     }
//     this.callAPI(citiesAPI, 'GET', undefined, _updateState);
//   }

//   handleInputChange = e => {
//     this.setState({ item: { ...this.state.item, [e.target.name]: e.target.value } })
//   }

//   componentDidMount = () => {
//     this.getItems();
//   }

//   render() {
//     return (
//       <>


//         <div>
//           <ul>
//             {this.state.cities.map(item => (
//               <li
//                 id="model"
//                 key={item._id}>
//                 <span>
//                   {item.name}
//                 </span>

//                 <button onClick={() => this.deleteItem(item._id)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>

//         </div>



//       </>
//     )
//   }

// }
export default Cities;