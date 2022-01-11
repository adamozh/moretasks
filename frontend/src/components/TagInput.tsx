import { Autocomplete, Chip, TextField, Toolbar } from "@mui/material"
import { ChangeEventHandler, FocusEventHandler } from "react"

type TagInputProps = {
    tags: Array<string>
    onChange: (newTags: Array<string>) => void
}

export const TagInput = (props: TagInputProps) => {

    return (
        <Autocomplete
        value={props.tags}
        fullWidth
        size="small"
        multiple
        id="tags-input"
        options={["option 1", "option 2", "option 3"]}
        freeSolo
        renderTags={(value: string[], getTagProps) => {
            return value.map((option: string, index: number) => (
                <Chip size="small" variant="outlined" label={option} {...getTagProps({ index })} />
            ))
        }}
        renderInput={(params) => (
            <TextField 
            {...params}
            variant="outlined"
            label="Add Tag(s)"
            />
        )}
        />
    )

}