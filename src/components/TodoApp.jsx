import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";
// import Navbar from "@/components/NavBar";
// import Form from "@/components/Form";

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
};
export default TodoApp;