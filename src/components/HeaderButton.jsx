import { Button } from "@mui/material";

/**
 * 
 * @param {name} name
 * @returns HeaderButton
 */
export default function HeaderButton(props) {
    const indexName = props.name

    return (
        <Button
            color="fff"
        >
            {indexName}
        </Button>
    );
}