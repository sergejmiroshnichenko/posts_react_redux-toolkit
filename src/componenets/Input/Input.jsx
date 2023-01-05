import React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";


const Input = ({ name, label, variant = 'outlined', margin, InputProps, ...props }) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <TextField
                    {...field}
                    {...props}
                    onChange={(e) => field.onChange(e.target.value)}
                    label={label}
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    size='medium'
                    error={!!errors[name]}
                    helperText={errors[name] ? errors[name].message : ''}
                    InputProps={InputProps}
                    sx={{
                        "& .MuiFormLabel-root-MuiInputLabel-root": { fontSize: '1.19rem' },
                        "& .MuiFormHelperText-root.Mui-error": {
                            fontSize: '0.843rem',
                            position: 'absolute',
                            marginTop: '55px'
                        },
                        "& .MuiInputBase-root.MuiOutlinedInput-root": { marginBottom: '12.5px' },
                        "& .MuiInputBase-root": { backgroundColor: 'white', letterSpacing: '0.7px' },
                        "& .MuiInputLabel-root.Mui-focused": { color: '#a47c48' },
                        "& .MuiInputBase-input.MuiOutlinedInput-input": { letterSpacing: '1.25px' },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                                borderLeftWidth: 6,
                                padding: '4px !important',
                                borderColor: '#a47c48'
                            }
                        },
                    }}
                />
            )}
        />

    );
};

export default Input;