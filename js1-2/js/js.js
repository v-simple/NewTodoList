

const input = document.getElementById('input');
const addbtn = document.getElementById('addbtn');
const div = document.getElementById('list');



//엔터 입력시 input 입력하기
input.addEventListener('keyup', (e) => {
  if (e.keycode === 13){
    addList()
  }
})

addbtn.addEventListener('click', () => {
  addList()
})
    
function addList(){
  if( input.value === '') return

  const List = document.createElement('div');
  const Input = document.createElement('input')
  const Label = document.createElement('label')
  Label.innerText = input.value

  Input.type = 'checkbox'
  Input.addEventListener('change', (e) => {
    if(input.checked){
      Label.style.textDecoration = 'line-through'
    } else{
      Label.style.textDecoration = 'none'
    }

})

//리스트 삭제
const deletebutton = document.createElement('button')
deletebutton.textContent = '제거하기'
deletebutton.addEventListener('click', () => {
  List.parentNode.removeChild(List)
})

List.appendChild(Input)
List.appendChild(Label)
List.appendChild(deletebutton)

div.appendChild(List)
//input 다시 공백으로
input.value = ''


}