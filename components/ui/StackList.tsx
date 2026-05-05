interface StackListProps {
  stack: string[];
}

export const StackList = ({ stack }: StackListProps ) => {
  return (
    <div className="flex flex-wrap mt-auto gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="text-xs px-3 py-1 bg-primary-shade text-accent dark:text-primary-off font-bold rounded-md"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};
