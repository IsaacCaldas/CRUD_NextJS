export default class Client {

  /* # equal private
   But in file tsconfig.json you have to change in:
    compilerOptions -> target: 'es5' to 'ES2015' or more
  */
  #id: string;
  #name: string;
  #age: number;

  constructor(name: string, age: number, id: string = null){
    
    this.#name = name;
    this.#age = age;
    this.#id = id;
  }

  get id(){return this.#id}

  get name(){return this.#name}

  get age(){return this.#age}

  static empty(){
    return new Client('', 0);
  }

}