import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          required
          name="content"
          placeholder="Type here"
          type="text"
          className="input input-bordered join-item w-full"
        />
        <button type="submit" className="btn btn-primary join-item">
          CREATE TASK
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
