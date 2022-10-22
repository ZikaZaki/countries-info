import continents from '../../continents/data';

// Actions
const GET_CONTINENTS = 'countries-info/continents/getContinents';

const continentReducer = (state = continents, action) => {
  switch (action.type) {
    case GET_CONTINENTS:
      return state;
    default:
      return state;
  }
};

export const getContinents = (filter) => ({
  type: GET_CONTINENTS,
  payload: continents.filter((continent) => {
    console.log(filter);
    if (filter === 'All') {
      return continents;
    }
    console.log('from filter', continent.name);
    return continent.name === filter;
  //   if(continent.name === filter) {
  //     return continent;
  //   }
  //   if(filter === 'All') {
  //     return continents;
  //   }
  //   return false;
  }),
});

export default continentReducer;
