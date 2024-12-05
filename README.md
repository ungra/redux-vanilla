# Learning Redux-VanillaJavaScript

<Redux>

redux
: data를 한곳으로 모아서 관리.

store
: state 저장소

reducer
: store는 reducer를 필요로 함.
: reducer는 state를 update하는 function임. data 변경을 담당.
: return value가 application의 state임.

action
: reducer에게 message를 보내기 위함.
: object형태여야만 하고 type이 있어야 함.

dispatch
: reducer에 message 전달 역할

getState
: return a current state

subscribe
: state 변경시 호출할 callback 등록
: callback에서 rendering 관련 로직은 하지 않아야 함.
: store.getState()를 통해 최신 state 받아올 수 있음.

connect
: react component와 redux 연결
: react에서는 subscribe 대신 connect나 useSelector를 사용해서 state 변화를 관리함.

mapStateToProps
: react component에 state 전달 및 추가
: getState

mapDispatchToProps
: react component에 dispatch 전달 및 추가
: dispatch

<Redux-toolkit>
redux의 boilerplate code를 줄여줌

createAction
: action 생성

createReducer
: reducer 생성
: return new state하거나 mutate state 하면 됨.(mutate 가능)
: mutate가 가능한 이유는 redux toolkit이 Immer를 사용하는데 여기서 새로운 state로 만들어서 리턴함.

configureStore
: createStore with middleware
: middleware에서 monitoring(redux developer tools)도 제공함.

---

<React>

useParams
: react router에서 제공하는 hook
: 현재 URL에서 경로 매개변수를 사용할 수 있게 함.
