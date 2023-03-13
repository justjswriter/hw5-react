import { useState, useEffect } from "react";
import apiClient from "../../common/api";
import { ITodos } from "../../types";
import Todo from "../Todo/Todo";


const PostList = () => {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const getPost = async () => {
    try {
      const res = await apiClient.get<ITodos[]>("/todos");
      setTodos(res.data);
    } catch (error) {
      console.log({ error });
    } finally{
        setIsLoading(false)
    }
  };

  //mounted
  useEffect(() => {
    getPost();
  }, []);

  if(isLoading){
    return(
        <div>Loading</div>
    )
  }

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => <Todo key={todo.id} {...todo}/>)}
    </div>
  );
};

export default PostList;
