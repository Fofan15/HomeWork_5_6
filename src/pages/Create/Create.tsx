import React, { useState } from "react";
import {useForm} from "react-hook-form";
import {
  Button,
  TextField,
  Container
} from '@mui/material'
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const FormContainer = styled('div')(({ theme }) => ({
  maxWidth: 400,
  padding: theme.spacing(3),
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.shape.borderRadius,
}));

const Create = () => {
  const [response, setResponse] = useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((responseData) => {
        setResponse(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <StyledContainer>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Ім'я"
            {...register('name', { required: true })}
            error={Boolean(errors.name)}
            helperText={errors.name ? 'Обов\'язкове поле' : ''}
            fullWidth
          />
          <TextField
            label="Посада"
            {...register('job', { required: true })}
            error={Boolean(errors.job)}
            helperText={errors.job ? 'Обов\'язкове поле' : ''}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Створити/Оновити користувача
          </Button>
        </form>

        {response && (
          <div>
            <h2>Відповідь від сервера:</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </FormContainer>
    </StyledContainer>
  );
};

export default Create;