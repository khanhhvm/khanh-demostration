import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';

const Example2 = () => {
    const [first,setFirst] = useState(0);
    const [second,setSecond] = useState(0);
    const [third,setThird] = useState(0);
    const [max, setMax] = useState();
    const [error1, setError1] = useState(null);
    const [error2, setError2] = useState(null);
    const [error3, setError3] = useState(null);
    const [error, setError] = useState(null);

    const validate = () =>{
        if(Number(first) < 0) {
            setError1("First data is invalid. Must be >= 0");
            return false;
        }
        if(Number(second) < 0) {
            setError2("Second data is invalid. Must be >= 0");
            return false;
        }
        if(Number(third) < 0) {
            setError3("Third data is invalid. Must be >= 0");
            return false;
        }

        if(first === second || second === third || first === third)
        {
            setError("Data is invalid. Must be identical");
            return false;
        }
        return true;
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        setMax(first);
        setError1("");
        setError2("");
        setError3("");
        setError("");

        if(validate()){
            if(Number(first) > Number(second)) {
                if(Number(first) <= Number(third)) setMax(third);
                else setMax(first);
            }
            else {
                if(Number(second) > Number(third)) setMax(second);
                else setMax(third);
            }
        }
        
    }

    return (
        <>
        <h5>Find the biggest number between 3 numbers.</h5>
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter first number:</Form.Label>
                <Form.Control type="number" placeholder="0" onChange={e => setFirst(e.target.value)} />
            </Form.Group>
            {error1 && (<Alert key="danger" variant="danger">{error1}</Alert>)}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Enter second number:</Form.Label>
                <Form.Control type="number" placeholder="0" onChange={e => setSecond(e.target.value)} />
            </Form.Group>
            {error2 && (<Alert key="danger" variant="danger">{error2}</Alert>)}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Enter third number:</Form.Label>
                <Form.Control type="number" placeholder="0" onChange={e => setThird(e.target.value)} />
            </Form.Group>
            {error3 && (<Alert key="danger" variant="danger">{error3}</Alert>)}
            <Button type="submit">Submit</Button>
        </Form>
        <br />
        {error && (<Alert key="danger" variant="danger">{error}</Alert>)}
        {max && (<h4><Badge bg="info">Maximum number: <Badge pill bg="light" text="dark">{max}</Badge></Badge></h4>)}
   
        </>
    )
};

export default Example2;
