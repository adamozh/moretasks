import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

export const TaskList = (props: {tasks: string[]}) => {
    return (
        <ul id="tasklist">
            {props.tasks.map((task) => <FormControlLabel control={<Checkbox defaultChecked />} label={task} />)}
        </ul>
    )
}