<template>
  <div>
    <h1>About</h1>
    <hr>
    <h3>let Career = (MilitaryPilot) =&gt; FullStackDeveloper;</h3>
    <hr>
    <p>My name is Steve Burns but I was neither the host of Blues Clues in the 1990s nor a distant relative of Montgomery J Burns of the Simpsons.  I <em>am</em> a U.S. Air Force veteran transitioning to a second career in software development. As a graduate of the Air Force Academy and former combat pilot, I am seeking an equally challenging second career.</p>
    <br />
    <p>Writing clean and efficient and code </p>
    <br />
    <p>If you have a simple, static website from 1998 that needs cleanup, I can do that.</p>
    <p>If you want to overhaul a website to more modern technology, I can do that.</p>
    <p>If you want to lean full forward towards cutting-edge technology, I can do that</p>
  </div>
</template>

<script>
  export default {
    name: 'PageAbout',
    props: {}
  }
</script>

<style scoped>
  div {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #445566;
    padding: 0 10%;
  }

  hr {
    width: 80%;
    margin: 8px 0
  }

  p {
    width: 80%;
    text-align: justify
  }
</style>