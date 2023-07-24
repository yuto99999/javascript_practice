// 定数animalを定義してください
const animal = {
    name: 'レオ',
    age: 3,
    greet : () => {
      console.log("こんにちは");
    }
  };
  
  // animalのnameプロパティの値を出力してください
  console.log(animal.name);
  
  // animalのgreetプロパティの関数を実行してください
  animal.greet();

//------------------------------------------------------------------------------------------------------//

// Animalクラスを定義してください
class Animal {
  
}

//------------------------------------------------------------------------------------------------------//

class Animal {
}

// Animalクラスのインスタンスを定数animalに代入してください
const animal1 = new Animal();

// 定数animalの値を出力してください
console.log(animal1);

//------------------------------------------------------------------------------------------------------//

class Animal {
    // コンストラクタを追加してください
    constructor () {
      console.log('インスタンスを生成しました');
    }
    
  }
  
  const animal2 = new Animal();

//------------------------------------------------------------------------------------------------------//

class Animal {
    constructor() {
      // nameの値に文字列「レオ」を代入してください
      this.name = 'レオ';
      
      // ageの値に数値の「3」を代入してください
      this.age = 3;
    }
  }
  
  const animal3 = new Animal();
  
  // 「名前: 〇〇」となるように出力してください
  console.log(`名前：${animal3.name}`);
  
  // 「年齢: 〇〇」となるように出力してください
  console.log(`年齢：${animal3.age}`);

//------------------------------------------------------------------------------------------------------//

class Animal {
    // 引数に「name」と「age」を追加してください
    constructor(name, age) {
      // 「"レオ"」の代わりに引数nameの値を代入してください
      this.name = name;
      
      // 「3」の代わりに引数ageの値を代入してください
      this.age = age;
    }
  }
  
  // 引数に「"モカ"」と「8」を渡してください
  const animal4 = new Animal('モカ', 8);
  
  console.log(`名前: ${animal4.name}`);
  console.log(`年齢: ${animal4.age}`);

//------------------------------------------------------------------------------------------------------//

class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    // greetメソッドを追加してください
    greet() {
      console.log('こんにちは');
    }
    
  }
  
  const animal5= new Animal("レオ", 3);
  
  console.log(`名前: ${animal5.name}`);
  console.log(`年齢: ${animal5.age}`);
  
  // animalに対してgreetメソッドを呼び出してください
  animal5.greet();

//------------------------------------------------------------------------------------------------------//

class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("こんにちは");
    }
    
    // infoメソッドを追加してください
    info() {
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);
    }
    
  }
  
  const animal6 = new Animal("レオ", 3);
  animal6.greet();
  
  // animalに対してinfoメソッドを呼び出してください
  animal6.info();

//------------------------------------------------------------------------------------------------------//

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    // greetメソッドを呼び出してください
    this.greet();
    
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

const animal7 = new Animal("レオ", 3);

animal7.info();

//------------------------------------------------------------------------------------------------------//

class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("こんにちは");
    }
    
    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);
    }
  }
  
  // Animalクラスを継承してDogクラスを定義してください
  class Dog extends Animal {
    
  }
  
  const animal8 = new Animal("レオ", 3);
  animal8.info();

//------------------------------------------------------------------------------------------------------//

class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("こんにちは");
    }
    
    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);
    }
  }
  
  class Dog extends Animal {
  }
  
  // 定数dogにDogクラスのインスタンスを代入してください
  const dog = new Dog('レオ', 4);
  
  // dogに対してinfoメソッドを呼び出してください
  dog.info();

//------------------------------------------------------------------------------------------------------//

class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("こんにちは");
    }
    
    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);
    }
  }
  
  class Dog extends Animal {
    // getHumanAgeメソッドを追加してください
    getHumanAge() {
      return this.age * 7;
    }
  
  }
  
  const dog1 = new Dog("レオ", 4);
  dog1.info();
  
  // 定数humanAgeを定義し、定数dogに対してgetHumanAgeメソッドを呼び出した値を代入してください
  const humanAge = dog1.getHumanAge();
  
  // 「人間年齢で〇〇歳です」と出力してください
  console.log(`人間年齢で${humanAge}歳です`);

//------------------------------------------------------------------------------------------------------//

class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("こんにちは");
    }
    
    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);
    }
  }
  
  class Dog extends Animal {
    // infoメソッドを追加してください
    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);
      
      const humanAge = this.getHumanAge();
      console.log(`人間年齢で${humanAge}歳です`);
    }
  
    getHumanAge() {
      return this.age * 7;
    }
  }
  
  const dog2 = new Dog("レオ", 4);
  dog2.info();

//------------------------------------------------------------------------------------------------------//

class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("こんにちは");
    }
    
    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);
    }
  }
  
  class Dog extends Animal {
    // constructorを追加してください
    constructor(name, age, breed) {
      super(name, age);
      this.breed = breed;
    }
    
    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      // 「犬種は〇〇です」と出力してください
      console.log(`犬種は${this.breed}です`);
      
      console.log(`${this.age}歳です`);
      const humanAge = this.getHumanAge();
      console.log(`人間年齢で${humanAge}歳です`);
    }
    
    getHumanAge() {
      return this.age * 7;
    }
  }
  
  // 3つ目の引数に「"チワワ"」を渡してください
  const dog3 = new Dog("レオ", 4, 'チワワ');
  dog3.info();
