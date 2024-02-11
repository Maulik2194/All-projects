const paragraphs = [
    `She closed her eyes and then opened them again. What she was seeing just didn't make sense. She shook her head seeing if that would help. It didn't. Although it seemed beyond reality, there was no denying she was witnessing a large formation of alien spaceships filling the sky.`,
    `There was something in the sky. What exactly was up there wasn't immediately clear. But there was definitely something in the sky and it was getting bigger and bigger.`,
    `Trees. It was something about the trees. The way they swayed with the wind in unison. The way they shaded the area around them. The sounds of their leaves in the wind and the creaks from the branches as they sway, The trees were making a statement that I just couldn't understand.`,
    `Finding the red rose in the mailbox was a pleasant surprise for Sarah. She didn't have a boyfriend or know of anyone who was interested in her as anything more than a friend. There wasn't even a note attached to it. Although it was a complete mystery, it still made her heart jump and race a little more than usual. She wished that she could simply accept the gesture and be content knowing someone had given it to her, but that wasn't the way Sarah did things. Now it was time to do a little detective work and try to figure who had actually left the red rose.`,
    `Turning away from the ledge, he started slowly down the mountain, deciding that he would, that very night, satisfy his curiosity about the man-house. In the meantime, he would go down into the canyon and get a cool drink, after which he would visit some berry patches just over the ridge, and explore among the foothills a bit before his nap-time,`,
    `which always came just after the sun had walked past the middle of the sky. At that period of the day the sun’s warm rays seemed to cast a sleepy spell over the silent mountainside, so all of the animals, with one accord, had decided it should be the hour for their mid-day sleep.`,
    `He sat across from her trying to imagine it was the first time. It wasn't. Had it been a hundred? It quite possibly could have been. Two hundred? Probably not. His mind wandered until he caught himself and again tried to imagine it was the first time.`,
    `The headphones were on. They had been utilized on purpose. She could hear her mom yelling in the background, but couldn't make out exactly what the yelling was about. That was exactly why she had put them on. She knew her mom would enter her room at any minute, and she could pretend that she hadn't heard any of the previous yelling.`,
    `The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.`,
    `If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.`,
    `While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs.`,
    `Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.`,
    `A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.`,
    `Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.`,
    `Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.`
];
const item = document.getElementById("items");
const dataContainer = document.getElementById("data");

function shuffle(array){
    let currentIndex = array.length;
    let randomIndex;

    while(currentIndex!=0){
        randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex--;
        [array[currentIndex],array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

function generate(){
    if(item.value == 0){
        alert("The value cannot be zero");
    }else if(item.value > paragraphs.length){
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML= `${paragraphs[randomIndex]}`;
    }else {
        shuffle(paragraphs);
        const selectedParagraph = paragraphs.slice(0,item.value);
        dataContainer.innerHTML = selectedParagraph.map(para => `<p>${para}</p>`).join("");
    }
}