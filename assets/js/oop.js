class Tiger {
  constructor() {
    this.noise = "roar";
  }
  sound() {
    console.log(this.noise);
  }
}
const simba = new Tiger();
simba.sound(); //=> "roar"

const tiger = function () {
  const noise = "roar";
  return {
    sound: function () {
      console.log(noise);
    },
  };
};
const tigger = tiger();
tigger.sound(); //=> "roar"
