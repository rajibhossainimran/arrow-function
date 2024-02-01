// 2) How will you get the output [Advanced - uses 2D matrix
//     concept]
//     a) level-2
//     b) 72.8621

let data =
[
{"pHeroCourses": {"course-x": "web development"}},
{"pHeroCourses": {"course-y": "phitron"}},
{"pHeroCourses": {"course-z": "acc"}},
{"pHeroCourses": {"course-xyz": "level-2"},
"locationField": {"en-US": {"lat": 19.28563,"lon": 72.8691}}
}
];
const findNumber = data=>{
    const find = data[3].locationField['en-US'].lon;
    console.log(find)
}
// findNumber(data);


// 3) How will you get the output
// a) abc
// b) xyz
let activities = {
    activity1 : [{
    name : "listen on spotify", Programming_Hero_song_list: {song_1 : "abc", song_2 : "bcd"},id : 1},

    {name : "listen music through bot", song_list: {song_1 : "wxy", song_2 : "xyz"},
    id : 2}
    ]
};

const findABC = activity =>{
    const findActivity =activity.activity1[0].Programming_Hero_song_list.song_1.song_list;
    // console.log(findActivity)

    // find xyz
    const findXyz = activities.activity1[1].song_list.song_2;
    console.log(findXyz)
}
findABC(activities);