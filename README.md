# Learning Redux-VanillaJavaScript

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

connect
: react component와 redux 연결

mapStateToProps
: react component에 state 전달 및 추가

mapDispatchToProps
: react component에 dispatch 전달 및 추가
