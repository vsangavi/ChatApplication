import "./App.css";
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField=(field,value)=>{
    setForm({
      ...form,
      [field]:value
    })
    if(!!errors[field])
    setErrors({
      ...errors,
      [field]:null
    })
  }

  const handleSubmit=e=>{
    e.preventDefault()

    console.log(form)

  }
  return (
    <div className="parabox">
      <h1>STUDENT MARKS ENTRY</h1>
      <div className="div2">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" value={form.formBasicText??""}
              onChange={(e) => setField('formBasicText',e.target.value)}
              isInvalid={!!errors.formBasicText} />
              <Form.Control.Feedback type="invalid">
              {errors.formBasicText}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRoll">
            <Form.Label>Roll No</Form.Label>
            <Form.Control type="text" placeholder="Roll no" value={form.formBasicRoll??""}
              onChange={(e) => setField('formBasicRoll',e.target.value)}
              isInvalid={!!errors.formBasicRoll} />
              <Form.Control.Feedback type="invalid">
              {errors.formBasicRoll}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMark1">
            <Form.Label>SSLC</Form.Label>
            <Form.Control type="numeric" placeholder="10th mark" value={form.formBasicMark1??""}
              onChange={(e) => setField('formBasicMark1',e.target.value)}
              isInvalid={!!errors.formBasicMark1} />
            <Form.Control.Feedback type="invalid">
              {errors.formBasicMark1}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMark1">
            <Form.Label>HSC</Form.Label>
            <Form.Control type="numeric" placeholder="12th mark" value={form.formBasicMark2??""}
              onChange={(e) => setField('formBasicMark2',e.target.value)}
              isInvalid={!!errors.formBasicMark2} />
            <Form.Control.Feedback type="invalid">
              {errors.formBasicMark2}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit} type="submit" >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
