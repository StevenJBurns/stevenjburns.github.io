<template>
  <div>
    <h1>About Me</h1>
    <hr>
    <h3>let Career = (MilitaryPilot) =&gt; FullStackDeveloper;</h3>
    <hr>
    <p>Welcome to my personal portfolio site. My name is Steve Burns. I was neither the host of Blues Clues in the 1990s nor a distant relative of Montgomery J Burns of The Simpsons.  I <strong><em>am</em></strong> a U.S. Air Force veteran transitioning to a second career in software development. As a graduate of the Air Force Academy and former combat pilot, I am seeking an equally challenging second career.</p>
    <p>Programming has fascinated me since the mid-1980s when I discovered BASIC on my first computer : the mighty Atari 800 equipped with 16KB of memory and video capable of 16 colors. Seeing the potential of computers beyond games and entertainment, I was hooked.  But college and the Air Force became my priority and so computers would take a back seat as a hobby.  By the 1990s I was hooked again by the awe-inspiring features of Windows 3.1 that introduced me to "relational" databases in Microsoft Access and productivity tools such as Solitaire and Minesweeper. While I saw many potential projects in the daily routines of the military I could never find the time to learn programming on a serious level or write software that was worth using. </p>
    <p>Many military members leave the armed forces not 100% sure what they want to do upon re-entering the civilian world. I was no exception but after flying jets I was 100% certain about one thing: I need to find a job that doesn't feel like a job. I tried my hand in real estate but the passion wasn't there.  After wandring the Earth in search of purpose...</p>
    <p>This site is a virtual online hub to projects, both big and small, demonstrating the skills I've learned over the years in software development.  Writing clean, efficient code never feels like work to me. </p>
    <!-- <p>If you have a simple, static website from 1998 that needs cleanup, I can do that.</p>
    <p>If you want to overhaul a website to more modern technology, I can do that.</p>
    <p>If you want to lean full forward towards cutting-edge technology, I can do that</p> -->
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
    overflow: hidden
  }

  hr {
    width: 80%;
    margin: 8px 0;
  }

  p {
    width: 80%;
    margin: 12px 0;
    text-align: justify
  }
</style>