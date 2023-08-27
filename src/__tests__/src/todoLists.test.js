import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import TodoListsDashboard from '../../Components/TodoListsDashboard';

test('add todo List item: Check the modal rendering', async () => {
    render(<TodoListsDashboard />);
    const todoHeader = screen.getByText('Todo Items');
    const todoListAddBtn = screen.getByTestId('addTodoBtn');
    fireEvent.click(todoListAddBtn);
    expect(todoHeader).toBeInTheDocument();
});

test('add todo List item: Check the onclose function of modal', async () => {
    render(<TodoListsDashboard />);
    const todoHeader = screen.getByText('Todo Items');
    const todoListAddBtn = screen.getByTestId('addTodoBtn');
    fireEvent.click(todoListAddBtn);
    fireEvent.click(screen.getByTestId('cancelBtn'));
    expect(todoHeader).toBeInTheDocument();
});

test('add todo List item: Enter content and add the todo Item', async () => {
    render(<TodoListsDashboard />);
    const todoHeader = screen.getByText('Todo Items');
    const todoListAddBtn = screen.getByTestId('addTodoBtn');
    fireEvent.click(todoListAddBtn);
    await waitFor(() => expect(screen.getByTestId('timeField')).toBeInTheDocument());
    userEvent.selectOptions(screen.getByTestId("timeField"), ["Morning"]);
    fireEvent.change(screen.getByTestId('headingField'), 'task 1');
    fireEvent.change(screen.getByTestId('contentField'), 'content 1');
    userEvent.selectOptions(screen.getByTestId("typeField"), ["Personal"]);
    fireEvent.click(screen.getByTestId('submitBtn'));
    expect(todoHeader).toBeInTheDocument();
});

test('add todo List item: Handling the error', async () => {
    render(<TodoListsDashboard />);
    const todoHeader = screen.getByText('Todo Items');
    const todoListAddBtn = screen.getByTestId('addTodoBtn');
    fireEvent.click(todoListAddBtn);
    await waitFor(() => expect(screen.getByTestId('timeField')).toBeInTheDocument());
    userEvent.selectOptions(screen.getByTestId("timeField"), ["Morning"]);
    fireEvent.change(screen.getByTestId('headingField'), 'task 1');
    fireEvent.click(screen.getByTestId('submitBtn'));
    expect(screen.getByText('All Fields are required')).toBeInTheDocument();
});
