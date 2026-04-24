export const SectionShell = ({
    id,
  header,
  children,
}: {
  id: string;
  header: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      id={id}
      className="px-8 md:px-12 lg:px-32 py-16 mb-20 md:mb-32"
    >
      <h2 className="text-sz-sect text-center mb-10">{header}</h2>
      {children}
    </section>
  );
};
