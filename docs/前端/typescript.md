# TypeScript

## Why should one use TypeScript?

1. 提供了类型就检查和静态diam分析。
2. 代码中的类型注解可以作为代码级文档发挥作用
3. 当 IDE 知道你正在处理的数据类型时，可以提供更具体、智能的智能感知
4. 通过改变配置就可以很容易的开始使用最新的 JS 语言特性。

## What does TypeScript not fix?

1. 外部库不完整、缺少的类型声明
2. 有时候类型推断需要帮助，可以使用类型断言或类型保护。


## 泛型

- TS 中最为困难的内容之一`泛型`
- 言简意赅
  - 泛型时对类型进行编程，参数是类型，返回值是一个新的类型
- 我们可以对泛型的参数进行约束，类似函数的类型约束
- 泛型支持类型推断
- 泛型和函数很像
  - 很多函数的内容可以迁移到泛型
    - 函数嵌套
    - 默认参数
    - 支持递归
      ```typescript
        // 单链表节点定义
        type ListNode<T> = {
          data: T;
          next: ListNode<T> | null;
        };
      ```
    - 等等
- 泛型使用尖括号
- 什么时候用泛型
  - 当你的函数、接口或者类
    - 需要作用到很多类型
    - 需要被用到很多地方


## 类型映射
## 类型保护

```js
const parseComment = (comment: any): string => {
  if (!comment || !isString(comment)) {
    throw new Error('Incorrect or missing comment: ' + comment);
  }

  return comment;
}
```

在调用类型保护之前，不知道变量comment 的实际类型:

但是在调用之后，如果代码继续执行异常(即返回的类型保护为 true) ，编译器就会知道comment 的类型是string:

## 类型推论
## 类型断言

除非没有其他方法，否则我们永远不应该使用类型断言，因为我们总是有可能断言对象的类型不合适，从而导致严重的运行时错误。

因为我们不能在 json 文件中使用类型，所以我们应该将 json 文件转换为一个 ts 文件，该文件导出输入的数据，如下所示:

## 【工具类型】

有时我们可能希望使用某种类型的特定修改。

Pick工具类型允许我们选择要使用的现有类型的字段。

使用Omit工具类型，我们可以使用它来声明要排除哪些字段:

```typescript
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;
```
**还是返回了多余的字段**
是因为TypeScript只检查我们是否有所有必需的字段，但是多余的字段是不被禁止的。

因为 TypeScript 不修改实际的数据，只修改其类型，我们需要自己排除这些字段:

```typescript
import diaries from '../../data/entries.js'

import { NonSensitiveDiaryEntry, DiaryEntry } from '../types'

const getEntries = () : DiaryEntry[] => {
  return diaries
} 

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry [] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};
```

## tsconfig.json

```js
{
  "compilerOptions": {
    "target": "ES6",
    "outDir": "./build/",
    "module": "commonjs",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,       
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true
  }
}
```

target 配置告诉编译器为生成的 JavaScript 使用哪个 ECMAScript

module告诉编译器我们要在编译的代码中使用 commonjs模块。 这意味着我们可以使用 require 而不是 import，这在旧的 Node.js 版本中是不被支持的，比如10版本。

strict 实际上是多个独立选项的简写:

noImplicitAny，noImplicitThis，alwaysStrict，strictBindCallApply，strictNullChecks，strictFunctionTypes 以及 strictPropertyInitialization.

使用noUnusedLocals 避免有未使用的局部变量，

如果函数有未使用的参数，noUnusedParameters 将抛出错误。

noFallthroughCasesInSwitch 确保在_switch情况下，每个case都以一个 return 或 break 语句结束。

esModuleInterop 允许 commonJS 和 ES 模块之间的互操作性

## eslint

```json
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "plugins": ["@typescript-eslint"],
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-unused-vars": [
        "error", { "argsIgnorePattern": "^_" }
    ],
     "@typescript-eslint/no-explicit-any": 1,
    "no-case-declarations": 0
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## 版本

### 3.9

1. 平均编译时长从26秒缩短至10秒
2. 修复了Promise.all/race的问题

## 其他

### TS 版的 express 应用

我们不会在路由上编写实际数据操作的代码。 我们将创建一个service 来处理数据操作。

将“业务逻辑”从路由代码分离到自己的模块(通常称为services)是非常常见的做法。


### JSON Modules

在使用 tsconfig 时， 值得注意的一个地方是， 使用 resolveJsonModule 这个选项，它可能产生一些问题。

仔细看一下node 模块的扩展顺序

["js", "json", "node", "ts", "tsx"]

我们注意到 .json 文件的扩展优先于.ts， 所以 myModule.json 会被引入，而不是我们希望的 myModule.ts。

为了避免这种潜在的bug， 建议在一个文件夹中，每个文件，如果想作为一个合法的node模块扩展，都给一个唯一的文件名。

### 利用 TypeScript 编写 React 应用

**explicit-function-return-type**
因为基本上所有 React 组件都返回一个JSX.Element 类型或null 类型，所以我们通过禁用 规则 explicit-function-return-type来稍微放松默认的lint规则，这样我们就不需要在所有地方显式写出函数返回类型 。

React.FC 和 React.FunctionComponent 的类型声明如下所示:

```js
type FC<P = {}> = FunctionComponent<P>;

// PropsWithChildren 类型反过来又是 P 和 { children?: ReactNode } 的交集。
// 组件的props 包含已定义的类型和组件的children
type PropsWithChildren<P> = P | { children?: ReactNode };

interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}


```

首先，您可以看到 FC 只是 FunctionComponent 接口的别名。 它们都是泛型的，可以很容易地通过类型名称后面的角括号来识别。 在尖括号中有 P = {}.。 这意味着，您可以将类型作为参数传递，在新类型中，传递的类型将默认使用空对象 {} 的名称 P 。

```js
interface WelcomeProps {
  name: string;
}

const Welcome: React.FC<WelcomeProps> = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

const Welcome: React.FC<{ name: string }> = ({ name }) => (
  <h1>Hello, {name}</h1>
);

const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById("root"));
```

**联合类型**
```js
interface CoursePartOne {
  name: "Fundamentals";
  exerciseCount: number;
  description: string;
}

interface CoursePartTwo {
  name: "Using props to pass data";
  exerciseCount: number;
  groupProjectCount: number;
}

interface CoursePartThree {
  name: "Deeper type usage";
  exerciseCount: number;
  description: string;
  exerciseSubmissionLink: string;
}
type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;
```

但是我们还不满意！ 在我们创建的类型中仍然存在大量的重复，这是我们希望避免的。 我们首先确定所有课程部分的公共属性，并定义包含它们的基类型，然后我们将扩展这个基类型来创建我们的部分特定类型:

```js
interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartOne extends CoursePartBase {
  name: "Fundamentals";
  description: string;
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartBase {
  name: "Deeper type usage";
  description: string;
  exerciseSubmissionLink: string;
}

type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;
```

name 对于每个类型都是不同的，所以我们可以使用它来标识每个类型，因此 TypeScript 可以帮助我们知道每个 case 块中有哪些属性可用，如果您尝试在"Using props to pass data"块中使用part.description，那么它会产生错误。

**关于定义对象类型的注意事项**

在大多数情况下，您可以使用type 或interface，无论您喜欢的哪种语法，但仍有一些事情需要记住。 例如，如果您使用相同的名称定义多个接口，它们将导致一个合并的接口，而如果您尝试使用相同的名称创建多个类型，它将导致一个错误声明，即一个相同的名称已经声明过了。

**状态管理**

状态管理是使用 React Hooks useContext和useReducer构建的。 这是一个创建有状态应用的非常可行的选择

当我们知道我们的应用会相当小，我们不想使用redux 或其他库来进行状态管理时。 

```js
export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    };

// ./store.tsx
const StateContext = React.createContext(themes.light);

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  children
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

// ./app.tsx
import { reducer, StateProvider } from "./state";

ReactDOM.render(
  <StateProvider reducer={reducer}>
    <App />
  </StateProvider>, 
  document.getElementById('root')
);    
```
