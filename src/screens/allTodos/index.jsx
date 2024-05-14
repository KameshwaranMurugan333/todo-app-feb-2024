import React from "react";
import { Alert, Button, Col, Row, Spinner, Table } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const AllTodos = (props) => {

    const navigate = useNavigate();

    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    const onAddNewTodoBtnClicked = () => {
        navigate(AppRoutes.addTodo);
    };

    React.useEffect(() => {
        setIsLoading(true);
        setError(false);
        axios.get('https://664188143d66a67b343417df.mockapi.io/todos')
            .then((response) => {
                // handle success
                setData(response.data);
            })
            .catch((error) => {
                // handle error
                setError(true);
                console.log(error);
            })
            .finally(() => {
                // always executed
                setIsLoading(false);
            });
    }, []);

    return <div>

        <Row>
            <Col>
                <h1>All Todos</h1>
            </Col>

            <Col>
                <Button onClick={onAddNewTodoBtnClicked}>Add New Todo</Button>
            </Col>
        </Row>

        {isLoading && <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>}

        {error && <Alert variant={'danger'}>
            Something went wrong, Unable to fetch todos.
        </Alert>}

        {!isLoading && !error && <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Is Completed?</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
            </thead>
            <tbody>
                {data.map((todo) => {
                    return <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.date}</td>
                        <td>{todo.is_completed ? "Yes" : "No"}</td>
                        <td>{todo.created_at}</td>
                        <td>{todo.updated_at}</td>
                    </tr>
                })}
            </tbody>
        </Table>}
    </div>
}