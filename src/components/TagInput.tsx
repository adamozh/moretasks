import { Autocomplete, Chip, TextField } from "@mui/material"
import { Tag } from "../entities/Tag"

type TagInputProps = {
    tags: Array<string>
    options: Tag[]
    onChange: (event: React.SyntheticEvent, value: string[], reason: string) => void
}

export const TagInput = (props: TagInputProps) => {

    return (
        <Autocomplete
        value={props.tags}
        fullWidth
        size="small"
        multiple
        id="tags-input"
        options={props.options.map(tag => tag.name)}
        freeSolo
        renderTags={(value: string[], getTagProps) => {
            return value.map((option: string, index: number) => (
                <Chip size="small" variant="outlined" label={option} {...getTagProps({ index })} />
            ))
        }}
        onChange={props.onChange}
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