const homeBtnEl = document.getElementById('home-btn')
const aboutBtnEl = document.getElementById('about-btn')
const mainEl = document.getElementsByTagName('main')[0]
const dynamicContentEl = document.getElementById('dynamic-content')

homeBtnEl.addEventListener('click', handleHomeBtnClick)
aboutBtnEl.addEventListener('click', handleAboutBtnClick)
mainEl.addEventListener('click', handleBlogListingsClick)

function handleHomeBtnClick() {
    dynamicContentEl.innerHTML = `<h4>July 23, 2022</h4>
                                <h2>My new journey as an AI artist and developer.</h2>
                                <p>I discovered AI Art when I stumbled across a program called NVIDIA Canvas which would interpret images of areas of solid colors and create landscapes from them.</p>`
    dynamicContentEl.className = "content main-headline"
}

function handleAboutBtnClick() {
    dynamicContentEl.innerHTML= `<img src="images/chris-logo.png">
                                <h2>Hi there! My name is Chris and welcome to my AI Art and development journey.</h2>
                                <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
                                <div class="blog-text">
                                    <h3>How I stay committed to learning</h3>
                                    <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
                                    <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
                                    <h3>How I got started</h3>                
                                    <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
                                    <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
                                </div>
                                <h5>...recent posts...</h5>`            
    dynamicContentEl.className = "content about-me"
}

function handleBlogListingsClick() {
    dynamicContentEl.innerHTML = `<h4>July 23, 2022</h4>
                                <h2>My new journey as an AI artist and developer.</h2>
                                <p>I discovered AI Art when I stumbled across a program called NVIDIA Canvas which would interpret images of areas of solid colors and create landscapes from them.</p>
                                <img src="images/main-image.jpg" alt="">
                                <div class="blog-text">
                                    <h3>How I stay committed to learning</h3>
                                    <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
                                    <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
                                    <h3>How I got started</h3>                
                                    <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
                                    <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
                                </div>
                                <h5>...recent posts...</h5>`
    dynamicContentEl.className = "content blog-post-page"
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
}