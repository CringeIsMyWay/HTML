import { ref } from 'vue'
export default {
  setup() {
    
  },
  data(){
return {
selected:'1',
selected1:'1',
selected2: 1,
selected3:'1',
selected4:'',
checked1:false,
checked2:false,
Result :0,

}
  },
  methods:{
Calc:function(){
    this.Result = parseFloat(this.selected)*parseFloat(this.selected1)*parseFloat(this.selected2)*parseFloat(this.selected3)*parseFloat(this.selected4)
    if(this.checked1 == true){
      this.Result -= 150
   }
   if(this.checked2 == true){
       this.Result -= 100
    } 
}

  },
  template: `<div>
  <div class=container2>
  <p>Регион <br>
  <select v-model = "selected">
    <option value = "1000"> 77 МСК</option>
    <option value = "800"> 78 СПБ</option>
    <option value = "500"> 54 НСК</option>
  </select>
  </p>

  <p>Год <br>
    <select v-model = "selected1">
      <option value = "1.2"> 2021</option>
      <option value = "1.1"> 2022</option>
      <option value = "1"> 2023</option>
    </select>
  </p>
 

  <p>Месяцы оплаты <br>
  <select v-model = "selected2">
  <option value = "1">1</option>
  <option value = "2">2</option>
  <option value = "3">3</option>
  <option value = "4">4</option>
  <option value = "5">5</option>
  <option value = "6">6</option>
  <option value = "7">7</option>
  <option value = "8">8</option>
  <option value = "9">9</option>
  <option value = "10">10</option>
  <option value = "11">11</option>
  <option value = "12">12</option>
  </select>
  </p>
  <p>Тип авто <br>
  <select v-model = "selected3">
  <option value = "1">Легковой</option>
  <option value = "1.5">Грузовой</option>
  <option value = "3">Спец</option>
  </select>
  </p>

  <p></p>
  <input placeholder = "мощщ" ></input>
  <p></p>
  <p>Типы льгот</p>
  <input type="checkbox"  v-model ="checked1" >1 категория</input>
  <input type="checkbox"  v-model ="checked2">2 категория</input>
  <div>
  <br>
  <p>Наличие задолжностей:</p>
  <input name="radio" type="radio" v-model="selected4" value="1.1">Да</input>
  <input type="radio" name="radio" v-model="selected4" value="1">Нет</input>
  </div>
  <br>
  <p></p>
  <button @click = "Calc()">Подсчет</button>
  <p></p>
  
  <input placeholder = "результат" name = "input1">{{Result}}</input>
  <br>
  </div>
  </div>`
}