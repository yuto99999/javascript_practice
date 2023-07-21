// 変数numberを定義してください
let number = 0;

// 変数numberに1を加えて、その後に変数numberの値を出力してください
number += 1;
console.log(number);

// 上述の2行のコードを4回、貼り付けてください
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);

//------------------------------------------------------------------------------------------------------//

// 変数numberを定義してください
let number1 = 1;

// while文を作成してください
while (number1 <= 100) {
  console.log(number1);
  number1 += 1;
}

//------------------------------------------------------------------------------------------------------//

// for文を用いて、1から100までの数字を出力してください
//()の中は、①変数の定義 ②条件式 ③変数の更新 の順で書く

for (let number = 1; number <= 100; number ++) {
    console.log(number);
}

//------------------------------------------------------------------------------------------------------//

// for文を完成させてください
for (let number = 1; number <= 100; number ++) {
    // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
    if (number % 3 == 0) {
      console.log('3の倍数です');
    } else {
      console.log(number);
    }
}

//------------------------------------------------------------------------------------------------------//

// 定数animalsに、指定された配列を代入してください
const animals = ['dog', 'cat', 'sheep'];

// 定数animalsを出力して下さい
console.log(animals);

//------------------------------------------------------------------------------------------------------//

const animals1 = ["dog", "cat", "sheep"];

// 配列の1つ目の要素を出力してください
console.log(animals1[0]);

// 配列の3つ目の要素を出力してください
console.log(animals1[2]);

//------------------------------------------------------------------------------------------------------//

const animals2 = ["dog", "cat", "sheep"];

// 配列animalsの3つ目の要素を「rabbit」に更新してください
animals2[2] = 'rabbit';

// 配列animalsの3つ目の要素をコンソールに表示して下さい
console.log(animals2[2]);

//------------------------------------------------------------------------------------------------------//

const animals3 = ["dog", "cat", "sheep"];

// for文を用いて、配列の値を順にコンソールに出力してください
for (let i = 0; i < 3; i ++) {
  console.log(animals3[i]);
}

//------------------------------------------------------------------------------------------------------//

const animals4 = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];

// lengthを用いて配列の要素の数を出力してください
console.log(animals4.length);

// lengthを用いて条件式を書き換えてください
for (let i = 0; i < animals.length; i++) {
  console.log(animals4[i]);
}

//------------------------------------------------------------------------------------------------------//

// 定数characterを定義し、指定されたオブジェクトを代入してください
const character = {name:'にんじゃわんこ', age:14};

// characterの値を出力してください
console.log(character);

//------------------------------------------------------------------------------------------------------//

const character1 = {name: "にんじゃわんこ", age: 14};

// characterのnameの値を出力してください
console.log(character1.name);

// characterのageの値を「20」に更新してください
character1.age = 20;

// characterをコンソールに出力してください
console.log(character1);

//------------------------------------------------------------------------------------------------------//

const characters = [
    {name: "にんじゃわんこ", age: 14},
    {name: "ひつじ仙人", age: 1000}
  ];
  
  // charactersの1つ目の要素をコンソールに出力してください
  console.log(characters[0]);
  
  // charactersの2つ目の要素の「name」に対応する値をコンソールに出力してください
  console.log(characters[1].name);

//------------------------------------------------------------------------------------------------------//

const characters1 = [
    {name: "にんじゃわんこ", age: 14},
    {name: "ひつじ仙人", age: 100},
    {name: "ベイビーわんこ", age: 5},
  ];
  
  // for文を完成させてください
  for (let i = 0; i < characters1.length ; i ++) {
    console.log("--------------------");
    
    // 定数characterを定義してください
    const character = characters1[i];
    
    // 「名前は〇〇です」を出力してください
    console.log(`名前は${character.name}です`);
    
    // 「〇〇歳です」を出力してください
    console.log(`${character.age}歳です`);

  }

//------------------------------------------------------------------------------------------------------//

const characters2 = [
    {name: "にんじゃわんこ", age: 14},
    {name: "ひつじ仙人", age: 100},
    {name: "ベイビーわんこ", age: 5},
    {name: "とりずきん"}
  ];
  
  for (let i = 0; i < characters2.length; i++) {
    console.log("--------------------");
    
    const character = characters2[i];
    
    console.log(`名前は${character.name}です`);
    
    // if文を追加してください
    if (character.age == undefined) {
      console.log('年齢は秘密です');
    } else {
      console.log(`${character.age}歳です`);
    }
    
  }

//------------------------------------------------------------------------------------------------------//

const cafe = {
    name: "Progateカフェ",
    businessHours: {
      // businessHoursの値に指定されたオブジェクトを代入してください
      opening : '10:00(AM)',
      closing : '8:00(PM)'
    }
  };
  
  // 「店名:〇〇」を出力してください
  console.log(`店名:${cafe.name}`);
  
  // 「営業時間:〇〇から△△」を出力してください
  console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`)

//------------------------------------------------------------------------------------------------------//

const cafe1 = {
    name: "Progateカフェ",
    businessHours: { 
      opening: "10:00(AM)",
      closing: "8:00(PM)"
    },
    // menusプロパティに配列を代入してください
    menus: ['コーヒー', '紅茶', 'チョコレートケーキ']
  };
  
  console.log(`店名: ${cafe1.name}`);
  console.log(`営業時間:${cafe1.businessHours.opening}から${cafe1.businessHours.closing}`);
  console.log(`----------------------------`);
  console.log("おすすめメニューはこちら");
  
  // for文を用いて配列menusの中身を表示させてください
  for (let i = 0; i < cafe1.menus.length; i ++) {
    console.log(cafe1.menus[i]);
  }