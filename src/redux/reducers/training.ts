let age: number = 25;
let title: string = 'it-kamasutra';
let isSamurai: boolean | null = false;
isSamurai = null;

let sex: 'male' | 'female';
sex = 'male';

// Arrays
let names: Array<string> = ['Andrey', 'Diana', 'Ekaterina'];
let names2: string[] = ['Andrey', 'Diana', 'Ekaterina'];

// any & Function & Object можно написать если точно не знаешь 

// Objects
type UsType = {
  sayHello: (a: string) => void,
  name: string,
  age: number,
  isSamurai: boolean,
  address: AddressType | null
}

type AddressType = {
  city: string | null,
  country: string | null,
  street?: string | null,
  building?: number | null
}

let user: UsType = {
  sayHello(message: string): void { console.log(message) },
  name: 'Andrey',
  age: 25,
  isSamurai: false,
  address: {
    city: 'Moscow',
    country: 'Russia'
  }
}

// Functions

type SumFun = (a: number, b: number) => number;
type SayByeFun = () => void;

const sum: SumFun = (num1: number = 10, num2: number = 10): number => {
  return num1 + num2;
}

const sayBye: SayByeFun = (): void => {
  console.log('Bye');
}


// ====>

// если уже есть объект, то можно на его основе
// сделать type, чтобы потом типизировать 
// последующе объекты.
// Это позволяет при добавлении новых полей в объект не дублировать их
// в type

let initialState = {
  name: null as string | null,
  age: null as number | null,
  isSamurai: null as boolean | null, // если сейчас null, но при изменении будет boolean
  address: {
    // as string | null приписаны в AddressType
    city: null,
    country: null 
  } as AddressType,
  additionalAddresses: [] as Array<AddressType>, // если массив объектов
  counter: 0
}

export type InitialStateType = typeof initialState;

let initialState2: InitialStateType = {
  name: 'Diana',
  age: 21,
  isSamurai: false,
  address: {
    city: 'Moscow',
    country: 'Russia'
  },
  additionalAddresses: [{
    city: 'Chicago',
    country: 'USA'
  }],
  counter: 100
}


// ====>

let GET_TASKS = 'APP/GetTASKS';
let SET_USERS = 'SET-USERS';

type UserType = {
  id: number,
  name: string,
  city: string 
}

type GetTasksActionType = {
  type: typeof GET_TASKS,
  id: number
}

type SetUsersActionType = {
  type: typeof SET_USERS,
  payload: Array<UserType>
};
 

let getTasksAction: GetTasksActionType = {
  type: GET_TASKS,
  id: 12
}

let setUsersAction: SetUsersActionType = {
  type: GET_TASKS,
  payload: [
    { id: 1, name: 'Andrey', city: 'Moscow' },
    { id: 2, name: 'Diana', city: 'Vladikavkaz' }
  ]
}









export {}