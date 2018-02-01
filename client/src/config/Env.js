var local = {
  remote : "http://localhost",
  port : 8081
}
var c9 = {
  remote : "https://mnevo-grenudi.c9users.io",
  port: 8080
}
var hero = {
  remote : "https://mnevo.herokuapp.com",
  port: process.env.PORT
}
export default()=>{
  return hero;
}

