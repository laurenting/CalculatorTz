<template>
  <div class="tiezhu">
    <div id="nav">
      <router-link to="/tiezhu">贝壳demo🐚</router-link>
    </div>
    <Deposit/>
    <br>
    <DownPayment/>
    <br>
    <Loan/>
    <br>
    <Property/>
    <br>
    <Register/>
    <Result/>
  </div>
</template>

<script>
import Deposit from '@/components/beike/Deposit'
import DownPayment from '@/components/beike/DownPayment'
import Result from '@/components/beike/Result'
import Loan from '@/components/beike/Loan'
import Property from '@/components/beike/Property'
import Register from '@/components/beike/Register'
export default {
  name: 'Home',
  methods: {

  },
  components: {
    Deposit,
    DownPayment,
    Result,
    Loan,
    Property,
    Register
  }
}
</script>
<style lang="scss">
.tiezhu{
  background: #efefef;
}
  #nav {
  padding: 5px;
  background: lightcyan;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #2ac4f3;
    }
  }
}
</style>
