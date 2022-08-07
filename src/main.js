
const todoListID_1 = "3fx-0dfas";  //v1()
const todoListID_2 = "3fx-1dfas";  //v1()

const todoLists = [
    {
        id: todoListID_1,
        title: "What to learn",
        filter: "all"
    },
    {
        id: todoListID_2,
        title: "What to eat",
        filter: "all"
    },

]

const tasks = {
    [todoListID_1]: [
        {name: "HTML", isDone: true},
        {name: "CSS", isDone: true},
        {name: "JS", isDone: false},
    ],
    [todoListID_2]: [
        {name: "Beer", isDone: true},
        {name: "Fish", isDone: true},
        {name: "Lays", isDone: false},
    ]
}

for (let key in tasks){
    tasks[key].find(t => t.name === "Beer")
    console.log(tasks)
}


// for (let i = 0; i < tasks[todoListID_2].length; i++) {
//     if (tasks[todoListID_2][i].name === "Fish") {
//         console.log(tasks[todoListID_2][i].name)
//     }
// }

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

