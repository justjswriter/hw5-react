import { useEffect, useState } from "react";
import apiClient from "../../common/api";
import { ITodos, IUser } from "../../types";
import './Todo.css'

const Todo = (props: ITodos) => {
  const [userData, setUserData] = useState<IUser[]>([]);
  const getUser = async () => {
    try {
      const res = await apiClient.get<IUser[]>(`/users?id=${props.userId}`);
      setUserData(res.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (userData.length === 0) {
    return <div>loading</div>;
  }

  return (
    <div className={props.completed ? "todoItem done" : "todoItem"}>
      <div className="todoAuthor">
        <p>{userData[0].name}</p>
        <p className="todoEmail">{userData[0].email}</p>
      </div>
      <p className="todoTitle">{props.title}</p>
    </div>
  );
};

export default Todo;
