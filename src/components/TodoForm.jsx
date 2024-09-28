import { useState } from "react";
import {useDispatch} from "react-redux";
import { addNewTodo } from "../redux/actions";

const TodoForm = () => {

    const [text, setText] = useState("");

    const dispatch = useDispatch();
    const onFromSubmit = (e) => {
        e.preventDefault();
       dispatch(addNewTodo(text));
       setText('');
    }
    const onInputChange = (e) => {
        setText(e.target.value);
    }
    return (
        <form className="form" onSubmit={onFromSubmit}>
            <input placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text} />
        </form>
    )
}
export default TodoForm;