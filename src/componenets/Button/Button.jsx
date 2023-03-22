import { Button } from '@mui/material'


export const PrimaryButton = ({ children, color, ...props }) => {
    return (
        <Button
            variant='contained'
            type='submit'
            size='small'
            disableElevation
            color={color}
             {...props}>
            {children}
        </Button>
    );
};

