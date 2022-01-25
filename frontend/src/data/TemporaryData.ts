import { Tag } from "../entities/Tag";
import { Task } from "../entities/Task";

const dateNow = new Date()

const date2020 = new Date()
date2020.setFullYear(2020)

const date2019 = new Date()
date2019.setFullYear(2019)


export const temporaryTasks: Task[] = [
    {
        id: 0,
        name: "Do Tutorial 3",
        done: false,
        tags: [
            {
                name: "CS2040S"
            },
            {
                name: "schoolwork"
            }
        ],
        date: dateNow
    },
    {
        id: 1,
        name: "Watch Lecture 3",
        done: false,
        tags: [
            {
                name: "CS3230"
            },
            {
                name: "schoolwork"
            }
        ],
        date: date2020
    },
    {
        id: 2,
        name: "Bring coco out for a walk",
        done: false,
        tags: [],
        date: date2019
    },
    {
        id: 3,
        name: "Create layout for moreTasks",
        done: false,
        tags: [
            {
                name: "CVWO"
            }
        ]
    }
]

const getTagsFromTasks = (temporaryTasks: Task[]) : Tag[] => {
    const allStringTags: string[] = []
    temporaryTasks.map((task: Task) => {
        task.tags.map((tag: Tag) => {
            allStringTags.push(tag.name)
        })
    })
    const uniqueTags = new Set<string>(allStringTags)
    const uniqueTagsArray = Array.from(uniqueTags).sort()
    return uniqueTagsArray.map((tag: string) => {
        return {
            name: tag
        }
    })
}

export const temporaryTags = getTagsFromTasks(temporaryTasks)