// 4) How will you display
// a) Petersburg
// b) Herry
let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12, "street": "St. Jonson", "city": "Petersburg", "country": "UK"
        }
    },

    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            Programming_Hero_building_no: 85, "street": "DC road", "city": "Kachukhet", "country": "Bangladesh"
        }
    }

};
const findPetersburg = student => {
    const peterbug = student[2222].address.city;
    // console.log(peterbug);
    const Herry = student[3333].name;
    // console.log(Herry)
}
findPetersburg(students);


// 5) How will you display
// a) programming er coddogosti
// b) VW
// c) Bangladesh
let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,

    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],

        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
};

const findBangladesh = data => {
    const book = data.additionalData.books[1];
    // console.log(book);
    const findVw = data.additionalData.moreDetails.hometown.state;
    // console.log(findVw);
    const bangladesh = data.additionalData.moreDetails.countriesLivedIn[0];
    // console.log(bangladesh)

}
findBangladesh(instructor);

// 6) How will you display
// a) B
// b) D

const studentData = [

    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }]
            }]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'B' }]
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]
            }]
    },
]

const findBD = data => {
    const findB = data[0].details[1].gradingDetails[0].grade;
    // console.log(findB);
    const findD = data[1].details[1].gradingDetails[0].grade;
    // console.log(findD);
}
findBD(studentData);


// 7) How will you display
// a) habluder adda
// b) Beginner
let data = {
    data:

        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

const findBeginner = dat =>{
    const findHabul = dat.data[0].bookDetails.name;
    // console.log(findHabul)
    const findBeg = dat.data[1].bookCategory;
    console.log(findBeg);
}
findBeginner(data);