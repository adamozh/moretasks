import { TaskInput } from "./TaskInput"
import { TaskList } from "./TaskList"

const tasksPlaceholder = ["Task 1", "Task 2", "Task 3"]

export const Body = () => {
    return (
        <div className="container">
            <div className="flex justify-center items-center">
            </div>
            <div>
                <div>
                    <TaskInput />
                    <TaskList tasks={tasksPlaceholder}/>
                </div>
                
            </div>
        </div>
    )
}