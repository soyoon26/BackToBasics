//for ( 초기값; 조건; 증가식) { 실행할 명령 }
for (let i = 0; i < 5; i++) {
  console.log(i); //0,1,2,3,4
}
//증가식 i++ : 반복의 body가 실행된 이후에 실행 -> 조건: 검사하고 False이면 멈춤

//1부터 5까지 더해서 합을 출력하기
let sum = 0;
for (let i = 0; i < 1001; i++, sum += i) {
  //복잡함
  console.log(sum);
}

for (let i = 0; i < 1001; i++) {
  sum += i;
  console.log(sum);
}