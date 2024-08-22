import { updateTask } from "@/utils/actions";

const EditForm = ({ task }) => {
  const { id, completed, content } = task;

  return (
    <form
      action={updateTask}
      className="max-w-sm rounded-lg border border-base-300 p-12"
    >
      <input type="hidden" value={id} name="id" />
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox-primary checkbox checkbox-sm"
          />
        </label>
        <button type="submit" className="btn btn-primary btn-sm btn-block">
          edit
        </button>
      </div>
    </form>
  );
};

export default EditForm;
