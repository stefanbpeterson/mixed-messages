const luckyNumGenerator = (num) => {
    return Math.floor(Math.random() * num);
}


const returnObjects = [
    {
        quote: "I have suggested that behind almost all myth lies the mono-plot of the game of hide-and-seek.",
        author: "Alan Watts",
        luckyNumber: luckyNumGenerator(100)
    },
    {
        quote: "To have faith is to trust yourself to the water. When you swim you don't grab hold of the water, because if you do you will sink and drown. Instead you relax, and float.",
        author: "Alan Watts",
        luckyNumber: luckyNumGenerator(100)
    },
    {
        quote: "I am involved in the world and must try to see that it does not blow itself to pieces.",
        author: "Alan Watts",
        luckyNumber: luckyNumGenerator(100)
    },
    {
        quote: "We’re fascinated by the words, but where we meet is in the silence behind them.",
        author: "Ram Dass",
        luckyNumber: luckyNumGenerator(100)
    },
    {
        quote: "You are loved just for being who you are, just for existing. You don’t have to do anything to earn it. Your shortcomings, your lack of self-esteem, physical perfection, or social and economic success – none of that matters. No one can take this love away from you, and it will always be here.",
        author: "Ram Dass",
        luckyNumber: luckyNumGenerator(100)
    }
] 

const printRandomAWQuote = (arr) => {
    let random = Math.floor(Math.random() * arr.length);
    console.log(arr[random]);
}

printRandomAWQuote(returnObjects);

