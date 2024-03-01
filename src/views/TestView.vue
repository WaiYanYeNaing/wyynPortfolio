<template>
  <div class="container">
    <!-- <button @click="spin()">Click</button> -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Bet</th>
          <th>Amount</th>
          <th>NextTarget</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="v in res"
          :key="v.id"
          :style="`background-color: ${v.color}`"
        >
          <td>{{ v.id }}</td>
          <td>{{ v.bet }}</td>
          <td>{{ v.amount }}</td>
          <td>{{ v.nextTarget }}</td>
          <td>{{ v.color }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 10000,
      bet: 100,
      nextTarget: 10000,
      target: 1,
      res: [],
    };
  },
  mounted() {
    this.spin();
  },
  methods: {
   spin() {
  for (let i = 0; i < 400; i++) { 
    if (this.amount > 1000) { 
      let sR = this.spinResult();

      // Show popup and take user input
      let userBet = prompt("Enter your bet", this.bet);
      if (userBet === null) break; // If user cancels, exit the loop
      this.bet = parseInt(userBet);

      setTimeout(() => {
        if (sR == "red") {
          this.amount += this.bet; 
          this.changeTarget();
        } else {
          this.amount -= this.bet;
          this.bet += 100;
        }

        this.res.unshift({
          id: i + 1,
          color: sR,
          amount: this.amount,
          bet: this.bet,
          nextTarget: this.nextTarget,
        }); 
      }, 2000); // Delay of 2 seconds

    } else {
      alert("You are broke");
      break;
    }
  }
},

    spinResult() {
      // Array of red numbers in a standard roulette
      const redNumbers = [
        1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
      ];

      // Generating a random number between 0 and 36 (inclusive)
      const randomNumber = Math.floor(Math.random() * 37);

      if (randomNumber === 0) {
        return "green";
      } else if (redNumbers.includes(randomNumber)) {
        return "red";
      } else {
        return "black";
      }
    }, 
    changeTarget() {
      if (this.amount >= this.nextTarget) {
        if (this.target == 1) {
          this.nextTarget += 400;
          this.target = 2;
        } else if (this.target == 2) {
          this.nextTarget += 300;
          this.target = 3;
        } else if (this.target == 3) {
          this.nextTarget += 300;
          this.target = 1;
        }
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
table {
  width: 50%;
  margin: auto;
  text-align: center;
}
thead {
  /* background-color: #f2f2f2; */
}
tbody {
  /* background-color: #ffffff; */
}
</style>
