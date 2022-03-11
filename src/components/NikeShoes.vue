<template>
  <div class="hello" style="text-align: left">
    <h1>{{ title }}</h1>
    <table>
      <thead>
      <tr>
        <th style="width: 250px">Model</th>
        <th style="width: 250px">Price</th>
        <th style="width: 250px">State</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="eachShoeData in shoeData" :key="eachShoeData.shoeId">
        <td>{{eachShoeData.model}}</td>
        <td>{{eachShoeData.shoePrice}}</td>
        <td>{{getShoeState(eachShoeData.shoeId)}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
const shoeDatabase = [
  {
    shoeId: '1',
    model: 'Nike Air Max 95 SE',
    minPrice: 120,
    maxPrice: 150,
  },
  {
    shoeId: '2',
    model: 'Nike Air Max 97 SE',
    minPrice: 5,
    maxPrice: 150,
  },
  {
    shoeId: '3',
    model: 'Nike Air Max Pre-Day',
    minPrice: 120,
    maxPrice: 160,
  },
  {
    shoeId: '4',
    model: 'Nike Air Max 270',
    minPrice: 100,
    maxPrice: 130,
  },
  {
    shoeId: '5',
    model: 'Nike Renew Ride 3',
    minPrice: 180,
    maxPrice: 200,
  },
  {
    shoeId: '6',
    model: 'Nike Air Max 90',
    minPrice: 120,
    maxPrice: 150,
  },
];
export default {
  name: 'NikeShoes',
  props: {
    title: String
  },
  data: () => {
    return {
      shoeData: {}
    }
  },
  methods: {
    getShoeState(shoeId) {
      const shoeData = this.shoeData[shoeId];
      if (shoeData.shoePrice < shoeData.minPrice) {
        return "Best time to buy!";
      } else if (shoeData.shoePrice > shoeData.maxPrice) {
        return "Can wait for discount";
      } else {
        return "Moderate state, can buy now!";
      }
    }
  },
  created() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    const fetchData = () => shoeDatabase.map(eachShoeDatabase => {
      fetch(`api/shoe-price/${eachShoeDatabase.shoeId}`, requestOptions)
          .then(response => {
            return response.json()
          })
          .then((res) => {
            let data = res
            if (typeof res === "string") {
              data = JSON.parse(res)
            }
            this.shoeData[eachShoeDatabase.shoeId] = {
              ...eachShoeDatabase,
              shoePrice: data.shoePrice
            }
          });
    });
    fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
