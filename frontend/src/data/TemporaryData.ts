import { Tag } from "../entities/Tag";
import { Task } from "../entities/Task";

export const temporaryTasks: Task[] = [
    {
        name: "Do Tutorial 3",
        done: false,
        tags: [
            {
                name: "CS2040S"
            },
            {
                name: "schoolwork"
            }
        ]
    },
    {
        name: "Watch Lecture 3",
        done: false,
        tags: [
            {
                name: "CS3230"
            },
            {
                name: "schoolwork"
            }
        ]
    },
    {
        name: "Bring coco out for a walk",
        done: false,
        tags: []
    },
    {
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