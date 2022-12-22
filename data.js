const centerContent = document.querySelector('#center-content');

export const data = {
    shows: {
        content: [//shows
            {
                date: '01.01.1998',
                name: 'generic show name',
                venue: 'string',
                time: '20:00'
            },
            {
                date: 'a date',
                name: 'generic show name',
                venue: 'a generic venue',
                time: '20:00'
            }//shows
        ],
        build: function () {
            let fragment = document.createDocumentFragment();
            for (let item in this.content) {
                let subItem = this.content[item]
                let div = document.createElement('div');
                let nameSect = document.createElement('h3')
                nameSect.className = 'show-name'
                nameSect.textContent = subItem.name
                div.className = 'showDiv';
 
                div.appendChild(nameSect);
 
                let info = document.createElement('p')
                info.className = 'show-info'
                info.innerHTML = ('Date: ' + subItem.date + ' <br>Time: ' + subItem.time + ' <br>Venue: ' + subItem.venue);
                div.appendChild(info);
                fragment.appendChild(div);
            }
            return fragment;
        },
    },
    songs: {
        discography: [
            {
                singles: ['i hope this feeling doesn\'t last','i\'ll believe it','radiators'],
                albums: [
                    {
                        title: 'yearning',
                        release_date: '05/06/2022',
                        cover_art: 'https://f4.bcbits.com/img/a3343335573_16.jpg',
                        tracklist: ['i hope this feeling doesn\'t last','i\'ll believe it','glue','enjoy the view','what i\'ve realised','lately','aftermath','radiators','about you','final words']
                    },
                    {
                        title: "lately i haven't been sleeping",
                        release_date: '26/08/2020',
                        cover_art: 'https://f4.bcbits.com/img/a0491360136_16.jpg',
                        tracklist: ['the vomit song','wasted time','shooting stars','bones']
                    }
                ]
            }
        ],
        content: [


//songs 
        
{
    id: "0",
    title: "i hope this feeling doesn't last ",
    year: "2019",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/08RWnzMJcEhU3YwX5mrvo0?si=fb9fc4bc1426452a",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "sometimes my fingertips arent good enough <br>" + 
"textures feel better when i brush em against my lips<br>" + 
"and i prefer my tea in the summer<br>" + 
"in air conned rooms where the heat always escapes me<br>" + 
"i think i see the world a little differently<br>" + 
"train tracks & jet packs are the soundtrack of my dreams<br>" + 
"i’m a little too affected by what i see on tv <br>" + 
"my friends hang on my wall to remind me <br>" + 
"that i <br>" + 
"am a subject of humanity<br>" + 
"a chapter of reality<br>" + 
"and i’m still tryna wrap my head around it <br>" + 
"<br>" + 
"i’ve told my friends i dont think i’ll make it to 30<br>" + 
"i’m not suicidal i just dont think it exists<br>" + 
"i have a problem where if i cant imagine it i wont do it<br>" + 
"and sorry mum but i cant imagine having kids<br>" + 
"oh i think i see things differently <br>" + 
"the best thing about that kiss was the look on his face<br>" + 
"and the best wine i’ve ever had was a four dollar bottle of gossips<br>" + 
"but i play board games with my friends and they remind me that i<br>" + 
"am subject to them loving me<br>" + 
"am a chapter in our legacy<br>" + 
"and i’m still tryna wrap my head around it <br>" + 
"<br>" + 
"i dont know why people live <br>" + 
"and at this point i’m too scared to ask<br>" + 
"too many nights thinking about death<br>" + 
"i hope this feeling doesnt last<br>" + 
"i dont know why people live <br>" + 
"and at this point i’m too scared to ask<br>" + 
"too many nights staring at the ceiling <br>" + 
"i hope this feeling doesnt last",
    about: "placeholder"
},

{
    id: "1",
    title: "i'll believe it",
    year: "2019",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/6WxvrEMECVhYBQ9uQLE4gJ?si=e26a9a21012f4896",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "What if we run out of things to say<br>" + 
"Cause I’ve tied my tongue to the back of your face<br>" + 
"I guess it wouldn’t be too bad to cut it off<br>" + 
"Cause if I can’t talk to you<br>" + 
"I’d rather not talk at all<br>" + 
"Why’d you keep calling<br>" + 
"In the middle of the day<br>" + 
"When all I talk about is how I’m scared of change<br>" + 
"Well when you get to the crux of it<br>" + 
"I don’t get why you say I’m your favourite phone call<br>" + 
"<br>" + 
"But I’ll believe it when I see it<br>" + 
"I’ll believe it when I see it<br>" + 
"<br>" + 
"Maybe God is racist to aliens<br>" + 
"And we haven’t seen any because She hates them<br>" + 
"I spend too much time pondering the sky<br>" + 
"And you never try to tie me back down<br>" + 
"What if we run out of things to do<br>" + 
"Maybe one day we’ll grow tired of my room<br>" + 
"But I tell you<br>" + 
"Even when you’re against yourself<br>" + 
"My hands fit your hands perfectly<br>" + 
"<br>" + 
"I’ll believe it when I see it<br>" + 
"I’ll believe it when I see it<br>" + 
"<br>" + 
"Maybe I’m just sitting here waiting for you<br>" + 
"To change your mind<br>" + 
"Because to be alive is to be awake<br>" + 
"And these days darling I am just so tired<br>" + 
"Good dreams are the ones that sting<br>" + 
"And every year is an abstract thing<br>" + 
"And your words seem to light the dim<br>" + 
"<br>" + 
"I’ll believe it when I see it <br>" + 
"I’ll believe it when I see it<br>" + 
"I’ll believe it when I see it<br>" + 
"I’ll believe it when I see it <br>" + 
"I’ll believe it when I see it<br>" + 
"I’ll believe it when I see it ",
    about: "placeholder"
},

{
    id: "2",
    title: "glue",
    year: "2020",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/3xde9RhE5MZZ1CPsGK91NJ?si=a4239ac692e14ed1",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "loneliness comes quick & thick at night<br>" + 
"punctures my lungs <br>" + 
"and holds me til im sick with it <br>" + 
"i just wanna be behind your eyes<br>" + 
"be the light<br>" + 
"i wanna be what makes your face light up<br>" + 
"but you wont even look at me <br>" + 
"<br>" + 
"oooo but i like you<br>" + 
"please dont leave me as number two<br>" + 
"i know our moments have been too few<br>" + 
"but oooo i like you<br>" + 
"please dont leave me as number two<br>" + 
"let me wrap up your heart and stick it to mine with glue <br>" + 
"<br>" + 
"oh i just wish you’d let me kiss you between the eyes<br>" + 
"hold my hand feel my love til you’re sick with it<br>" + 
"someone once told me i’m the first girlfriend type<br>" + 
"but let me be your first, last, only lady<br>" + 
"let me keep you up at night<br>" + 
"<br>" + 
"chorus<br>" + 
"<br>" + 
"has anyone told you<br>" + 
"you’re the prettiest girl in the world<br>" + 
"i’m gonna tell you<br>" + 
"i want us to be together<br>" + 
"<br>" + 
"oh i think we are meant to be <br>" + 
"like arts & crafts get stuck with me<br>" + 
"compare our hands shape i want to see<br>" + 
"how our hands fit together<br>" + 
"be with me <br>" + 
"<br>" + 
"chorus <br>" + 
"<br>" + 
"stick it to mine with glue<br>" + 
"<br>" + 
"let me wrap up your heart<br>" + 
"& stick it to mine with glue <br>" + 
"",
    about: "placeholder"
},

{
    id: "3",
    title: "enjoy the view",
    year: "2020",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/0sZ7lrCtISqQXfuj42DCmw?si=fb8b3fbb295e4f89",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "do you ever feel like<br>" + 
"its all been made for you<br>" + 
"i can’t imagine needing to impress<br>" + 
"any one but you<br>" + 
"are you the somebody <br>" + 
"who’ll walk the long way with me <br>" + 
"i dont know where we’re going <br>" + 
"but i like walking unknown streets <br>" + 
"<br>" + 
"i’ll stare at your cheeks for a while<br>" + 
"and as you enjoy the view<br>" + 
"i will too<br>" + 
"<br>" + 
"when shadows shift from black to blue<br>" + 
"and oxygen burns my throat <br>" + 
"cut to me laying in my room<br>" + 
"yearning to hold you dont u choke<br>" + 
"<br>" + 
"how would your hips feel in my hands <br>" + 
"wanna get too close & still before we kiss<br>" + 
"nothing here but the sound of my fan <br>" + 
"tangled in the white noise<br>" + 
"& tension of this <br>" + 
"<br>" + 
"are you the somebody<br>" + 
"who’ll walk the long way with me <br>" + 
"i dont know where we’re going<br>" + 
"but i like wandering unknown streets<br>" + 
"<br>" + 
"i’ll stare at your cheeks for a while<br>" + 
"while you enjoy the view <br>" + 
"i will too",
    about: "placeholder"
},

{
    id: "4",
    title: "what i've realised",
    year: "2020",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/0nqUMZS1ZMTQgXIj3lm6EA?si=932d771b8a6346ed",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "i think im in love with you<br>" + 
"no not the friendship kind<br>" + 
"and its frustrating<br>" + 
"theres always a them and <br>" + 
"never a me on your mind <br>" + 
"cant say im interested in liberation<br>" + 
"but validation might be nice <br>" + 
"not sure if you know<br>" + 
"but you turn the cogs behind my eyes<br>" + 
"<br>" + 
"one day i’m going to explode and tell you everything <br>" + 
"i’ll drive to your road leave my heart with the mail and go home<br>" + 
"<br>" + 
"although we never mention it<br>" + 
"dont think i’ve forgotten<br>" + 
"what happened with us years ago<br>" + 
"spilled my guts in the front seat at 4am<br>" + 
"why are all my love songs about you<br>" + 
"<br>" + 
"one day i’m going to explode and tell you everything <br>" + 
"i’ll drive to your road leave my heart with the mail and go home",
    about: "placeholder"
},

{
    id: "5",
    title: "lately",
    year: "2020",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/3NRGx1nSyShMH7VA93aUA5?si=8683599ef6c14636",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "lately i’ve been remembering<br>" + 
"the way you held me <br>" + 
"in my dark room<br>" + 
"lately i’ve been remembering <br>" + 
"the way your face felt<br>" + 
"pressed against mine<br>" + 
"<br>" + 
"and i dont miss you<br>" + 
"i just miss how that felt<br>" + 
"i couldnt miss you<br>" + 
"you werent really anything else to me<br>" + 
"<br>" + 
"lately i’ve been reading romance novels<br>" + 
"and wondering if <br>" + 
"if i’ll ever find someone so consuming<br>" + 
"lately i’ve been considering<br>" + 
"coming out to my family<br>" + 
"but they wouldnt see me like you did<br>" + 
"<br>" + 
"chorus<br>" + 
"<br>" + 
"lately i’ve been missing<br>" + 
"long walks on the beach<br>" + 
"long drives where you couldnt stop looking at me <br>" + 
"lately i’ve been missing <br>" + 
"phone calls for hours<br>" + 
"this feeling crushing me<br>" + 
"<br>" + 
"and i dont miss you<br>" + 
"i just really miss how that felt<br>" + 
"and i might miss you<br>" + 
"if you didnt turn out like everyone else<br>" + 
"no i couldnt miss you <br>" + 
"i just miss the rush when you wanted <br>" + 
"to hold my hand<br>" + 
"maybe i miss you<br>" + 
"maybe i do<br>" + 
"maybe i miss you<br>" + 
"maybe i do<br>" + 
"<br>" + 
"lately i’ve been missing you",
    about: "placeholder"
},

{
    id: "6",
    title: "aftermath",
    year: "2020",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/50gamP8lr8vcPQrEFoh6m3?si=49e4b25de5ee4335",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "",
    about: "placeholder"
},

{
    id: "7",
    title: "radiators",
    year: "2020",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/4b6TmgQYUeRm7wApFYA0Ga?si=5e1de48735ca4824",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "i want to know the feeling<br>" + 
"of never being close enough<br>" + 
"the softest cheeks could sleep on mine <br>" + 
"and our fingers dance intertwined<br>" + 
"i’d know your mothers name <br>" + 
"and hopefully she’d like mine<br>" + 
"our proximity cant be defined<br>" + 
"<br>" + 
"but rain keeps falling<br>" + 
"and my lungs feel empty<br>" + 
"and no ones here<br>" + 
"<br>" + 
"i’d say<br>" + 
"lets get stuck in a broken down elevator<br>" + 
"15 floors up with no one around to save us<br>" + 
"i would stay relaxed for hours <br>" + 
"just getting to know your mind<br>" + 
"i’d want to give you all my time<br>" + 
"<br>" + 
"rain keeps falling<br>" + 
"and my lungs feel empty<br>" + 
"and no ones here<br>" + 
"radiators don't do shit anymore <br>" + 
"i need skin on skin to keep me warm<br>" + 
"<br>" + 
"i need someone to not keep their hands off me<br>" + 
"slip into my cracks<br>" + 
"keep me from shuddering<br>" + 
"and love definitely tastes as sweet<br>" + 
"as the romantic made it seem<br>" + 
"when the world ends baby<br>" + 
"i want you to stay with me<br>" + 
"yeah when the world ends baby<br>" + 
"i want you to stay with me<br>" + 
"<br>" + 
"because rain keeps falling <br>" + 
"and my lungs feel empty<br>" + 
"and no ones here<br>" + 
"radiators don't do shit anymore <br>" + 
"i need skin on skin to keep me warm<br>" + 
"<br>" + 
"so when the world ends baby<br>" + 
"i want you to stay with me<br>" + 
"love definitely tastes as sweet<br>" + 
"as the romantic made it seem<br>" + 
"so when the world ends baby <br>" + 
"i want you to stay with me<br>" + 
"",
    about: "placeholder"
},

{
    id: "8",
    title: "about you",
    year: "2020",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/3ICbKR7XP09PB5HCtyNW9p?si=14b7b05cdb064cb0",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "my eyes are carrying the moon<br>" + 
"the whole world asleep<br>" + 
"in a sea of blacky blue<br>" + 
"i’ll have a coffee or two<br>" + 
"the lights are softer at four am<br>" + 
"than when i’m with you<br>" + 
"<br>" + 
"my legs are cold but i’ll keep my fan on<br>" + 
"summers on its way with heat unheard of<br>" + 
"that heat is loud, but the night is silent<br>" + 
"in its wisdom<br>" + 
"i’ll probably fall asleep when the sun comes up<br>" + 
"<br>" + 
"but about you<br>" + 
"i feel like i have something to say<br>" + 
"but my tongue wont form it<br>" + 
"just enjoy yourself anyway<br>" + 
"i dont know if, i’ll<br>" + 
"make it to tomorrow day<br>" + 
"<br>" + 
"sometimes silence is my best friend<br>" + 
"but tonight i hear the whispers <br>" + 
"and i want it to end<br>" + 
"cant remember the last book i read<br>" + 
"dont let my brain turn to mush<br>" + 
"oh you’re my only friend <br>" + 
"<br>" + 
"but about you<br>" + 
"i feel like i have something to say<br>" + 
"but my tongue wont form it<br>" + 
"just enjoy yourself anyway<br>" + 
"i dont know if, i’ll<br>" + 
"make it to tomorrow day<br>" + 
"<br>" + 
"i give you love, and in return i’m confused<br>" + 
"how many times do i have to say<br>" + 
"i wish i never kissed you<br>" + 
"<br>" + 
"history has been my teacher <br>" + 
"but i havent been listening<br>" + 
"<br>" + 
"i wish i wasn’t writing this song<br>" + 
"but i wish there wasn’t anything wrong<br>" + 
"with us ",
    about: "placeholder"
},

{
    id: "9",
    title: "final words",
    year: "2020",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/0TMLuYyDqW7WQvhIrjagcw?si=d70f63608e9b4c53",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "i cant remember what it felt like now<br>" + 
"but when i feel it i know<br>" + 
"lying in my bed for days <br>" + 
"constantly feeling like i’ll throw<br>" + 
"up and i cant eat<br>" + 
"<br>" + 
"wish i had the self control to stay offline<br>" + 
"people keen retweeting things<br>" + 
"that trigger me i hate my timeline<br>" + 
"muted generic words like death and kill myself<br>" + 
"just keep trying to rest <br>" + 
"<br>" + 
"i cant imagine how much i bore my friends<br>" + 
"oh no i cant see you i have shaking hands <br>" + 
"coffee makes me sick<br>" + 
"but i’ll drink it anyway<br>" + 
"i dont even like how it tastes<br>" + 
"i’m a dumbass by the way<br>" + 
"<br>" + 
"what even is there to say <br>" + 
"the feeling stayed but it changed<br>" + 
"i know that i dont feel the same <br>" + 
"and i dont know why<br>" + 
"but i’m glad that im alive ",
    about: "placeholder"
},

{
    id: "10",
    title: "the vomit song",
    year: "2020",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/7iFMPCsC02AVKxy4IoAfYm?si=41d065907b1545e6",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "",
    about: "placeholder"
},

{
    id: "11",
    title: "wasted time",
    year: "2020",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/3OFRtJcL2xY2MFXwsD34Vj?si=0d6a32b92145457b",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "",
    about: "placeholder"
},

{
    id: "12",
    title: "shooting stars",
    year: "2020",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/7x4v1MNc5k6sqx7XZYjLSx?si=115e1806011a40c4",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "",
    about: "placeholder"
},

{
    id: "13",
    title: "bones",
    year: "2020",
    released: "TRUE",
    listen: [{
        spotify_url: "https://open.spotify.com/track/16rgq6DOmdElMSrHrM2mSZ?si=b0f2deabb494485c",
        apple_music_url: "https://music.apple.com/au/artist/georgia-marley/1469760632",
        youtube_url: "https://www.youtube.com/channel/UCKUQOq4PMrS9caBTs-p6_ng",
        bandcamp_url: "https://georgiamarley.bandcamp.com/music",
        soundcloud_url: "https://soundcloud.com/georgia-marley-music"
    }],
    lyrics: "",
    about: "placeholder"
},

{
    id: "14",
    title: "kissing in public",
    year: "",
    released: "FALSE",
    listen: [{
        spotify_url: "",
        apple_music_url: "",
        youtube_url: "",
        bandcamp_url: "",
        soundcloud_url: ""
    }],
    lyrics: "",
    about: "placeholder"
},

{
    id: "15",
    title: "love letter",
    year: "",
    released: "FALSE",
    listen: [{
        spotify_url: "",
        apple_music_url: "",
        youtube_url: "",
        bandcamp_url: "",
        soundcloud_url: ""
    }],
    lyrics: "",
    about: "placeholder"
},

{
    id: "16",
    title: "retrospect",
    year: "",
    released: "FALSE",
    listen: [{
        spotify_url: "",
        apple_music_url: "",
        youtube_url: "",
        bandcamp_url: "",
        soundcloud_url: ""
    }],
    lyrics: "",
    about: "placeholder"
},

{
    id: "17",
    title: "shivers",
    year: "",
    released: "FALSE",
    listen: [{
        spotify_url: "",
        apple_music_url: "",
        youtube_url: "",
        bandcamp_url: "",
        soundcloud_url: ""
    }],
    lyrics: "",
    about: "placeholder"
}
        //songs
    ],
        songBuild: function (link) {
            let fragment = document.createDocumentFragment();
            let subItem = link;
            console.log()
            let div = document.createElement('div');
            let nameSect = document.createElement('h3')
            nameSect.className = 'song-name'
            nameSect.textContent = subItem.title
            div.className = 'songDiv';
            div.appendChild(nameSect);
            let info = document.createElement('div');
            info.className = 'song-info';
            info.innerHTML = '<em>'+subItem.year+'</em><br>\
                <ul>\
                    <li><a href="'+subItem.listen.spotify_url+'">Spotify</a> \
                    <li><a href="'+subItem.listen[1]+'">Apple Music</a> \
                    <li><a href="'+subItem.listen[2]+'">Youtube</a> \
                    <li><a href="'+subItem.listen[3]+'">Bandcamp</a>\
                </ul>\
                <p><em>'+subItem.about+'</em></p>\
                <p> <strong>lyrics</strong><br><br>\
                '+subItem.lyrics+'</p>';
            div.appendChild(info);
            fragment.appendChild(div);
            return fragment;
        },
        build: function (){
            let fragment = document.createDocumentFragment();
            let songListDiv = document.createElement('div');
            songListDiv.className = 'songListDiv';
            let songListEl = document.createElement('ul');
            songListEl.className = 'songListEl'
            for (let song of this.content){
                let songEl = document.createElement('li');
                songEl.textContent = song.title;
                songEl.className = "song-name-list"
                songEl.id = song.id
                songListEl.appendChild(songEl);
            }
            songListDiv.appendChild(songListEl);
            fragment.appendChild(songListDiv);
        
            for (let child of songListEl.children){
                child.addEventListener('click', function(event){
                    let link = event.composedPath()[0].id;
                    console.log(data.songs.content[link])
                    centerContent.replaceChildren(data.songs.songBuild(data.songs.content[link]))
                })
            }
            return fragment;
        }
    },
    visuals: {
        content: [ //visuals
            {

            }//visuals
        ],
        build: function () {
            console.log('poop!')
        }
    },
    blog: {
        content: [//blog
                {
                    post_date: '01.01.1998',
                    post_time: '20:00',
                    title: 'string',
                    content: 'html'
                },
                {
                    post_date: '01.01.1998',
                    post_time: '20:00',
                    title: 'string',
                    content: 'html'
                }//blog
        ],
        build: function () { }
    },
    about: {
            content: [//about
                {
                    title: 'string',
                    content: 'html'
                }//about
            ],
            build: function () { }
    }
}

