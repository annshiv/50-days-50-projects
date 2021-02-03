const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="20210202_102115.jpg" alt="" />'
  title.innerHTML = 'About'
  excerpt.innerHTML =
    'Beginner in software developer. Practicing & Upgrading my skills in python, public speaking, soft skills, datastructures and web development.'
  profile_img.innerHTML =
    '<img src="Document from Annshiv.jpg" alt="" />'
  name.innerHTML = 'Annamalai palani'
  date.innerHTML = 'Full stack developer'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}