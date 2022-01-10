import { Autocomplete, Box, Button, Chip, Container, TextField, Toolbar } from "@mui/material"

export const TagInput = () => {
    return (
        <Autocomplete
        sx={{ width: '50%' }}
        multiple
        id="tags-input"
        options={["option 1", "option 2", "option 3"]}
        freeSolo
        renderTags={(value: string[], getTagProps) => {
            return value.map((option: string, index: number) => (
                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
            ))
        }}
        renderInput={(params) => (
            <TextField 
            {...params}
            variant="standard"
            label="Add Tag(s)"
            />
        )}
        />
    )

}