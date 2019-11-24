# movieql
2019.11.24

#### GraphQL

* Graphql-yoga : 쉽게 설치하는데 중점을 둔 완전한 기능을 갖춘 서버
* 그래프QL이 해결할 수 있는 문제
  - Over-fetching :요청한 영역의 정보보다 많은 정보를 서버에서 받을때 
  - Under-fetching : 어떤 하나의 화면을 완성하기 위해 다른 요청들을 해야할 때 발생

#### 바벨(babel) 설치

- [`Babel`](https://babeljs.io/)은 ES6/ES7 코드를 ES5 코드로 변환해주는 도구이다. ES6/ES7으로 개발하기 위해서 `babel-cli`를 설치한다.

- ```
  yarn global add babel-cli
  ```

#### 스키마

* 사용자에게 보내거나 받을 데이터에 대한 설명
* query : 정보를 받을때 쓰임
* Schema.graphql에서 데이터가 어떻게 보일지 정의하고 -> resolvers에서 어떻게 해결할지 정의해줌

#### GraphQL Playground

* yoga에서 제공 : postman 같은거
* 항상 서버가 받아야하기 때문에 POST로 보내야함
* api개발자들에게 유용
* Commend enter 가 재생

#### Mutation

* 데이터베이스 상태가 변할때 사용되는것