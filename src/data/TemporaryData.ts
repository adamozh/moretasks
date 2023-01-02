import { Tag } from "../entities/Tag";
import { Task } from "../entities/Task";

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
                name: "NUS"
            }
        ]
    },
    {
        id: 1,
        name: "Watch Lecture 4",
        done: false,
        tags: [
            {
                name: "CS2100",
            },
            {
                name: "NUS"
            }
        ]
    }
]

export const getTagsFromTasks = (temporaryTasks: Task[]) : Tag[] => {
    const allStringTags: string[] = []
    temporaryTasks.forEach((task: Task) => {
        task.tags.forEach((tag: Tag) => {
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