import prisma from "@/utils/db";

const prismaHandlers = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: "wake up",
  //   },
  // });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
};

const PrismaExamples = async () => {
  const tasks = await prismaHandlers();

  if (tasks.length === 0)
    return <h2 className="mt-8 text-lg font-medium">No tasks to show</h2>;

  return (
    <div>
      <h1>Primas examples Page</h1>
      {tasks.map((task) => {
        return (
          <div key={task.id} className="card-bordered">
            <h2> 😎 {task.content}</h2>;
          </div>
        );
      })}
    </div>
  );
};

export default PrismaExamples;
