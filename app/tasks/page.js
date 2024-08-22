import TasksList from "@/components/TasksList";
import TaskForm from "@/components/TaskForm";
import TaskFormCustom from "@/components/TaskFormCustom";
export const dynamic = "force-dynamic";
const Tasks = () => {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TasksList />
    </div>
  );
};

export default Tasks;
