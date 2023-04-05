class Uber {
    constructor(distance, time) {
      this.distance = distance;
      this.time = time;
    }
  
    calculatePrice() {
      const baseFare = 25;
      const ratePerkm = 15;
      const ratePerMinute = 5;

      const distanceFare = this.distance * ratePerkm;
      const timeFare = this.time * ratePerMinute;
      const totalFare = baseFare + distanceFare + timeFare;
      
      return `${totalFare.toFixed(2)}`;

    }
  }
  const distance = 5.2;

  const time = 15; 
  const myUber = new Uber(distance, time);

  console.log(myUber.calculatePrice());