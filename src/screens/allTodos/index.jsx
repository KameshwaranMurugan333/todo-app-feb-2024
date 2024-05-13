import React from "react";
import { Table } from "react-bootstrap";
import axios from 'axios';

export const AllTodos = (props) => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://664188143d66a67b343417df.mockapi.io/todos')
            .then((response) => {
                // handle success
                setData(response.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .finally(() => {
                // always executed
            });
    }, []);

    return <div>
        <h1>All Todos</h1>

        <Table striped bordered hover>
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
                        <td>{new Date(todo.date).toString()}</td>
                        <td>{todo.is_completed ? "Yes" : "No"}</td>
                        <td>{new Date(todo.created_at).toString()}</td>
                        <td>{new Date(todo.updated_at).toString()}</td>
                    </tr>
                })}
            </tbody>
        </Table>
    </div>
}