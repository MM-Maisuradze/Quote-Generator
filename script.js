let arr = [
  `"Just one small positive thought in the morning can change your whole day."`,
  `"Opportunities don't happen, you create them"`,
  `"Love your family, work super hard, live your passion"`,
  `"It is never too late to be what you might have been."`,
  `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
  `"The future belongs to those who believe in the beauty of their dreams."`,
  `"It is during our darkest moments that we must focus to see the light."`,
  `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
  `"The only impossible journey is the one you never begin."`,
  `"You only live once, but if you do it right, once is enough."`,
  `"It is better to fail in originality than to succeed in imitation."`,
  `"“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."`,
  `"The road to success and the road to failure are almost exactly the same."`,
  `"Believe you can and you're halfway there."`,
  `"An unexamined life is not worth living."`
]
let num, old_num;
let bt = document.querySelector('#bt');
let text = document.querySelector('#text');

bt.addEventListener('click', () => {
    choosenum();
    text.innerText = arr[num];
    old_num = num;
})

function choosenum(){
    num = Math.floor(Math.random()*arr.length);
    check();
}
function check(){
    if(num == old_num){
        choosenum();
    }
};;