<template>
  <div id="playlist">
      <van-nav-bar
  title="听"
  left-text=""
  right-text="分享"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1397159290&auto=1&height=66"></iframe>
<br>
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=350957&auto=0&height=66"></iframe>
  </div>

</template>

<script>
export default {
  name: 'Playlist',
  methods: {
    onClickLeft: function () {
      this.$router.push('/')
    },
    onClickRight: function () {
      alert('分享API')
    }
  }
}
</script>

<style lang="scss">
</style>
