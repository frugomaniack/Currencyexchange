<template>
<div>
<h1 class="text-center mb-4">Currency Converter</h1>
<el-row class="rowclass" align="center" justify="center" >
    <el-col :span="8">
      <div class="grid-content bg-purple">
          <p class="pstyle" >Change from</p>
            <el-select  @change="convert" class="elselectstyle" v-model="selected1" placeholder="Select">
                <el-option
                  v-for="item in countries"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
            </el-select>
          <p class="pstyle" >Input amount in {{selected1}} </p>
          <input class="inputstyle" @input="convert" v-model="message" placeholder="0.0" type="number" id="amount">
      </div>
    </el-col>

    <el-col :span="8" justify="center" class="grid-content bg-purple" align="center" >
      <div  class="crate" >
        <p class="pstyle" > {{selected1}}</p>
        <i class="el-icon-right"></i>
        <p class="pstyle" > {{selected2}}:</p>
        <div>
          <label>{{info}}</label>
        </div>
      </div>
    </el-col>

    <el-col :span="8">
      <div class="grid-content bg-purple">
        <p class="pstyle" >Change to</p>
            <el-select  @input="convert" class="elselectstyle" v-model="selected2" placeholder="Select">
                <el-option
                  v-for="item in countries"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
            </el-select>
        <p class="pstyle" >Output amount in {{selected2}} </p> <input  class="inputstyle" :disabled=1 id="result" placeholder="0.0" name="result">
      </div>
    </el-col>
</el-row>
</div>
</template>



<script>

import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';
import './styles/app.css';
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import 'vue-select/dist/vue-select.css';


    export default {
        Vuetify,
        name: 'App',
        data () {
        return {
            valutes: {},
            selected1: 'EUR',
            selected2: 'PLN',
            selected: [],
            result: null,
            resultmulti: 0,
            countries: [],
            info: null,
            message: '',
            exfrom: 'USD',
            exTo: 'PLN',
            apiKey: 'yourkey',
            loginapi: 'yourlogin'
        };
        },
        methods:
        {
            convert()
            {
               axios
              .get('https://v1.nocodeapi.com/'+this.loginapi+'/cx/WueXVPdfRPwoJUeB/rates?source='+this.selected1+'&target='+this.selected2)
              .then(response => (this.info = parseFloat(response.data["rates"][this.selected2]).toFixed(2)))
              var num1 = document.getElementById("amount").value;
              var num2 = this.info;
              var resultmul = num1 * num2;
              document.getElementById("result").value = resultmul.toFixed(2)+' '+this.selected2;
              this.resultmulti = parseFloat(resultmul).toFixed(2)+' '+this.selected2;
            }
        },
        mounted ()
        {
          axios
              .get('https://v1.nocodeapi.com/frugomaniack/cx/WueXVPdfRPwoJUeB/rates?source='+this.selected1+'&target='+this.selected2)
              .then(response => (this.info = parseFloat(response.data["rates"][this.selected2]).toFixed(2))),
            axios
            .get('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => {
                this.valutes = response.data.Valute;
                for (let code in response.data.Valute)
                {
                this.countries.push(code)
                }
            })
        },
    }

</script>

<style lang="scss">
@import '~element-ui/lib/theme-chalk/reset.css';
@import "~element-ui/packages/theme-chalk/src/index";
@import "vue-select/src/scss/vue-select.scss";
@import '~vuetify/src/styles/main';
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

#app {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: transparent;
      align-items: center;
      justify-content: center;
       display: flex;
       flex-direction: column;
      // height: 100%;
  }
  .crate {
    border-radius: 5%;
    background: white;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    border-style: solid;
    border-width: 1px;
    padding: 15px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    align-items: center;
    justify-content: center;
    
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
    display: flex;
      flex-direction: column;
      height: 100%;
  }
  .rowclass{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
