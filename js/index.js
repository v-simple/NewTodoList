const input = document.getElementById('input');
const addbtn = document.getElementById('addbtn');
const div = document.getElementById('list')

//엔터로 입력시 ?????   그리고 input 입력시 비어있을때 입력 안되게 하기???
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        const List = document.createElement('li')  
        //리스트 생성
        List.innerHTML = input.value;
        div.appendChild(List)
        //input 다시 공백으로
        input.value = ''
        
        //리스트 가로줄 긋기
        List.addEventListener('click', () => {
            List.style.textDecoration = 'line-through'
        } );
        
        //리스트 삭제
        const deletebutton =  document.createElement('button')
        deletebutton.textContent = '제거하기'
        deletebutton.addEventListener('click', () => {
            List.parentNode.removeChild(List)
        })
        List.appendChild(deletebutton)
    }
})

addbtn.addEventListener('click', () => {
  const List = document.createElement('li') 
  //리스트 생성
  List.innerHTML = input.value;
  div.appendChild(List)
  //input 다시 공백으로
  input.value = ''

  //리스트 가로줄 긋기
  List.addEventListener('click', () => {
    List.style.textDecoration = 'line-through'
  } );

  //리스트 삭제
  const deletebutton =  document.createElement('button')
  deletebutton.textContent = '제거하기'
  deletebutton.addEventListener('click', () => {
    List.parentNode.removeChild(List)
  })
  List.appendChild(deletebutton)

})