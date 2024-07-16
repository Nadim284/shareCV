const link = encodeURI('https://github.com/Nadim284/My-CV'); // Replace with your actual CV URL
const msg = encodeURIComponent('Hey, check out my CV!');
const title = encodeURIComponent('My CV');

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector('.twitter');
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=cv,resume`;
