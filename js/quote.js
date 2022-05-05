const quotes = [
    {
        quote: 'I never dreamed about success, I worked for this.!',
        author: 'Estee Lauder'
    },
    {
        quote: 'Do not try to be original, just try to be good.',
        author: 'Paul Rand'
    },
    {
        quote: 'Do not be afraid to give up the good to go for the great',
        author: 'John D. Rockefeller'
    },
    {
        quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
        author: 'Martin Luther King Jr.'
    },
    {
        quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
        author: 'Thomas Edison'
    },
    {
        quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
        author: 'REid Hoffman'
    },
    {
        quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
        author: 'Tim O Reilly'
    },
    {
        quote: 'Some people dream of success, while other people get up every morning and make it happen',
        author: 'Wayne Huizenga'
    },
    {
        quote: '무언가를 시작하는것과 실패하는것보다 좋지 않은것은 시작하지 않는것이다.',
        author: '세드 고딘'
    },
    {
        quote: '만약 여러분이 정말로 무언가를 하고 싶다면, 여러분은 방법을 찾을 것입니다. 만약 그렇지 않다면, 너는 핑계를 찾을 것이다.',
        author: '짐 론'
    },
];

const quote = document.querySelector("div#quete span:first-child");
const author = document.querySelector("div#quete span:last-child");
const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;
