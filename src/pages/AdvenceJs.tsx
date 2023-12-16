import * as React from "react";
import CreaterCode from "../component/CreaterCode";
import CustomParagraph from "../component/CustomParagraph";
export interface IAdvenceJsProps {}
export interface ICustomParagraphProps {
  title: string;
  subText: string;
}

export const objectShowCode = `
const user = {
    name : "Oğuzhan",
    status :"Art Designer" ,
}
// "object literal " syntax

const user = new Object()   // "object constructor" syntax

console.log(user.name)  
console.log(user["name"])   // Oğuzhan 


`;
const objectCreater = {
  title: "Javascript Objects",
  subText: `JavaScript'te sekiz veri türü vardır. Bunlardan yedisi "ilkel" olarak adlandırılıyor çünkü değerleri yalnızca tek bir şey içeriyor (bir dize, bir sayı veya başka bir şey olabilir).
Buna karşılık nesneler, çeşitli verilerin ve daha karmaşık varlıkların anahtarlı koleksiyonlarını depolamak için kullanılır. JavaScript'te nesneler dilin hemen hemen her yönüne nüfuz eder.
Şekil parantezleriyle {…} ve isteğe bağlı özellikler listesiyle bir nesne oluşturulabilir. Özellik bir "anahtar: değer" çiftidir; burada key bir dizedir ("özellik adı" olarak da adlandırılır) ve value herhangi bir şey olabilir.
`,
};

const objectGetDeleteValue = {
  subText: "Bir özelliği kaldırmak için 'delete' operatörünü kullanabiliriz",
};

const objectGetDeleteShowCode = `
console.log(user.name) // Oğuzhan
delete user.name
console.log(user.name) // undefined

`;

const objectStringValue = {
  subText: `Objelere string değerde value ekleyebiliriz. Fakat string ifadeler için nokta rotasyonlu çağrım çalışmaz.
    Bu tür kullanımlara hesaplanmış değer denilir. Bu kullanımı herhangi bir işlem sonucu dönecek değerler içinde kullanabiliriz.`,
};

const objectStringValueCodeShow = `
const user ={
    "kullanıcı adı" : "oğuzhan"
}

console.log(user["kullanıcı adı"]) // oğuzhan

let status = prompt("Geliştirme yaptığınız teknoloji nedir ?");

let bag = {
  [status]: "JS", 
};

alert( bag.status ); // "JS"

`;

const ozellikKisaltmasiShowCode = `

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...diğer parametreler
  };
}

let user = makeUser("John", 30);

console.log(user.name); // John

// Yukarıdaki kod yerine:

function makeUser(name, age) {
  return {
    name, //  name: name
    age,  //  age: age
    // ...
  };
}

`;

const ozellikKisaltmasi = {
  title: "Özellik kısaltması",
  subText:
    "Genellikle mevcut değişkenleri özellik adları için değer olarak kullanırız.",
};

export function AdvenceJs(props: IAdvenceJsProps) {
  return (
    <div className="container">
      <div>
        <CustomParagraph
          title={objectCreater.title}
          subText={objectCreater.subText}
        />

        <CreaterCode
          title="Javascriptte obje oluşturmak"
          codeString={objectShowCode}
        />
      </div>
      <div>
        <CustomParagraph subText={objectGetDeleteValue.subText} />
        <CreaterCode
          title="Obje değerini silmek"
          codeString={objectGetDeleteShowCode}
        />
      </div>
      <div>
        <CustomParagraph subText={objectStringValue.subText} />
        <CreaterCode codeString={objectStringValueCodeShow} />
      </div>
      <div>
        <CustomParagraph subText={ozellikKisaltmasi.subText} />
        <CreaterCode
          title="Özellik kısatması"
          codeString={ozellikKisaltmasiShowCode}
        />
      </div>
    </div>
  );
}
