<template>
  <div>
    <h1>About Me</h1>
    <hr>
    <h3>let Career = (MilitaryPilot) =&gt; FullStackDeveloper;</h3>
    <hr>
    <p>Welcome to my personal portfolio site. My name is Steve Burns. I was neither the host of Blues Clues in the 1990s nor a distant relative of Montgomery J Burns of The Simpsons.  I <strong><em>am</em></strong> a U.S. Air Force veteran transitioning to a second career in software development. As a graduate of the Air Force Academy and former combat pilot, I am seeking an equally challenging second career.</p>
    <p>Programming has fascinated me since the mid-1980s when I discovered BASIC on my first computer : the mighty Atari 800 equipped with 16KB of memory and video capable of 16 colors. Seeing the potential of computers beyond games and entertainment, I was hooked.  But college and the Air Force became my priority and so computers would take a back seat as a hobby.  By the 1990s I was hooked again by the awe-inspiring features of Windows 3.1 that introduced me to "relational" databases in Microsoft Access and productivity tools such as Solitaire and Minesweeper. While I saw many potential projects in the daily routines of the military I could never find the time to learn programming on a serious level or write software that was worth using and so computers were shelved as a hobby once again.</p>
    <p>In 2003 my military career brought me to a staff job where flying a desk was far less fun than flying jets but something interesting happened there. The military, like civilian organizations, runs heavy on data and analysis and my superiors wanted that data refined and accesible -- that job was assigned to me. Their knee jerk reaction was to build a cluster of Microsoft Excel sheets. I objected and raised the ante by offering up a powerhouse combination of Microsoft Access and VBA forms. And it worked. For a while. The system I created was a working solution for five people who tapped into the database a few times each day but the project caught the attention of some senior commanders. Usage increased, the network bottlenecked and poor Microsoft Access couldn't handle the workload. I quickly found myself learning about Microsoft SQL Server.  Finally, a real database! But how could I could improve the front end user experience? The answer was a Windows Forms application running on Visual Basic .NET, of course. I couldn't grasp the concept of clients and servers. It seemed I had reached the end of the road of being self-taught in software development.</p>
    <p>Many military members leave the armed forces not 100% sure what they want to do upon re-entering the civilian world. I was no exception but after flying jets I was 100% certain about one thing: I need to find a job that doesn't feel like a job. I tried my hand in real estate but the passion wasn't there. There was a nagging feeling that my interest in computers had potential but the path from A to B wasn't visible to me. I needed projects to work on. I needed professional training. Forutnately I was sitting on a lottery ticket in the form of my military GI Bill which made more education possible. Already having both a bachelors degree and a masters degree, the thought of sitting through four years of unrelated courses in pursuit of a computer science degree was extremely unappealing at age 48. There had to be a quicker, more direct path to learning modern software development.</p>
    <p>If you had asked my opinion on coding boot camps in December of 2016 my response would have been "snake oil!" I had zero evidence to back that up. After a month of researching code bootcamp options and what they generally have to offer I was on a course determined to attend Galvanize in Boulder, Colorado. Front end development in jQuery. Servers built on Node and Express. Databases. Modern front-end development in React. Self-taught paths to parallel and unique technology stacks that are not in the syllabus. Career services to guide you in landing a job in the software landscape. All in 24 weeks and no courses on philosophy or history. What's not to like? Galvanize was the smartest decision I had made in 25 years.</p>
    <p>This site is a virtual online hub to my projects, both big and small, demonstrating the skills I've learned over the years in software development.  The path to writing clean, efficient code never feels like work to me. It's always a challenge to be sure but not in a monotonous, soul-crushing way. My military experiences demand a challenge. I want to build things that work and I embrace the obstacles along the way. Those obstacles make success taste a little sweeter in the end. The whole process is fun to me and it is very much like being a military pilot.  It is work that doesn't feel like work.</p>
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