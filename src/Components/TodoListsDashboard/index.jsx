import React, { Fragment, useState, Suspense } from 'react';
import { Button } from 'react-bootstrap';
import './TodoListsDashboard.css';

const AddNewItem = React.lazy(() => import('../AddNewItem'));
const TodoLists = React.lazy(() => import('../TodoLists'));

const TodoListsDashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [todoItems, setTodoItems] = useState([]);

    const handleSelection = () => {
        setShowModal(!showModal);
    };

    const handleSubmit = (value) => {
        setTodoItems([...todoItems, value])
        setShowModal(!showModal);
    }

    return (
        <Suspense>
            <Fragment>
                <div className='container'>
                    <h1 className='header'> Todo Items</h1><br />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='todolistContainer'>
                            <Button data-testid='addTodoBtn' className='todoCardBtn' onClick={handleSelection} >
                                Add Todo
                            </Button>
                        </div>
                    </div>
                </div>
                <br />
                {todoItems?.length > 0 &&
                    <div className='container'>
                        <div className='row'>
                            <TodoLists todoItems={todoItems} />
                        </div>
                    </div>
                }
                {showModal &&
                    <AddNewItem
                        show={showModal}
                        onHide={handleSelection}
                        onSubmit={handleSubmit}
                    />}
            </Fragment>
        </Suspense>
    )
};

export default TodoListsDashboard;
