import React from 'react';
import './App.css';
import './index.css';
import QuestionForm from "./components/QuestionForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/material'

function App() {
  return (
      <Container maxWidth="sm">
        <QuestionForm />
        </Container>
  );
}

export default App;
