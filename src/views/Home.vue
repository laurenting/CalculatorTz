<template>
  <div class="home">
    <Deposit/>
    <DownPayment/>
    <Loan/>
    <Property/>
    <Register/>
    <Result/>
  </div>
</template>

<script>
import Deposit from '@/components/Deposit'
import DownPayment from '@/components/DownPayment'
import Result from '@/components/Result'
import Loan from '@/components/Loan'
import Property from '@/components/Property'
import Register from '@/components/Register'
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
